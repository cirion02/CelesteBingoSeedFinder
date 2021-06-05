
var fs = require('fs');

(function (j, i, g, m, k, n, o) {
    function q(b) {
        var e, f, a = this,
            c = b.length,
            d = 0,
            h = a.i = a.j = a.m = 0;
        a.S = [];
        a.c = [];
        for (c || (b = [c++]); d < g;) a.S[d] = d++;
        for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e;
        a.g = function (b) {
            var c = a.S,
                d = a.i + 1 & g - 1,
                e = c[d],
                f = a.j + e & g - 1,
                h = c[f];
            c[d] = h;
            c[f] = e;
            for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1];
            a.i = d;
            a.j = f;
            return i
        };
        a.g(g)
    }

    function p(b, e, f, a, c) {
        f = [];
        c = typeof b;
        if (e && c == "object")
            for (a in b)
                if (a.indexOf("S") < 5) try {
                    f.push(p(b[a], e - 1))
                } catch (d) { }
        return f.length ? f : b + (c != "string" ? "\0" : "")
    }

    function l(b, e, f, a) {
        b += "";
        for (a = f = 0; a < b.length; a++) {
            var c = e,
                d = a & g - 1,
                h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a);
            c[d] = h & g - 1
        }
        b = "";
        for (a in e) b += String.fromCharCode(e[a]);
        return b
    }
    i.seedrandom = function (b, e) {
        var f = [],
            a;
        b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f);
        a = new q(f);
        l(a.S, j);
        i.random = function () {
            for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1);
            for (; c >= n;) c /= 2, d /= 2, b >>>= 1;
            return (c + b) / d
        };
        return b
    };
    o = i.pow(g, m);
    k = i.pow(2, k);
    n = k * 2;
    l(i.random(), j)
})([], Math, 256, 6, 52);

