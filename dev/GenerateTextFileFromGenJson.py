from os import path
import json
import pprint as pp

jsonData = json.load(open("GeneratorJson\\Longo.json", "r"))

alphabet = "abcdefghijklmnopqrstuvwxyz"

resultText = ""

for tier in range(len(jsonData)):
	resultText += "Tier " + str(tier+1) + "\n"
	for obj in range(len(jsonData[tier])):
		resultText += alphabet[obj] + " : " + jsonData[tier][obj] + "\n"
	resultText += "\n"

open("GeneratorKeys\\LongoKeys.txt", "w").write(resultText)