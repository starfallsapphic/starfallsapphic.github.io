const songs = [
	{
		"title": "There",
		"OPN": 3,
		"MID": 8,
		"FIN": 10.6,
		"ENC": ""
	},
	{
		"title": "Wavetapper",
		"OPN": 3,
		"MID": 8,
		"FIN": 11.7,
		"ENC": ""
	},
	{
		"title": "+ERABY+E CONNEC+10N",
		"OPN": 8,
		"MID": 11.7,
		"FIN": 14.7,
		"ENC": 15.2
	},
	{
		"title": "FULi AUTO SHOOTER",
		"OPN": 1,
		"MID": 8,
		"FIN": 11,
		"ENC": ""
	},
	{
		"title": "Crosshatch",
		"OPN": 5,
		"MID": 10.6,
		"FIN": 12.2,
		"ENC": ""
	},
	{
		"title": "ENERGY SYNERGY MATRIX",
		"OPN": 5,
		"MID": 10,
		"FIN": 11.3,
		"ENC": 14
	},
	{
		"title": "G e n g a o z o",
		"OPN": 6,
		"MID": 10,
		"FIN": 13.2,
		"ENC": ""
	},
	{
		"title": "Spell Diver",
		"OPN": 5,
		"MID": 8,
		"FIN": 12.4,
		"ENC": ""
	},
	{
		"title": "∀",
		"OPN": 4,
		"MID": 8,
		"FIN": 12.8,
		"ENC": 15.4
	},
	{
		"title": "Credits",
		"OPN": 2,
		"MID": 9,
		"FIN": 13.3,
		"ENC": 13.4
	},
	{
		"title": "Pictured as Perfect",
		"OPN": 4,
		"MID": 9,
		"FIN": 13.4,
		"ENC": ""
	},
	{
		"title": "The 89's Momentum",
		"OPN": 6,
		"MID": 7,
		"FIN": 10.6,
		"ENC": ""
	},
	{
		"title": "FULi AUTO BUSTER",
		"OPN": 6,
		"MID": 9,
		"FIN": 11.1,
		"ENC": ""
	},
	{
		"title": "HTTPS",
		"OPN": 3,
		"MID": 11.3,
		"FIN": 13.3,
		"ENC": ""
	},
	{
		"title": "Chronomia",
		"OPN": 2,
		"MID": 6,
		"FIN": 10.6,
		"ENC": 13
	},
	{
		"title": "What You Love",
		"OPN": 6,
		"MID": 7,
		"FIN": 12,
		"ENC": ""
	},
	{
		"title": "GOODRAGE",
		"OPN": 4,
		"MID": 11.5,
		"FIN": 13.5,
		"ENC": ""
	},
	{
		"title": "Proper Rhythm",
		"OPN": 1,
		"MID": 6,
		"FIN": 11.4,
		"ENC": 12
	},
	{
		"title": "Acolyte",
		"OPN": 1,
		"MID": 8,
		"FIN": 11.7,
		"ENC": ""
	},
	{
		"title": "Doppelganger",
		"OPN": 8,
		"MID": 12.4,
		"FIN": 14.3,
		"ENC": ""
	},
	{
		"title": "Lost City",
		"OPN": 1,
		"MID": 6,
		"FIN": 10.6,
		"ENC": ""
	},
	{
		"title": "F1055",
		"OPN": 3,
		"MID": 9.6,
		"FIN": 13.5,
		"ENC": 13.9
	},
	{
		"title": "INFiNiTE ENERZY -Overdoze-",
		"OPN": 2,
		"MID": 6,
		"FIN": 13,
		"ENC": ""
	},
	{
		"title": "Nhelv",
		"OPN": 5,
		"MID": 11.2,
		"FIN": 13.8,
		"ENC": ""
	},
	{
		"title": "Options",
		"OPN": 2,
		"MID": 7,
		"FIN": 10,
		"ENC": ""
	},
	{
		"title": "Luminaria",
		"OPN": 1,
		"MID": 6,
		"FIN": 12,
		"ENC": 13
	},
	{
		"title": "BADSECRET",
		"OPN": 7,
		"MID": 11.5,
		"FIN": 13,
		"ENC": 13.2
	},
	{
		"title": "grode",
		"OPN": 1,
		"MID": 6,
		"FIN": 8,
		"ENC": 11
	},
	{
		"title": "PYROMANIA",
		"OPN": 8,
		"MID": 11.4,
		"FIN": 14,
		"ENC": 15.2
	},
	{
		"title": "QUASAR",
		"OPN": 6,
		"MID": 11.7,
		"FIN": 14.6,
		"ENC": ""
	},
	{
		"title": "Signals Afar",
		"OPN": 2,
		"MID": 8,
		"FIN": 12.7,
		"ENC": ""
	},
	{
		"title": "Perfect ConfeCute!!",
		"OPN": 6,
		"MID": 10,
		"FIN": 11,
		"ENC": ""
	},
	{
		"title": "septima",
		"OPN": 4,
		"MID": 9,
		"FIN": 12.4,
		"ENC": ""
	},
	{
		"title": "Fixations Toward the Stars",
		"OPN": 4,
		"MID": 10.6,
		"FIN": 14.1,
		"ENC": ""
	},
	{
		"title": "Tavgha",
		"OPN": 3,
		"MID": 7,
		"FIN": 10.6,
		"ENC": ""
	},
	{
		"title": "LET THE CREATION BEGIN",
		"OPN": 3,
		"MID": 11.5,
		"FIN": 15.3,
		"ENC": ""
	},
	{
		"title": "energy trixxx",
		"OPN": 7,
		"MID": 10.6,
		"FIN": 12,
		"ENC": 13
	},
	{
		"title": "Random",
		"OPN": 5,
		"MID": 8,
		"FIN": 12.3,
		"ENC": ""
	},
	{
		"title": -1,
		"OPN": 6,
		"MID": 11.5,
		"FIN": 13.9,
		"ENC": ""
	},
	{
		"title": "Farewell to Syzygia",
		"OPN": 7,
		"MID": 12,
		"FIN": 14.7,
		"ENC": ""
	},
	{
		"title": "Courage",
		"OPN": 3,
		"MID": 9,
		"FIN": 11.5,
		"ENC": ""
	},
	{
		"title": "obair-ghreis",
		"OPN": 5,
		"MID": 8,
		"FIN": 12.8,
		"ENC": 13.5
	},
	{
		"title": "Macropolis",
		"OPN": 3,
		"MID": 6,
		"FIN": 10.6,
		"ENC": ""
	},
	{
		"title": "3, 2, 1, Let's Go",
		"OPN": 5,
		"MID": 10.5,
		"FIN": 14.4,
		"ENC": ""
	},
	{
		"title": "Happy Go Lucky!!!",
		"OPN": 5,
		"MID": 9.6,
		"FIN": 14.3,
		"ENC": 14.8
	},
	{
		"title": "Asymmetry (takehirotei remix)",
		"OPN": 3,
		"MID": 10,
		"FIN": 12.9,
		"ENC": ""
	},
	{
		"title": "Yamai",
		"OPN": 7,
		"MID": 11,
		"FIN": 12.5,
		"ENC": ""
	},
	{
		"title": "Chronoexplorers",
		"OPN": 7,
		"MID": 10.6,
		"FIN": 13.5,
		"ENC": 14.7
	},
	{
		"title": "Revelation",
		"OPN": 6,
		"MID": 12.3,
		"FIN": 14.0,
		"ENC": ""
	},
	{
		"title": "POISON GARDEN",
		"OPN": 4,
		"MID": 10,
		"FIN": 12.2,
		"ENC": ""
	},
	{
		"title": "APO11O",
		"OPN": 4,
		"MID": 9,
		"FIN": 12.6,
		"ENC": ""
	},
	{
		"title": "The Next Arcady",
		"OPN": 6,
		"MID": 10.9,
		"FIN": 12.3,
		"ENC": ""
	},
	{
		"title": "Prime",
		"OPN": 5,
		"MID": 10,
		"FIN": 13.4,
		"ENC": ""
	},
	{
		"title": "Unraveling Stasis",
		"OPN": 8,
		"MID": 12.5,
		"FIN": 14.9,
		"ENC": 15.9
	},
	{
		"title": "valor/starcross",
		"OPN": 8,
		"MID": 12.1,
		"FIN": 14.5,
		"ENC": 15.5
	},
	{
		"title": "Cosmogyral",
		"OPN": 5,
		"MID": 7,
		"FIN": 12,
		"ENC": ""
	},
	{
		"title": "It Go (Cheryl Stelli remix)",
		"OPN": 5,
		"MID": 10.5,
		"FIN": 12.3,
		"ENC": ""
	},
	{
		"title": "All The Times",
		"OPN": 2,
		"MID": 6,
		"FIN": 10,
		"ENC": 11.6
	},
	{
		"title": "grode (Wyvren's Remix)",
		"OPN": 5,
		"MID": 8,
		"FIN": 13.7,
		"ENC": ""
	},
	{
		"title": "safe_state (MANIAQ Sound Team Remix)",
		"OPN": 4,
		"MID": 9,
		"FIN": 13.1,
		"ENC": ""
	},
	{
		"title": "The Last Page",
		"OPN": 3,
		"MID": 8,
		"FIN": 12.3,
		"ENC": ""
	},
	{
		"title": "Candy@-Cracker",
		"OPN": 5,
		"MID": 11.4,
		"FIN": 13.5,
		"ENC": ""
	},
	{
		"title": "Orphen",
		"OPN": 6,
		"MID": 11.9,
		"FIN": 14.7,
		"ENC": ""
	},
	{
		"title": "3.1V.C1",
		"OPN": 7,
		"MID": 12.5,
		"FIN": 15,
		"ENC": ""
	},
	{
		"title": "ASTELLION",
		"OPN": 1,
		"MID": 7,
		"FIN": 12,
		"ENC": 15.6
	},
	{
		"title": "BPM",
		"OPN": 4,
		"MID": 9.6,
		"FIN": 13,
		"ENC": ""
	},
	{
		"title": "WATAGASHI RUSH",
		"OPN": 4,
		"MID": 8,
		"FIN": 12,
		"ENC": 13.8
	},
	{
		"title": "Dear My Endsummer",
		"OPN": 7,
		"MID": 11.5,
		"FIN": 13.3,
		"ENC": ""
	},
	{
		"title": "STARGAZERS",
		"OPN": 7,
		"MID": 12.6,
		"FIN": 15.8,
		"ENC": ""
	},
	{
		"title": "Angel's Window",
		"OPN": 2,
		"MID": 6,
		"FIN": 12.6,
		"ENC": ""
	},
	{
		"title": "Cyclical Rebellion",
		"OPN": 7,
		"MID": 10.6,
		"FIN": 14.1,
		"ENC": ""
	},
	{
		"title": "Ione",
		"OPN": 4,
		"MID": 8,
		"FIN": 11.9,
		"ENC": ""
	},
	{
		"title": "Singularity",
		"OPN": 4,
		"MID": 10.5,
		"FIN": 13.3,
		"ENC": ""
	},
	{
		"title": "execution_program",
		"OPN": 6,
		"MID": 11.3,
		"FIN": 15.6,
		"ENC": ""
	},
	{
		"title": "Seraphiel",
		"OPN": 5,
		"MID": 10,
		"FIN": 14.2,
		"ENC": ""
	},
	{
		"title": "Ops:Limone",
		"OPN": 3,
		"MID": 8,
		"FIN": 13.1,
		"ENC": ""
	},
	{
		"title": "Tormented World",
		"OPN": 2,
		"MID": 10.6,
		"FIN": 13.6,
		"ENC": ""
	},
	{
		"title": "Octava",
		"OPN": 3,
		"MID": 9,
		"FIN": 12.6,
		"ENC": ""
	},
	{
		"title": "∀NARCHIC LIGHT",
		"OPN": 5,
		"MID": 11,
		"FIN": 13.5,
		"ENC": 14.4
	},
	{
		"title": "Simulated Reality",
		"OPN": 6,
		"MID": 12.2,
		"FIN": 13.8,
		"ENC": ""
	},
	{
		"title": "MARENOL",
		"OPN": 0,
		"MID": 0,
		"FIN": 0,
		"ENC": ""
	},
	{
		"title": "SUPERNOVA",
		"OPN": 8,
		"MID": 12.6,
		"FIN": 14.9,
		"ENC": 15.7
	},
	{
		"title": "UTF-8000000000",
		"OPN": 4,
		"MID": 11.2,
		"FIN": 13.1,
		"ENC": ""
	},
	{
		"title": "Aleph-0",
		"OPN": 5,
		"MID": 9.6,
		"FIN": 13.4,
		"ENC": ""
	},
	{
		"title": "CITY RIDE IN THE JUNGLE",
		"OPN": 7,
		"MID": 10.6,
		"FIN": 12.7,
		"ENC": ""
	},
	{
		"title": "Faux Real (VIVID REDUX)",
		"OPN": 3,
		"MID": 8,
		"FIN": 11.8,
		"ENC": ""
	},
	{
		"title": "grode(decoherence)",
		"OPN": 5,
		"MID": 11.1,
		"FIN": 14.0,
		"ENC": 14.8
	},
	{
		"title": "Battle in Enemy Territory",
		"OPN": 5,
		"MID": 10.5,
		"FIN": 13,
		"ENC": ""
	},
	{
		"title": "Star Dream -Millenium Vision-",
		"OPN": 1,
		"MID": 6,
		"FIN": 9.6,
		"ENC": ""
	},
	{
		"title": "Last Wish (vivid/stasis ver.)",
		"OPN": 8,
		"MID": 12.9,
		"FIN": 14.6,
		"ENC": 15.6
	},
	{
		"title": "CLAUDIA -estella-",
		"OPN": 6,
		"MID": 11.7,
		"FIN": 14.5,
		"ENC": ""
	},
	{
		"title": "Shattered Sky After Rain",
		"OPN": 4,
		"MID": 8,
		"FIN": 12,
		"ENC": ""
	},
	{
		"title": "exterminate()",
		"OPN": 6,
		"MID": 10,
		"FIN": 14.6,
		"ENC": ""
	},
	{
		"title": "The Night of Fright",
		"OPN": 6,
		"MID": 10.6,
		"FIN": 14.1,
		"ENC": ""
	},
	{
		"title": "nullbreak",
		"OPN": 4,
		"MID": 9,
		"FIN": 13.8,
		"ENC": ""
	},
	{
		"title": "Sternstunde",
		"OPN": 5,
		"MID": 9.6,
		"FIN": 13.8,
		"ENC": ""
	},
	{
		"title": "CLAUDIA -libertia-",
		"OPN": 8,
		"MID": 12.7,
		"FIN": 15,
		"ENC": 15.9
	},
	{
		"title": "stop-motion",
		"OPN": 7,
		"MID": 12,
		"FIN": 14.9,
		"ENC": 15.7
	},
	{
		"title": "Trip Coffee",
		"OPN": 4,
		"MID": 9.6,
		"FIN": 13.7,
		"ENC": ""
	},
	{
		"title": "Rafflesia",
		"OPN": 8,
		"MID": 12.7,
		"FIN": 15.4,
		"ENC": ""
	},
	{
		"title": "NULCTRL",
		"OPN": 3,
		"MID": 9,
		"FIN": 10.6,
		"ENC": 11.6
	},
	{
		"title": "ULTIMATE",
		"OPN": 6,
		"MID": 10,
		"FIN": 12.1,
		"ENC": 13.9
	},
	
]

const spoilerSongNames = [
	"Shattered Sky After Rain",
	"exterminate()",
	"The Night of Fright",
	"nullbreak",
	"Sternstunde",
	"CLAUDIA -libertia-",
	"stop-motion",
]