import configparser
import json
import time

times = []

times.append(time.time())

config = configparser.ConfigParser()
config.read("config.ini")

times.append(time.time())
print("config init", times[-1]-times[-2])

#gets the files for the boards and the generator
mode = config["GENERAL"]["mode"]
if mode == "blackout":
	boardsfilename = "BlackoutBoards.json"
	genfilename = "Blackout.json"
elif mode == "lockout":
	boardsfilename = "LockoutBoards.json"
	genfilename = "Lockout.json"
elif mode == "longo":
	boardsfilename = "LongoBoards.json"
	genfilename = "Longo.json"
else:
	boardsfilename = config["GENERAL"]["boardsfilename"]
	genfilename = config["GENERAL"]["genfilename"]

boards = json.load(open("BoardsFiles\\" + boardsfilename, "r"))
gen = json.load(open("GeneratorJson\\" + genfilename, "r"))


times.append(time.time())
print("open json", times[-1]-times[-2])


#checks if a board hits the required conditions
def checkBoard(board, whitelistDict, blacklistDict):
	for i in range(25):
		if whitelistDict[i] != [""]:
			if not board[i] in whitelistDict[i]:
				return False
		if blacklistDict[i] != [""]:
			if board[i] in blacklistDict[i]:
				return False
	return True

def getBoardScore(board, scoreDict):
	score = 0
	for i in range(25):
		if scoreDict[i] != {}:
			if board[i] in scoreDict[i].keys():
				score += scoreDict[i][board[i]]
	return score

#gets a string represtation of a seed 
alphabet = "abcdefghijklmnopqrstuvwyz"
def getStringBoardFromSeed(seed):
	board = boards[seed]
	resultString = str(seed) + ": "
	for i in range(25):
		numberId = alphabet.index(board[i])
		resultString += gen[i][numberId] + ", "
	return resultString


max = len(boards)
if config["GENERAL"]["maxsearch"] != "":
	max = int(config["GENERAL"]["maxsearch"])

resultSeeds = []


whitelistDict = []
blacklistDict = []

for i in range(25):
	whitelistDict.append(config["TIER" + str(i+1)]["whitelist"].split(","))
	blacklistDict.append(config["TIER" + str(i+1)]["blacklist"].split(","))

times.append(time.time())
print("gen white/blacklist dicts", times[-1]-times[-2])

for i in range(max):
	if checkBoard(boards[i], whitelistDict, blacklistDict):
		resultSeeds.append([i, 0])

times.append(time.time())
print("checking boards", times[-1]-times[-2])

if config["GENERAL"]["usepoints"].lower() == "true":
	scoreDict = []

	for i in range(25):
		scoreDict.append({})
		for score in config["TIER" + str(i+1)]["pointed"].split(","):
			if score != "":
				scoreDict[i][score.split(":")[0]] = int(score.split(":")[1])

	times.append(time.time())
	print("gen score dict", times[-1]-times[-2])

	for board in resultSeeds:
		board[1] = getBoardScore(boards[board[0]], scoreDict)
	
	times.append(time.time())
	print("get score for each board", times[-1]-times[-2])

	resultSeeds.sort(key=lambda x: x[1], reverse=True)

	times.append(time.time())
	print("sort boards by score", times[-1]-times[-2])

max = len(resultSeeds)
if config["GENERAL"]["maxoutput"] != "":
	max = min(max, int(config["GENERAL"]["maxoutput"]))


if config["GENERAL"]["output"] == "seedonly":
	resultString = ""
	for i in range(max):
		resultString += str(resultSeeds[i][0]) + ", "
	open("Result.txt", "w").write(resultString)

elif config["GENERAL"]["output"] == "fullboard":
	resultString = ""
	for i in range(max):
		resultString += getStringBoardFromSeed(resultSeeds[i][0]) + "\n"
	open("Result.txt", "w").write(resultString)

elif config["GENERAL"]["output"] == "scored":
	resultString = ""
	for i in range(max):
		resultString += str(resultSeeds[i][0]) + " (" + str(resultSeeds[i][1]) + "), "
	open("Result.txt", "w").write(resultString)

times.append(time.time())
print("writing output to file", times[-1]-times[-2])