//0123456789
//abcdefghijklmnopqrstuvwxyz
var bingoList = [];
bingoList[1] = [
  { name: "Forsaken City Blue Heart", types: ["1a","hearts"] },
  { name: "Forsaken City B-Side", types: ["1b","b-sides"] },
  { name: "Triple 1-Up", types: ["1-up"] },
  { name: "Crossing Dashless", types: ["1a","dashless"] },
  { name: "Get a 1-Up in 2A", types: ["1-up","2a"] },
];
bingoList[2] = [
  { name: "Jumpless Dashless Awake", types: ["2a","dashless","jumpless"] },
  { name: "Complete Forsaken City with Low Friction", types: ["1a","1b","low_friction"] },
  { name: "3 Hearts", types: ["hearts","b-sides"] },
  { name: "2 Chapters Grabless", types: ["grabless"] },
  { name: "Golden Ridge Cassette", types: ["4a","b-sides"] },
];
bingoList[3] = [
  { name: "Two Blue and Two Red Hearts", types: ["hearts","b-sides"] },
  { name: "3 B-Sides", types: ["hearts","b-sides"] },
  { name: "Complete Forsaken City with 70% Speed", types: ["1a","1b"] },
  { name: "Complete Forsaken City with 160% Speed", types: ["1a","1b"] },
  { name: "Complete Old Site with Low Friction", types: ["2a","2b","low_friction"] },
];
bingoList[4] = [
  { name: "Full Clear 1A", types: ["1a","berries","hearts","full_clear"] },
  { name: "Quintuple 1-Up", types: ["1-up","berries"] },
  { name: "Winged Golden", types: ["1a","dashless"] },
  { name: "Complete 2 Chapters Mirrored", types: ["mirrored"] },
  { name: "Blue and Red Heart in Golden Ridge", types: ["4a","4b","b-sides","hearts"] },
];
bingoList[5] = [
  { name: "Grabless Cliff Face", types: ["4a","grabless"] },
  { name: "Complete Pico-8", types: ["3a"] },
  { name: "Get a 1-Up in 4 Chapters", types: ["1-up","big_berries"] },
  { name: "Complete Intervention without Jumping", types: ["2a","jumpless"] },
  { name: "Reach Library (3B Checkpoint)", types: ["3a","3b","b-sides"] },
];
bingoList[6] = [
  { name: "Complete Old Trail with Low Friction", types: ["4a","low_friction"] },
  { name: "100% Pico-8", types: ["3a"] },
  { name: "Complete Presidential Suite with Low Friction", types: ["3a","low_friction"] },
  { name: "Bop Oshiro 10 Times in Two Chapters", types: ["3a","3b"] },
  { name: "All Berries in Start and Depths of 5A (23)", types: ["5a","big_berries","full_clear"] },
];
bingoList[7] = [
  { name: "Invisible Huge Mess", types: ["3a","invisible"] },
  { name: "Complete Elevator Shaft with Low Friction", types: ["3a","low_friction"] },
  { name: "Complete 4 Chapters Mirrored", types: ["mirrored"] },
  { name: "Get 3 Keys in Search", types: ["5a"] },
  { name: "Get 4 Hearts and 4 Cassettes", types: ["hearts","b-sides"] }
];
bingoList[8] = [
  { name: "Invisible Forsaken City", types: ["1a","1b","invisible"] },
  { name: "Grabless Elevator Shaft", types: ["3a","grabless"] },
  { name: "4 Chapters Hiccups", types: [] },
  { name: "Get a 1-Up in 3A", types: ["3a","1-up"] },
  { name: "Bop Seekers 10 Times in 2 Chapters", types: ["5a","5b","seekers"] },
];
bingoList[9] = [
  { name: "Use 2 Binoculars in 4 Chapters", types: ["binos"] },
  { name: "Complete 3A Start with Low Friction", types: ["3a","low_friction"] },
  { name: "Invisible Unravelled", types: ["5a","invisible"] },
  { name: "Invisible Cliff Face", types: ["4a","invisible"] },
  { name: "Complete Start of Mirror Temple with Low Friction", types: ["5a","5b","low_friction"] },
];
bingoList[10] = [
  { name: "Invisible Start of Celestial Resort", types: ["3a","3b","invisible"] },
  { name: "Invisible Old Site", types: ["2a","2b","invisible"] },
  { name: "Grabless Huge Mess with the Heart", types: ["3a","grabless","hearts"] },
  { name: "6 Hearts", types: ["hearts"] },
  { name: "Complete 3 Chapters with Low Friction", types: ["low_friction"] },
];
bingoList[11] = [
  { name: "Full Clear 8A", types: ["8a","full_clear"] },
  { name: "Grabless Rock Bottom", types: ["6a","6b","grabless"] },
  { name: "Grabless Celestial Resort", types: ["3a","grabless"] },
  { name: "Kill 5 Different Seekers", types: ["5a","seekers"] },
  { name: "Complete Mirror Temple with Low Friction", types: ["5a","5b","low_friction"] },
];
bingoList[12] = [
  { name: "Kill 3 Different Seekers in Two Chapters", types: ["5a","5b","seekers","b-sides"] },
  { name: "Blue and Red Heart in Celestial Resort", types: ["3a","3b","hearts","b-sides"] },
  { name: "Get 15 Berries in 4 Chapters", types: ["big_berries"] },
  { name: "Intro Car in Remembered", types: ["farewell"] },
  { name: "1-Up in 7A", types: ["7a","1-up"] },
];
bingoList[13] = [
  { name: "Jumpless Reflection (Checkpoint)", types: ["6a","jumpless"] },
  { name: "All Berries in Search (6)", types: ["5a","berries"] },
  { name: "Jumpless Resolution", types: ["6a","jumpless"] },
  { name: "Grabless Mirror Temple", types: ["5a","grabless"] },
  { name: "Invisible Mirror Temple", types: ["5a","invisible"] },
];
bingoList[14] = [
  { name: "Grabless Repreive", types: ["6b","grabless"] },
  { name: "4 Seeded Berries", types: ["berries"] },
  { name: "5 Berries in 7 Chapters", types: ["big_berries"] },
  { name: "Invisible Presidential Suite", types: ["3a","invisible"] },
  { name: "Bounce on 10 Snowballs in 2 Chapters", types: ["4a","7a"] },
];
bingoList[15] = [
  { name: "3000M Grabless", types: ["7a","grabless"] },
  { name: "Complete 2 Chapters Invisible", types: ["invisible"] },
  { name: "Invisible 1500M", types: ["7a","invisible"] },
  { name: "Invisible 2500M", types: ["7a","invisible"] },
  { name: "Every Different Seeker Kill (12)", types: ["5a","5b","seekers","b-sides"] },

];
bingoList[16] = [
  { name: "Complete 5 Chapters Grabless", types: ["grabless"] },
  { name: "Use 4 Binoculars in 8 Chapters", types: ["binos","farewell","b-sides"] },
  { name: "Full Clear Three Chapters", types: ["full_clear","big_berries"] },
  { name: "Invisible 3000M", types: ["7a","invisible"] },
  { name: "69 Berries", types: ["big_berries"] },
];
bingoList[17] = [
  { name: "Blue Heart in The Summit", types: ["7a","hearts"] },
  { name: "Find the Bird's Nest in Epilogue", types: ["7a"] },
  { name: "20 Berries in 3 Chapters", types: ["big_berries","full_clear"] },
  { name: "Invisible Power Source", types: ["farewell","invisible"] },
  { name: "Complete 5 A-Sides", types: ["big_chapters"] },
];
bingoList[18] = [
  { name: "Complete 5 Chapters with Low Friction", types: ["low_friction","big_chapters"] },
  { name: "Complete 3000M with no Badeline Orbs", types: ["7a"] },
  { name: "20 Berries in 4 Chapters", types: ["big_berries","full_clear"] },
  { name: "Use 2 Binoculars in 8 Chapters", types: ["binos"] },
  { name: "Get 5 Keys in Power Source", types: ["farewell"] },
];
bingoList[19] = [
  { name: "All Winged Berries (11)", types: ["berries","dashless","7a"] },
  { name: "Complete 2B Grabless", types: ["2b","grabless","b-sides","hearts"] },
  { name: "Complete 5 B-Sides", types: ["b-sides","hearts","big_chapters"] },
  { name: "35 Berries in 7A", types: ["7a","big_berries","full_clear"] },
  { name: "Complete Rooftop Jumpless", types: ["3b","jumpless"] },
];
bingoList[20] = [
  { name: "Complete 6 Chapters Grabless", types: ["grabless","big_chapters"] },
  { name: "Reach Event Horizon", types: ["farewell"] },
  { name: "Use All Binoculars in A-Sides (14)", types: ["binos","7a"] },
  { name: "Complete 6 Chapters Invisible", types: ["big_chapters","invisible"] },
  { name: "Use All Binoculars in B-Sides (13)", types: ["b-sides","binos","6b","7b"] },
];
bingoList[21] = [
  { name: "Use 20 Binoculars in Farewell", types: ["binos","farewell","late_farewell"] },
  { name: "10 Hearts", types: ["hearts"] },
  { name: "6 Hearts and 6 Cassettes", types: ["hearts","b-sides"] },
  { name: "Blue and Red Heart in Reflection", types: ["6a","6b","hearts","b-sides"] },
  { name: "The Summit B-Side", types: ["7b","hearts","b-sides"] },
];
bingoList[22] = [
  { name: "Full Clear 7A", types: ["7a","big_berries","full_clear"] },
  { name: "8 Cassettes", types: ["b_sides"] },
  { name: "100 Berries", types: ["very_big_berries"] },
  { name: "Blue and Red Heart in The Summit", types: ["hearts","b-sides","7a","7b"] },
  { name: "Complete Remembered with Low Friction", types: ["farewell","low_friction"] },
];
bingoList[23] = [
  { name: "25 Berries in 4 Chapters", types: ["very_big_berries","full_clear"] },
  { name: "Determination Demo Room", types: ["farewell","late_farewell"] },
  { name: "20 Berries in 5 Chapters", types: ["very_big_berries","full_clear"] },
  { name: "Complete 10 Chapters", types: ["big_chapters"] },
  { name: "4 A-Sides and 4 B-Sides", types: ["big_chapters","hearts","b-sides"] },
];
bingoList[24] = [
  { name: "12 Hearts", types: ["hearts","b-sides"] },
  { name: "Unlock Reconciliation", types: ["farewell","late_farewell"] },
  { name: "Five Full Clears", types: ["big_berries","full_clear"] },
  { name: "Complete 6 B-Sides", types: ["b-sides","hearts","big_chapters"] },
  { name: "Grabless 6B", types: ["6b","b-sides","hearts","grabless"] },
];
bingoList[25] = [
  { name: "Moon Berry", types: ["farewell","late_farewell","full_clear"] },
  { name: "125 Berries", types: ["very_big_berries","full_clear"] },
  { name: "All Blue Hearts", types: ["hearts","big_chapters"] },
  { name: "7 Red Hearts", types: ["hearts","b-sides","big_chapters"] },
  { name: "Farewell", types: ["farewell","late_farewell"] },
];

function genBoard(seed) {
    var SEED = seed.toString();
    var size = 5;

    if (true) {
        Math.seedrandom(SEED);
        var MAX_SEED = 999999;

        var lineCheckList = [];
        if (size == 5) {
            lineCheckList[1] = [1, 2, 3, 4, 5, 10, 15, 20, 6, 12, 18, 24];
            lineCheckList[2] = [0, 2, 3, 4, 6, 11, 16, 21];
            lineCheckList[3] = [0, 1, 3, 4, 7, 12, 17, 22];
            lineCheckList[4] = [0, 1, 2, 4, 8, 13, 18, 23];
            lineCheckList[5] = [0, 1, 2, 3, 8, 12, 16, 20, 9, 14, 19, 24];
            lineCheckList[6] = [0, 10, 15, 20, 6, 7, 8, 9];
            lineCheckList[7] = [0, 12, 18, 24, 5, 7, 8, 9, 1, 11, 16, 21];
            lineCheckList[8] = [5, 6, 8, 9, 2, 12, 17, 22];
            lineCheckList[9] = [4, 12, 16, 20, 9, 7, 6, 5, 3, 13, 18, 23];
            lineCheckList[10] = [4, 14, 19, 24, 8, 7, 6, 5];
            lineCheckList[11] = [0, 5, 15, 20, 11, 12, 13, 14];
            lineCheckList[12] = [1, 6, 16, 21, 10, 12, 13, 14];
            lineCheckList[13] = [0, 6, 12, 18, 24, 20, 16, 8, 4, 2, 7, 17, 22, 10, 11, 13, 14];
            lineCheckList[14] = [3, 8, 18, 23, 10, 11, 12, 14];
            lineCheckList[15] = [4, 9, 19, 24, 10, 11, 12, 13];
            lineCheckList[16] = [0, 5, 10, 20, 16, 17, 18, 19];
            lineCheckList[17] = [15, 17, 18, 19, 1, 6, 11, 21, 20, 12, 8, 4];
            lineCheckList[18] = [15, 16, 18, 19, 2, 7, 12, 22];
            lineCheckList[19] = [15, 16, 17, 19, 23, 13, 8, 3, 24, 12, 6, 0];
            lineCheckList[20] = [4, 9, 14, 24, 15, 16, 17, 18];
            lineCheckList[21] = [0, 5, 10, 15, 16, 12, 8, 4, 21, 22, 23, 24];
            lineCheckList[22] = [20, 22, 23, 24, 1, 6, 11, 16];
            lineCheckList[23] = [2, 7, 12, 17, 20, 21, 23, 24];
            lineCheckList[24] = [20, 21, 22, 24, 3, 8, 13, 18];
            lineCheckList[25] = [0, 6, 12, 18, 20, 21, 22, 23, 19, 14, 9, 4];
        }



        function difficulty(i) {
            var Num3 = SEED % 1000;
            var Rem8 = Num3 % 8;
            var Rem4 = Math.floor(Rem8 / 2);
            var Rem2 = Rem8 % 2;
            var Rem5 = Num3 % 5;
            var Rem3 = Num3 % 3;
            var RemT = Math.floor(Num3 / 120);
            var Table5 = [0];
            Table5.splice(Rem2, 0, 1);
            Table5.splice(Rem3, 0, 2);
            Table5.splice(Rem4, 0, 3);
            Table5.splice(Rem5, 0, 4);
            Num3 = Math.floor(SEED / 1000);
            Num3 = Num3 % 1000;
            Rem8 = Num3 % 8;
            Rem4 = Math.floor(Rem8 / 2);
            Rem2 = Rem8 % 2;
            Rem5 = Num3 % 5;
            Rem3 = Num3 % 3;
            RemT = RemT * 8 + Math.floor(Num3 / 120);
            var Table1 = [0];
            Table1.splice(Rem2, 0, 1);
            Table1.splice(Rem3, 0, 2);
            Table1.splice(Rem4, 0, 3);
            Table1.splice(Rem5, 0, 4);
            i--;
            RemT = RemT % 5;
            var x = (i + RemT) % 5;
            var y = Math.floor(i / 5);
            var e5 = Table5[(x + 3 * y) % 5];
            var e1 = Table1[(3 * x + y) % 5];
            var value = 5 * e5 + e1;
            value++;
            return value;
        }

        function checkLine(i, typesA) {
            var synergy = 0;
            for (var j = 0; j < lineCheckList[i].length; j++) {
                var typesB = bingoBoard[lineCheckList[i][j] + 1].types;
                if (typeof typesA != 'undefined' && typeof typesB != 'undefined') {
                    for (var k = 0; k < typesA.length; k++) {
                        for (var l = 0; l < typesB.length; l++) {
                            if (typesA[k] == typesB[l]) {
                                synergy++;
                                if (k == 0) {
                                    synergy++
                                };
                                if (l == 0) {
                                    synergy++
                                };
                            }
                        }
                    }
                }
            }
            return synergy;
        }
        var bingoBoard = [];
        for (var i = 1; i <= 25; i++) {
            bingoBoard[i] = {
                difficulty: difficulty(i)
            };
        }
        for (var i = 1; i <= 25; i++) {
            var getDifficulty = bingoBoard[i].difficulty;
            var RNG = Math.floor(bingoList[getDifficulty].length * Math.random());
            if (RNG == bingoList[getDifficulty].length) {
                RNG--;
            };
            var j = 0,
                synergy = 0,
                currentObj = null,
                minSynObj = null;
            do {
                currentObj = bingoList[getDifficulty][(j + RNG) % bingoList[getDifficulty].length];
                synergy = checkLine(i, currentObj.types);
                if (minSynObj == null || synergy < minSynObj.synergy) {
                    minSynObj = {
                        synergy: synergy,
                        value: currentObj,
                        id : (j + RNG) % bingoList[getDifficulty].length
                    };
                }
                j++;
            } while ((synergy != 0) && (j < bingoList[getDifficulty].length));
            bingoBoard[i].types = minSynObj.value.types;
            bingoBoard[i].name = minSynObj.value.name;
            bingoBoard[i].tier = getDifficulty;
            bingoBoard[i].id = minSynObj.id;
            bingoBoard[i].synergy = minSynObj.synergy;
        }
        return bingoBoard;
    }
}

var alphabet = "abcdefghijklmnopqrstuvwxyz"

function getCode(board) {
    var resultString = []
    for (var i = 1; i < 26; i++){ 
        resultString[board[i].tier] = alphabet[board[i].id];
    }
    return resultString.join("");
}

var allBoard = []
for (var i = 0; i < 1000000; i++) {
    allBoard.push(getCode(genBoard(i)))
    if (i % 10000 == 0) {
        console.log(i);
    }
}

fs.writeFileSync("BoardsFiles//LongoBoards.json", JSON.stringify(allBoard))