const pokemonData = {
  1: {
    "identifier": "bulbasaur",
    "height": 7,
    "weight": 69,
    "base_experience": 64,
    "name": {
      "fr": "Bulbizarre",
      "en": "Bulbasaur",
      "jp": "フシギダネ"
    },
    "type": [
      "grass",
      "poison"
    ],
    "type_fr": [
      "Plante",
      "Poison"
    ],
    "type_color": [
      "#7AC74C",
      "#A33EA1"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      2,
      3
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 45
    }
  },
  2: {
    "identifier": "ivysaur",
    "height": 10,
    "weight": 130,
    "base_experience": 142,
    "name": {
      "fr": "Herbizarre",
      "en": "Ivysaur",
      "jp": "フシギソウ"
    },
    "type": [
      "grass",
      "poison"
    ],
    "type_fr": [
      "Plante",
      "Poison"
    ],
    "type_color": [
      "#7AC74C",
      "#A33EA1"
    ],
    "evolutions_pre": [
      1
    ],
    "evolutions_next": [
      3
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 60
    }
  },
  3: {
    "identifier": "venusaur",
    "height": 20,
    "weight": 1000,
    "base_experience": 236,
    "name": {
      "fr": "Florizarre",
      "en": "Venusaur",
      "jp": "フシギバナ"
    },
    "type": [
      "grass",
      "poison"
    ],
    "type_fr": [
      "Plante",
      "Poison"
    ],
    "type_color": [
      "#7AC74C",
      "#A33EA1"
    ],
    "evolutions_pre": [
      1,
      2
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 80
    }
  },
  4: {
    "identifier": "charmander",
    "height": 6,
    "weight": 85,
    "base_experience": 62,
    "name": {
      "fr": "Salamèche",
      "en": "Charmander",
      "jp": "ヒトカゲ "
    },
    "type": [
      "fire"
    ],
    "type_fr": [
      "Feu"
    ],
    "type_color": [
      "#EE8130"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      5,
      6
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "special_attack": 60,
      "special_defense": 50,
      "speed": 65
    }
  },
  5: {
    "identifier": "charmeleon",
    "height": 11,
    "weight": 190,
    "base_experience": 142,
    "name": {
      "fr": "Reptincel",
      "en": "Charmeleon",
      "jp": "リザード"
    },
    "type": [
      "fire"
    ],
    "type_fr": [
      "Feu"
    ],
    "type_color": [
      "#EE8130"
    ],
    "evolutions_pre": [
      4
    ],
    "evolutions_next": [
      6
    ],
    "stats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "special_attack": 80,
      "special_defense": 65,
      "speed": 80
    }
  },
  6: {
    "identifier": "charizard",
    "height": 17,
    "weight": 905,
    "base_experience": 240,
    "name": {
      "fr": "Dracaufeu",
      "en": "Charizard",
      "jp": "リザードン"
    },
    "type": [
      "fire",
      "flying"
    ],
    "type_fr": [
      "Feu",
      "Vol"
    ],
    "type_color": [
      "#EE8130",
      "#A98FF3"
    ],
    "evolutions_pre": [
      4,
      5
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "special_attack": 109,
      "special_defense": 85,
      "speed": 100
    }
  },
  7: {
    "identifier": "squirtle",
    "height": 5,
    "weight": 90,
    "base_experience": 63,
    "name": {
      "fr": "Carapuce",
      "en": "Squirtle",
      "jp": "ゼニガメ"
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      8,
      9
    ],
    "stats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "special_attack": 50,
      "special_defense": 64,
      "speed": 43
    }
  },
  8: {
    "identifier": "wartortle",
    "height": 10,
    "weight": 225,
    "base_experience": 142,
    "name": {
      "fr": "Carabaffe",
      "en": "Wartortle",
      "jp": "カメール"
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [
      7
    ],
    "evolutions_next": [
      9
    ],
    "stats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "special_attack": 65,
      "special_defense": 80,
      "speed": 58
    }
  },
  9: {
    "identifier": "blastoise",
    "height": 16,
    "weight": 855,
    "base_experience": 239,
    "name": {
      "fr": "Tortank",
      "en": "Blastoise",
      "jp": "カメックス"
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [
      7,
      8
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "special_attack": 85,
      "special_defense": 105,
      "speed": 78
    }
  },
  10: {
    "identifier": "caterpie",
    "height": 3,
    "weight": 29,
    "base_experience": 39,
    "name": {
      "fr": "Chenipan",
      "en": "Caterpie",
      "jp": "キャタピー"
    },
    "type": [
      "bug"
    ],
    "type_fr": [
      "Insecte"
    ],
    "type_color": [
      "#A6B91A"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      11,
      12
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "special_attack": 20,
      "special_defense": 20,
      "speed": 45
    }
  },
  11: {
    "identifier": "metapod",
    "height": 7,
    "weight": 99,
    "base_experience": 72,
    "name": {
      "fr": "Chrysacier",
      "en": "Metapod",
      "jp": "トランセル"
    },
    "type": [
      "bug"
    ],
    "type_fr": [
      "Insecte"
    ],
    "type_color": [
      "#A6B91A"
    ],
    "evolutions_pre": [
      10
    ],
    "evolutions_next": [
      12
    ],
    "stats": {
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 30
    }
  },
  12: {
    "identifier": "butterfree",
    "height": 11,
    "weight": 320,
    "base_experience": 178,
    "name": {
      "fr": "Papilusion",
      "en": "Butterfree",
      "jp": "バタフリー"
    },
    "type": [
      "bug",
      "flying"
    ],
    "type_fr": [
      "Insecte",
      "Vol"
    ],
    "type_color": [
      "#A6B91A",
      "#A98FF3"
    ],
    "evolutions_pre": [
      10,
      11
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "special_attack": 90,
      "special_defense": 80,
      "speed": 70
    }
  },
  13: {
    "identifier": "weedle",
    "height": 3,
    "weight": 32,
    "base_experience": 39,
    "name": {
      "fr": "Aspicot",
      "en": "Weedle",
      "jp": "ビードル"
    },
    "type": [
      "bug",
      "poison"
    ],
    "type_fr": [
      "Insecte",
      "Poison"
    ],
    "type_color": [
      "#A6B91A",
      "#A33EA1"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      14,
      15
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "special_attack": 20,
      "special_defense": 20,
      "speed": 50
    }
  },
  14: {
    "identifier": "kakuna",
    "height": 6,
    "weight": 100,
    "base_experience": 72,
    "name": {
      "fr": "Coconfort",
      "en": "Kakuna",
      "jp": "コクーン"
    },
    "type": [
      "bug",
      "poison"
    ],
    "type_fr": [
      "Insecte",
      "Poison"
    ],
    "type_color": [
      "#A6B91A",
      "#A33EA1"
    ],
    "evolutions_pre": [
      13
    ],
    "evolutions_next": [
      15
    ],
    "stats": {
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 35
    }
  },
  15: {
    "identifier": "beedrill",
    "height": 10,
    "weight": 295,
    "base_experience": 178,
    "name": {
      "fr": "Dardargnan",
      "en": "Beedrill",
      "jp": "スピアー"
    },
    "type": [
      "bug",
      "poison"
    ],
    "type_fr": [
      "Insecte",
      "Poison"
    ],
    "type_color": [
      "#A6B91A",
      "#A33EA1"
    ],
    "evolutions_pre": [
      13,
      14
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "special_attack": 45,
      "special_defense": 80,
      "speed": 75
    }
  },
  16: {
    "identifier": "pidgey",
    "height": 3,
    "weight": 18,
    "base_experience": 50,
    "name": {
      "fr": "Roucool",
      "en": "Pidgey",
      "jp": "ポッポ "
    },
    "type": [
      "normal",
      "flying"
    ],
    "type_fr": [
      "Normal",
      "Vol"
    ],
    "type_color": [
      "#A8A77A",
      "#A98FF3"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      17,
      18
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 56
    }
  },
  17: {
    "identifier": "pidgeotto",
    "height": 11,
    "weight": 300,
    "base_experience": 122,
    "name": {
      "fr": "Roucoups",
      "en": "Pidgeotto",
      "jp": "ピジョン"
    },
    "type": [
      "normal",
      "flying"
    ],
    "type_fr": [
      "Normal",
      "Vol"
    ],
    "type_color": [
      "#A8A77A",
      "#A98FF3"
    ],
    "evolutions_pre": [
      16
    ],
    "evolutions_next": [
      18
    ],
    "stats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 71
    }
  },
  18: {
    "identifier": "pidgeot",
    "height": 15,
    "weight": 395,
    "base_experience": 216,
    "name": {
      "fr": "Roucarnage",
      "en": "Pidgeot",
      "jp": "ピジョット"
    },
    "type": [
      "normal",
      "flying"
    ],
    "type_fr": [
      "Normal",
      "Vol"
    ],
    "type_color": [
      "#A8A77A",
      "#A98FF3"
    ],
    "evolutions_pre": [
      16,
      17
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "special_attack": 70,
      "special_defense": 70,
      "speed": 101
    }
  },
  19: {
    "identifier": "rattata",
    "height": 3,
    "weight": 35,
    "base_experience": 51,
    "name": {
      "fr": "Rattata",
      "en": "Rattata",
      "jp": "コラッタ "
    },
    "type": [
      "normal"
    ],
    "type_fr": [
      "Normal"
    ],
    "type_color": [
      "#A8A77A"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      20
    ],
    "stats": {
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "special_attack": 25,
      "special_defense": 35,
      "speed": 72
    }
  },
  20: {
    "identifier": "raticate",
    "height": 7,
    "weight": 185,
    "base_experience": 145,
    "name": {
      "fr": "Rattatac",
      "en": "Raticate",
      "jp": "ラッタ "
    },
    "type": [
      "normal"
    ],
    "type_fr": [
      "Normal"
    ],
    "type_color": [
      "#A8A77A"
    ],
    "evolutions_pre": [
      19
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "special_attack": 50,
      "special_defense": 70,
      "speed": 97
    }
  },
  21: {
    "identifier": "spearow",
    "height": 3,
    "weight": 20,
    "base_experience": 52,
    "name": {
      "fr": "Piafabec",
      "en": "Spearow",
      "jp": "オニスズメ "
    },
    "type": [
      "normal",
      "flying"
    ],
    "type_fr": [
      "Normal",
      "Vol"
    ],
    "type_color": [
      "#A8A77A",
      "#A98FF3"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      22
    ],
    "stats": {
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "special_attack": 31,
      "special_defense": 31,
      "speed": 70
    }
  },
  22: {
    "identifier": "fearow",
    "height": 12,
    "weight": 380,
    "base_experience": 155,
    "name": {
      "fr": "Rapasdepic",
      "en": "Fearow",
      "jp": "オニドリル"
    },
    "type": [
      "normal",
      "flying"
    ],
    "type_fr": [
      "Normal",
      "Vol"
    ],
    "type_color": [
      "#A8A77A",
      "#A98FF3"
    ],
    "evolutions_pre": [
      21
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "special_attack": 61,
      "special_defense": 61,
      "speed": 100
    }
  },
  23: {
    "identifier": "ekans",
    "height": 20,
    "weight": 69,
    "base_experience": 58,
    "name": {
      "fr": "Abo",
      "en": "Ekans",
      "jp": "アーボ"
    },
    "type": [
      "poison"
    ],
    "type_fr": [
      "Poison"
    ],
    "type_color": [
      "#A33EA1"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      24
    ],
    "stats": {
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "special_attack": 40,
      "special_defense": 54,
      "speed": 55
    }
  },
  24: {
    "identifier": "arbok",
    "height": 35,
    "weight": 650,
    "base_experience": 153,
    "name": {
      "fr": "Arbok",
      "en": "Arbok",
      "jp": "アーボック"
    },
    "type": [
      "poison"
    ],
    "type_fr": [
      "Poison"
    ],
    "type_color": [
      "#A33EA1"
    ],
    "evolutions_pre": [
      23
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "special_attack": 65,
      "special_defense": 79,
      "speed": 80
    }
  },
  25: {
    "identifier": "pikachu",
    "height": 4,
    "weight": 60,
    "base_experience": 112,
    "name": {
      "fr": "Pikachu",
      "en": "Pikachu",
      "jp": "ピカチュウ"
    },
    "type": [
      "electric"
    ],
    "type_fr": [
      "Électrique"
    ],
    "type_color": [
      "#F7D02C"
    ],
    "evolutions_pre": [
      172
    ],
    "evolutions_next": [
      26
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 90
    }
  },
  26: {
    "identifier": "raichu",
    "height": 8,
    "weight": 300,
    "base_experience": 218,
    "name": {
      "fr": "Raichu",
      "en": "Raichu",
      "jp": "ライチュウ"
    },
    "type": [
      "electric"
    ],
    "type_fr": [
      "Électrique"
    ],
    "type_color": [
      "#F7D02C"
    ],
    "evolutions_pre": [
      172,
      25
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "special_attack": 90,
      "special_defense": 80,
      "speed": 110
    }
  },
  27: {
    "identifier": "sandshrew",
    "height": 6,
    "weight": 120,
    "base_experience": 60,
    "name": {
      "fr": "Sabelette",
      "en": "Sandshrew",
      "jp": "サンド"
    },
    "type": [
      "ground"
    ],
    "type_fr": [
      "Sol"
    ],
    "type_color": [
      "#E2BF65"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      28
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 85,
      "special_attack": 20,
      "special_defense": 30,
      "speed": 40
    }
  },
  28: {
    "identifier": "sandslash",
    "height": 10,
    "weight": 295,
    "base_experience": 158,
    "name": {
      "fr": "Sablaireau",
      "en": "Sandslash",
      "jp": "サンドパン"
    },
    "type": [
      "ground"
    ],
    "type_fr": [
      "Sol"
    ],
    "type_color": [
      "#E2BF65"
    ],
    "evolutions_pre": [
      27
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 110,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 65
    }
  },
  29: {
    "identifier": "nidoran-f",
    "height": 4,
    "weight": 70,
    "base_experience": 55,
    "name": {
      "fr": "Nidoran♀",
      "en": "Nidoran♀",
      "jp": "ニドラン♀"
    },
    "type": [
      "poison"
    ],
    "type_fr": [
      "Poison"
    ],
    "type_color": [
      "#A33EA1"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      30,
      31
    ],
    "stats": {
      "hp": 55,
      "attack": 47,
      "defense": 52,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 41
    }
  },
  30: {
    "identifier": "nidorina",
    "height": 8,
    "weight": 200,
    "base_experience": 128,
    "name": {
      "fr": "Nidorina",
      "en": "Nidorina",
      "jp": "ニドリーナ"
    },
    "type": [
      "poison"
    ],
    "type_fr": [
      "Poison"
    ],
    "type_color": [
      "#A33EA1"
    ],
    "evolutions_pre": [
      29
    ],
    "evolutions_next": [
      31
    ],
    "stats": {
      "hp": 70,
      "attack": 62,
      "defense": 67,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 56
    }
  },
  31: {
    "identifier": "nidoqueen",
    "height": 13,
    "weight": 600,
    "base_experience": 227,
    "name": {
      "fr": "Nidoqueen",
      "en": "Nidoqueen",
      "jp": "ニドリーナ"
    },
    "type": [
      "poison",
      "ground"
    ],
    "type_fr": [
      "Poison",
      "Sol"
    ],
    "type_color": [
      "#A33EA1",
      "#E2BF65"
    ],
    "evolutions_pre": [
      29,
      30
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 87,
      "special_attack": 75,
      "special_defense": 85,
      "speed": 76
    }
  },
  32: {
    "identifier": "nidoran-m",
    "height": 5,
    "weight": 90,
    "base_experience": 55,
    "name": {
      "fr": "Nidoran♂",
      "en": "Nidoran♂",
      "jp": "ニドラン♂"
    },
    "type": [
      "poison"
    ],
    "type_fr": [
      "Poison"
    ],
    "type_color": [
      "#A33EA1"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      33,
      34
    ],
    "stats": {
      "hp": 46,
      "attack": 57,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 50
    }
  },
  33: {
    "identifier": "nidorino",
    "height": 9,
    "weight": 195,
    "base_experience": 128,
    "name": {
      "fr": "Nidorino",
      "en": "Nidorino",
      "jp": "ニドリーノ"
    },
    "type": [
      "poison"
    ],
    "type_fr": [
      "Poison"
    ],
    "type_color": [
      "#A33EA1"
    ],
    "evolutions_pre": [
      32
    ],
    "evolutions_next": [
      34
    ],
    "stats": {
      "hp": 61,
      "attack": 72,
      "defense": 57,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 65
    }
  },
  34: {
    "identifier": "nidoking",
    "height": 14,
    "weight": 620,
    "base_experience": 227,
    "name": {
      "fr": "Nidoking",
      "en": "Nidoking",
      "jp": "ニドキング"
    },
    "type": [
      "poison",
      "ground"
    ],
    "type_fr": [
      "Poison",
      "Sol"
    ],
    "type_color": [
      "#A33EA1",
      "#E2BF65"
    ],
    "evolutions_pre": [
      32,
      33
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 81,
      "attack": 102,
      "defense": 77,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 85
    }
  },
  35: {
    "identifier": "clefairy",
    "height": 6,
    "weight": 75,
    "base_experience": 113,
    "name": {
      "fr": "Mélofée",
      "en": "Clefairy",
      "jp": "ピッピ "
    },
    "type": [
      "fairy"
    ],
    "type_fr": [
      "Fée"
    ],
    "type_color": [
      "#D685AD"
    ],
    "evolutions_pre": [
      173
    ],
    "evolutions_next": [
      36
    ],
    "stats": {
      "hp": 70,
      "attack": 45,
      "defense": 48,
      "special_attack": 60,
      "special_defense": 65,
      "speed": 35
    }
  },
  36: {
    "identifier": "clefable",
    "height": 13,
    "weight": 400,
    "base_experience": 217,
    "name": {
      "fr": "Mélodelfe",
      "en": "Clefable",
      "jp": "ピクシー"
    },
    "type": [
      "fairy"
    ],
    "type_fr": [
      "Fée"
    ],
    "type_color": [
      "#D685AD"
    ],
    "evolutions_pre": [
      173,
      35
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "special_attack": 95,
      "special_defense": 90,
      "speed": 60
    }
  },
  37: {
    "identifier": "vulpix",
    "height": 6,
    "weight": 99,
    "base_experience": 60,
    "name": {
      "fr": "Goupix",
      "en": "Vulpix",
      "jp": "ロコン "
    },
    "type": [
      "fire"
    ],
    "type_fr": [
      "Feu"
    ],
    "type_color": [
      "#EE8130"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      38
    ],
    "stats": {
      "hp": 38,
      "attack": 41,
      "defense": 40,
      "special_attack": 50,
      "special_defense": 65,
      "speed": 65
    }
  },
  38: {
    "identifier": "ninetales",
    "height": 11,
    "weight": 199,
    "base_experience": 177,
    "name": {
      "fr": "Feunard",
      "en": "Ninetales",
      "jp": "キュウコン"
    },
    "type": [
      "fire"
    ],
    "type_fr": [
      "Feu"
    ],
    "type_color": [
      "#EE8130"
    ],
    "evolutions_pre": [
      37
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "special_attack": 81,
      "special_defense": 100,
      "speed": 100
    }
  },
  39: {
    "identifier": "jigglypuff",
    "height": 5,
    "weight": 55,
    "base_experience": 95,
    "name": {
      "fr": "Rondoudou",
      "en": "Jigglypuff",
      "jp": "プリン "
    },
    "type": [
      "normal",
      "fairy"
    ],
    "type_fr": [
      "Normal",
      "Fée"
    ],
    "type_color": [
      "#A8A77A",
      "#D685AD"
    ],
    "evolutions_pre": [
      174
    ],
    "evolutions_next": [
      40
    ],
    "stats": {
      "hp": 115,
      "attack": 45,
      "defense": 20,
      "special_attack": 45,
      "special_defense": 25,
      "speed": 20
    }
  },
  40: {
    "identifier": "wigglytuff",
    "height": 10,
    "weight": 120,
    "base_experience": 196,
    "name": {
      "fr": "Grodoudou",
      "en": "Wigglytuff",
      "jp": "プクリン "
    },
    "type": [
      "normal",
      "fairy"
    ],
    "type_fr": [
      "Normal",
      "Fée"
    ],
    "type_color": [
      "#A8A77A",
      "#D685AD"
    ],
    "evolutions_pre": [
      174,
      39
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 140,
      "attack": 70,
      "defense": 45,
      "special_attack": 85,
      "special_defense": 50,
      "speed": 45
    }
  },
  41: {
    "identifier": "zubat",
    "height": 8,
    "weight": 75,
    "base_experience": 49,
    "name": {
      "fr": "Nosferapti",
      "en": "Zubat",
      "jp": "ズバット"
    },
    "type": [
      "poison",
      "flying"
    ],
    "type_fr": [
      "Poison",
      "Vol"
    ],
    "type_color": [
      "#A33EA1",
      "#A98FF3"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      42,
      169
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "special_attack": 30,
      "special_defense": 40,
      "speed": 55
    }
  },
  42: {
    "identifier": "golbat",
    "height": 16,
    "weight": 550,
    "base_experience": 159,
    "name": {
      "fr": "Nosferalto",
      "en": "Golbat",
      "jp": "ゴルバット"
    },
    "type": [
      "poison",
      "flying"
    ],
    "type_fr": [
      "Poison",
      "Vol"
    ],
    "type_color": [
      "#A33EA1",
      "#A98FF3"
    ],
    "evolutions_pre": [
      41
    ],
    "evolutions_next": [
      169
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "special_attack": 65,
      "special_defense": 75,
      "speed": 90
    }
  },
  43: {
    "identifier": "oddish",
    "height": 5,
    "weight": 54,
    "base_experience": 64,
    "name": {
      "fr": "Mystherbe",
      "en": "Oddish",
      "jp": "ナゾノクサ "
    },
    "type": [
      "grass",
      "poison"
    ],
    "type_fr": [
      "Plante",
      "Poison"
    ],
    "type_color": [
      "#7AC74C",
      "#A33EA1"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      44,
      45,
      182
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 55,
      "special_attack": 75,
      "special_defense": 65,
      "speed": 30
    }
  },
  44: {
    "identifier": "gloom",
    "height": 8,
    "weight": 86,
    "base_experience": 138,
    "name": {
      "fr": "Ortide",
      "en": "Gloom",
      "jp": "クサイハナ "
    },
    "type": [
      "grass",
      "poison"
    ],
    "type_fr": [
      "Plante",
      "Poison"
    ],
    "type_color": [
      "#7AC74C",
      "#A33EA1"
    ],
    "evolutions_pre": [
      43
    ],
    "evolutions_next": [
      45,
      182
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 70,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 40
    }
  },
  45: {
    "identifier": "vileplume",
    "height": 12,
    "weight": 186,
    "base_experience": 221,
    "name": {
      "fr": "Rafflesia",
      "en": "Vileplume",
      "jp": "ラフレシア"
    },
    "type": [
      "grass",
      "poison"
    ],
    "type_fr": [
      "Plante",
      "Poison"
    ],
    "type_color": [
      "#7AC74C",
      "#A33EA1"
    ],
    "evolutions_pre": [
      43,
      44
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "special_attack": 110,
      "special_defense": 90,
      "speed": 50
    }
  },
  46: {
    "identifier": "paras",
    "height": 3,
    "weight": 54,
    "base_experience": 57,
    "name": {
      "fr": "Paras",
      "en": "Paras",
      "jp": "パラス"
    },
    "type": [
      "bug",
      "grass"
    ],
    "type_fr": [
      "Insecte",
      "Plante"
    ],
    "type_color": [
      "#A6B91A",
      "#7AC74C"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      47
    ],
    "stats": {
      "hp": 35,
      "attack": 70,
      "defense": 55,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 25
    }
  },
  47: {
    "identifier": "parasect",
    "height": 10,
    "weight": 295,
    "base_experience": 142,
    "name": {
      "fr": "Parasect",
      "en": "Parasect",
      "jp": "パラセクト"
    },
    "type": [
      "bug",
      "grass"
    ],
    "type_fr": [
      "Insecte",
      "Plante"
    ],
    "type_color": [
      "#A6B91A",
      "#7AC74C"
    ],
    "evolutions_pre": [
      46
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 80,
      "special_attack": 60,
      "special_defense": 80,
      "speed": 30
    }
  },
  48: {
    "identifier": "venonat",
    "height": 10,
    "weight": 300,
    "base_experience": 61,
    "name": {
      "fr": "Mimitoss",
      "en": "Venonat",
      "jp": "コンパン"
    },
    "type": [
      "bug",
      "poison"
    ],
    "type_fr": [
      "Insecte",
      "Poison"
    ],
    "type_color": [
      "#A6B91A",
      "#A33EA1"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      49
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 55,
      "speed": 45
    }
  },
  49: {
    "identifier": "venomoth",
    "height": 15,
    "weight": 125,
    "base_experience": 158,
    "name": {
      "fr": "Aéromite",
      "en": "Venomoth",
      "jp": "モルフォン"
    },
    "type": [
      "bug",
      "poison"
    ],
    "type_fr": [
      "Insecte",
      "Poison"
    ],
    "type_color": [
      "#A6B91A",
      "#A33EA1"
    ],
    "evolutions_pre": [
      48
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "special_attack": 90,
      "special_defense": 75,
      "speed": 90
    }
  },
  50: {
    "identifier": "diglett",
    "height": 2,
    "weight": 8,
    "base_experience": 53,
    "name": {
      "fr": "Taupiqueur",
      "en": "Diglett",
      "jp": "ディグダ"
    },
    "type": [
      "ground"
    ],
    "type_fr": [
      "Sol"
    ],
    "type_color": [
      "#E2BF65"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      51
    ],
    "stats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "special_attack": 35,
      "special_defense": 45,
      "speed": 95
    }
  },
  51: {
    "identifier": "dugtrio",
    "height": 7,
    "weight": 333,
    "base_experience": 142,
    "name": {
      "fr": "Triopikeur",
      "en": "Dugtrio",
      "jp": "ダグトリオ"
    },
    "type": [
      "ground"
    ],
    "type_fr": [
      "Sol"
    ],
    "type_color": [
      "#E2BF65"
    ],
    "evolutions_pre": [
      50
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "special_attack": 50,
      "special_defense": 70,
      "speed": 120
    }
  },
  52: {
    "identifier": "meowth",
    "height": 4,
    "weight": 42,
    "base_experience": 58,
    "name": {
      "fr": "Miaouss",
      "en": "Meowth",
      "jp": "ニャース"
    },
    "type": [
      "normal"
    ],
    "type_fr": [
      "Normal"
    ],
    "type_color": [
      "#A8A77A"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      53
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 90
    }
  },
  53: {
    "identifier": "persian",
    "height": 10,
    "weight": 320,
    "base_experience": 154,
    "name": {
      "fr": "Persian",
      "en": "Persian",
      "jp": "ペルシアン"
    },
    "type": [
      "normal"
    ],
    "type_fr": [
      "Normal"
    ],
    "type_color": [
      "#A8A77A"
    ],
    "evolutions_pre": [
      52
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 65,
      "attack": 70,
      "defense": 60,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 115
    }
  },
  54: {
    "identifier": "psyduck",
    "height": 8,
    "weight": 196,
    "base_experience": 64,
    "name": {
      "fr": "Psykokwak",
      "en": "Psyduck",
      "jp": "コダック"
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      55
    ],
    "stats": {
      "hp": 50,
      "attack": 52,
      "defense": 48,
      "special_attack": 65,
      "special_defense": 50,
      "speed": 55
    }
  },
  55: {
    "identifier": "golduck",
    "height": 17,
    "weight": 766,
    "base_experience": 175,
    "name": {
      "fr": "Akwakwak",
      "en": "Golduck",
      "jp": "ゴルダック"
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [
      54
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 78,
      "special_attack": 95,
      "special_defense": 80,
      "speed": 85
    }
  },
  56: {
    "identifier": "mankey",
    "height": 5,
    "weight": 280,
    "base_experience": 61,
    "name": {
      "fr": "Férosinge",
      "en": "Mankey",
      "jp": "マンキー"
    },
    "type": [
      "fighting"
    ],
    "type_fr": [
      "Combat"
    ],
    "type_color": [
      "#C22E28"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      57,
      979
    ],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 35,
      "special_attack": 35,
      "special_defense": 45,
      "speed": 70
    }
  },
  57: {
    "identifier": "primeape",
    "height": 10,
    "weight": 320,
    "base_experience": 159,
    "name": {
      "fr": "Colossinge",
      "en": "Primeape",
      "jp": "オコリザル"
    },
    "type": [
      "fighting"
    ],
    "type_fr": [
      "Combat"
    ],
    "type_color": [
      "#C22E28"
    ],
    "evolutions_pre": [
      56
    ],
    "evolutions_next": [
      979
    ],
    "stats": {
      "hp": 65,
      "attack": 105,
      "defense": 60,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 95
    }
  },
  58: {
    "identifier": "growlithe",
    "height": 7,
    "weight": 190,
    "base_experience": 70,
    "name": {
      "fr": "Caninos",
      "en": "Growlithe",
      "jp": "ガーディ"
    },
    "type": [
      "fire"
    ],
    "type_fr": [
      "Feu"
    ],
    "type_color": [
      "#EE8130"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      59
    ],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 45,
      "special_attack": 70,
      "special_defense": 50,
      "speed": 60
    }
  },
  59: {
    "identifier": "arcanine",
    "height": 19,
    "weight": 1550,
    "base_experience": 194,
    "name": {
      "fr": "Arcanin",
      "en": "Arcanine",
      "jp": "ウインディ"
    },
    "type": [
      "fire"
    ],
    "type_fr": [
      "Feu"
    ],
    "type_color": [
      "#EE8130"
    ],
    "evolutions_pre": [
      58
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "special_attack": 100,
      "special_defense": 80,
      "speed": 95
    }
  },
  60: {
    "identifier": "poliwag",
    "height": 6,
    "weight": 124,
    "base_experience": 60,
    "name": {
      "fr": "Ptitard",
      "en": "Poliwag",
      "jp": "ニョロモ "
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      61,
      62,
      186
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 90
    }
  },
  61: {
    "identifier": "poliwhirl",
    "height": 10,
    "weight": 200,
    "base_experience": 135,
    "name": {
      "fr": "Têtarte",
      "en": "Poliwhirl",
      "jp": "ニョロゾ "
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [
      60
    ],
    "evolutions_next": [
      62,
      186
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 65,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 90
    }
  },
  62: {
    "identifier": "poliwrath",
    "height": 13,
    "weight": 540,
    "base_experience": 230,
    "name": {
      "fr": "Tartard",
      "en": "Poliwrath",
      "jp": "ニョロボン"
    },
    "type": [
      "water",
      "fighting"
    ],
    "type_fr": [
      "Eau",
      "Combat"
    ],
    "type_color": [
      "#6390F0",
      "#C22E28"
    ],
    "evolutions_pre": [
      60,
      61
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 95,
      "special_attack": 70,
      "special_defense": 90,
      "speed": 70
    }
  },
  63: {
    "identifier": "abra",
    "height": 9,
    "weight": 195,
    "base_experience": 62,
    "name": {
      "fr": "Abra",
      "en": "Abra",
      "jp": "ケーシィ"
    },
    "type": [
      "psychic"
    ],
    "type_fr": [
      "Psy"
    ],
    "type_color": [
      "#F95587"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      64,
      65
    ],
    "stats": {
      "hp": 25,
      "attack": 20,
      "defense": 15,
      "special_attack": 105,
      "special_defense": 55,
      "speed": 90
    }
  },
  64: {
    "identifier": "kadabra",
    "height": 13,
    "weight": 565,
    "base_experience": 140,
    "name": {
      "fr": "Kadabra",
      "en": "Kadabra",
      "jp": "ユンゲラー"
    },
    "type": [
      "psychic"
    ],
    "type_fr": [
      "Psy"
    ],
    "type_color": [
      "#F95587"
    ],
    "evolutions_pre": [
      63
    ],
    "evolutions_next": [
      65
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "special_attack": 120,
      "special_defense": 70,
      "speed": 105
    }
  },
  65: {
    "identifier": "alakazam",
    "height": 15,
    "weight": 480,
    "base_experience": 225,
    "name": {
      "fr": "Alakazam",
      "en": "Alakazam",
      "jp": "フーディン"
    },
    "type": [
      "psychic"
    ],
    "type_fr": [
      "Psy"
    ],
    "type_color": [
      "#F95587"
    ],
    "evolutions_pre": [
      63,
      64
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "special_attack": 135,
      "special_defense": 95,
      "speed": 120
    }
  },
  66: {
    "identifier": "machop",
    "height": 8,
    "weight": 195,
    "base_experience": 61,
    "name": {
      "fr": "Machoc",
      "en": "Machop",
      "jp": "ワンリキー"
    },
    "type": [
      "fighting"
    ],
    "type_fr": [
      "Combat"
    ],
    "type_color": [
      "#C22E28"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      67,
      68
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 50,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 35
    }
  },
  67: {
    "identifier": "machoke",
    "height": 15,
    "weight": 705,
    "base_experience": 142,
    "name": {
      "fr": "Machopeur",
      "en": "Machoke",
      "jp": "ゴーリキー"
    },
    "type": [
      "fighting"
    ],
    "type_fr": [
      "Combat"
    ],
    "type_color": [
      "#C22E28"
    ],
    "evolutions_pre": [
      66
    ],
    "evolutions_next": [
      68
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "special_attack": 50,
      "special_defense": 60,
      "speed": 45
    }
  },
  68: {
    "identifier": "machamp",
    "height": 16,
    "weight": 1300,
    "base_experience": 227,
    "name": {
      "fr": "Mackogneur",
      "en": "Machamp",
      "jp": "カイリキー"
    },
    "type": [
      "fighting"
    ],
    "type_fr": [
      "Combat"
    ],
    "type_color": [
      "#C22E28"
    ],
    "evolutions_pre": [
      66,
      67
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "special_attack": 65,
      "special_defense": 85,
      "speed": 55
    }
  },
  69: {
    "identifier": "bellsprout",
    "height": 7,
    "weight": 40,
    "base_experience": 60,
    "name": {
      "fr": "Chétiflor",
      "en": "Bellsprout",
      "jp": "マダツボミ "
    },
    "type": [
      "grass",
      "poison"
    ],
    "type_fr": [
      "Plante",
      "Poison"
    ],
    "type_color": [
      "#7AC74C",
      "#A33EA1"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      70,
      71
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 35,
      "special_attack": 70,
      "special_defense": 30,
      "speed": 40
    }
  },
  70: {
    "identifier": "weepinbell",
    "height": 10,
    "weight": 64,
    "base_experience": 137,
    "name": {
      "fr": "Boustiflor",
      "en": "Weepinbell",
      "jp": "ウツドン "
    },
    "type": [
      "grass",
      "poison"
    ],
    "type_fr": [
      "Plante",
      "Poison"
    ],
    "type_color": [
      "#7AC74C",
      "#A33EA1"
    ],
    "evolutions_pre": [
      69
    ],
    "evolutions_next": [
      71
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 50,
      "special_attack": 85,
      "special_defense": 45,
      "speed": 55
    }
  },
  71: {
    "identifier": "victreebel",
    "height": 17,
    "weight": 155,
    "base_experience": 221,
    "name": {
      "fr": "Empiflor",
      "en": "Victreebel",
      "jp": "ウツボット"
    },
    "type": [
      "grass",
      "poison"
    ],
    "type_fr": [
      "Plante",
      "Poison"
    ],
    "type_color": [
      "#7AC74C",
      "#A33EA1"
    ],
    "evolutions_pre": [
      69,
      70
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "special_attack": 100,
      "special_defense": 70,
      "speed": 70
    }
  },
  72: {
    "identifier": "tentacool",
    "height": 9,
    "weight": 455,
    "base_experience": 67,
    "name": {
      "fr": "Tentacool",
      "en": "Tentacool",
      "jp": "メノクラゲ "
    },
    "type": [
      "water",
      "poison"
    ],
    "type_fr": [
      "Eau",
      "Poison"
    ],
    "type_color": [
      "#6390F0",
      "#A33EA1"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      73
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "special_attack": 50,
      "special_defense": 100,
      "speed": 70
    }
  },
  73: {
    "identifier": "tentacruel",
    "height": 16,
    "weight": 550,
    "base_experience": 180,
    "name": {
      "fr": "Tentacruel",
      "en": "Tentacruel",
      "jp": "ドククラゲ "
    },
    "type": [
      "water",
      "poison"
    ],
    "type_fr": [
      "Eau",
      "Poison"
    ],
    "type_color": [
      "#6390F0",
      "#A33EA1"
    ],
    "evolutions_pre": [
      72
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "special_attack": 80,
      "special_defense": 120,
      "speed": 100
    }
  },
  74: {
    "identifier": "geodude",
    "height": 4,
    "weight": 200,
    "base_experience": 60,
    "name": {
      "fr": "Racaillou",
      "en": "Geodude",
      "jp": "イシツブテ"
    },
    "type": [
      "rock",
      "ground"
    ],
    "type_fr": [
      "Roche",
      "Sol"
    ],
    "type_color": [
      "#B6A136",
      "#E2BF65"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      75,
      76
    ],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 100,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 20
    }
  },
  75: {
    "identifier": "graveler",
    "height": 10,
    "weight": 1050,
    "base_experience": 137,
    "name": {
      "fr": "Gravalanch",
      "en": "Graveler",
      "jp": "ゴローン"
    },
    "type": [
      "rock",
      "ground"
    ],
    "type_fr": [
      "Roche",
      "Sol"
    ],
    "type_color": [
      "#B6A136",
      "#E2BF65"
    ],
    "evolutions_pre": [
      74
    ],
    "evolutions_next": [
      76
    ],
    "stats": {
      "hp": 55,
      "attack": 95,
      "defense": 115,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 35
    }
  },
  76: {
    "identifier": "golem",
    "height": 14,
    "weight": 3000,
    "base_experience": 223,
    "name": {
      "fr": "Grolem",
      "en": "Golem",
      "jp": "ゴローニャ"
    },
    "type": [
      "rock",
      "ground"
    ],
    "type_fr": [
      "Roche",
      "Sol"
    ],
    "type_color": [
      "#B6A136",
      "#E2BF65"
    ],
    "evolutions_pre": [
      74,
      75
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 130,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 45
    }
  },
  77: {
    "identifier": "ponyta",
    "height": 10,
    "weight": 300,
    "base_experience": 82,
    "name": {
      "fr": "Ponyta",
      "en": "Ponyta",
      "jp": "ポニータ"
    },
    "type": [
      "fire"
    ],
    "type_fr": [
      "Feu"
    ],
    "type_color": [
      "#EE8130"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      78
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 55,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 90
    }
  },
  78: {
    "identifier": "rapidash",
    "height": 17,
    "weight": 950,
    "base_experience": 175,
    "name": {
      "fr": "Galopa",
      "en": "Rapidash",
      "jp": "ギャロップ"
    },
    "type": [
      "fire"
    ],
    "type_fr": [
      "Feu"
    ],
    "type_color": [
      "#EE8130"
    ],
    "evolutions_pre": [
      77
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 65,
      "attack": 100,
      "defense": 70,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 105
    }
  },
  79: {
    "identifier": "slowpoke",
    "height": 12,
    "weight": 360,
    "base_experience": 63,
    "name": {
      "fr": "Ramoloss",
      "en": "Slowpoke",
      "jp": "ヤドン "
    },
    "type": [
      "water",
      "psychic"
    ],
    "type_fr": [
      "Eau",
      "Psy"
    ],
    "type_color": [
      "#6390F0",
      "#F95587"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      80,
      199
    ],
    "stats": {
      "hp": 90,
      "attack": 65,
      "defense": 65,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 15
    }
  },
  80: {
    "identifier": "slowbro",
    "height": 16,
    "weight": 785,
    "base_experience": 172,
    "name": {
      "fr": "Flagadoss",
      "en": "Slowbro",
      "jp": "ヤドラン "
    },
    "type": [
      "water",
      "psychic"
    ],
    "type_fr": [
      "Eau",
      "Psy"
    ],
    "type_color": [
      "#6390F0",
      "#F95587"
    ],
    "evolutions_pre": [
      79
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "special_attack": 100,
      "special_defense": 80,
      "speed": 30
    }
  },
  81: {
    "identifier": "magnemite",
    "height": 3,
    "weight": 60,
    "base_experience": 65,
    "name": {
      "fr": "Magnéti",
      "en": "Magnemite",
      "jp": "コイル"
    },
    "type": [
      "electric",
      "steel"
    ],
    "type_fr": [
      "Électrique",
      "Acier"
    ],
    "type_color": [
      "#F7D02C",
      "#B7B7CE"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      82,
      462
    ],
    "stats": {
      "hp": 25,
      "attack": 35,
      "defense": 70,
      "special_attack": 95,
      "special_defense": 55,
      "speed": 45
    }
  },
  82: {
    "identifier": "magneton",
    "height": 10,
    "weight": 600,
    "base_experience": 163,
    "name": {
      "fr": "Magnéton",
      "en": "Magneton",
      "jp": "レアコイル"
    },
    "type": [
      "electric",
      "steel"
    ],
    "type_fr": [
      "Électrique",
      "Acier"
    ],
    "type_color": [
      "#F7D02C",
      "#B7B7CE"
    ],
    "evolutions_pre": [
      81
    ],
    "evolutions_next": [
      462
    ],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 95,
      "special_attack": 120,
      "special_defense": 70,
      "speed": 70
    }
  },
  83: {
    "identifier": "farfetchd",
    "height": 8,
    "weight": 150,
    "base_experience": 123,
    "name": {
      "fr": "farfetchd",
      "en": "farfetchd",
      "jp": "farfetchd"
    },
    "type": [
      "normal",
      "flying"
    ],
    "type_fr": [
      "Normal",
      "Vol"
    ],
    "type_color": [
      "#A8A77A",
      "#A98FF3"
    ],
    "evolutions_pre": [],
    "evolutions_next": [],
    "stats": {
      "hp": 52,
      "attack": 90,
      "defense": 55,
      "special_attack": 58,
      "special_defense": 62,
      "speed": 60
    }
  },
  84: {
    "identifier": "doduo",
    "height": 14,
    "weight": 392,
    "base_experience": 62,
    "name": {
      "fr": "Doduo",
      "en": "Doduo",
      "jp": "ドードー"
    },
    "type": [
      "normal",
      "flying"
    ],
    "type_fr": [
      "Normal",
      "Vol"
    ],
    "type_color": [
      "#A8A77A",
      "#A98FF3"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      85
    ],
    "stats": {
      "hp": 35,
      "attack": 85,
      "defense": 45,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 75
    }
  },
  85: {
    "identifier": "dodrio",
    "height": 18,
    "weight": 852,
    "base_experience": 161,
    "name": {
      "fr": "Dodrio",
      "en": "Dodrio",
      "jp": "ドードリオ"
    },
    "type": [
      "normal",
      "flying"
    ],
    "type_fr": [
      "Normal",
      "Vol"
    ],
    "type_color": [
      "#A8A77A",
      "#A98FF3"
    ],
    "evolutions_pre": [
      84
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 60,
      "attack": 110,
      "defense": 70,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 110
    }
  },
  86: {
    "identifier": "seel",
    "height": 11,
    "weight": 900,
    "base_experience": 65,
    "name": {
      "fr": "Otaria",
      "en": "Seel",
      "jp": "パウワウ"
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      87
    ],
    "stats": {
      "hp": 65,
      "attack": 45,
      "defense": 55,
      "special_attack": 45,
      "special_defense": 70,
      "speed": 45
    }
  },
  87: {
    "identifier": "dewgong",
    "height": 17,
    "weight": 1200,
    "base_experience": 166,
    "name": {
      "fr": "Lamantine",
      "en": "Dewgong",
      "jp": "ジュゴン "
    },
    "type": [
      "water",
      "ice"
    ],
    "type_fr": [
      "Eau",
      "Glace"
    ],
    "type_color": [
      "#6390F0",
      "#96D9D6"
    ],
    "evolutions_pre": [
      86
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 90,
      "attack": 70,
      "defense": 80,
      "special_attack": 70,
      "special_defense": 95,
      "speed": 70
    }
  },
  88: {
    "identifier": "grimer",
    "height": 9,
    "weight": 300,
    "base_experience": 65,
    "name": {
      "fr": "Tadmorv",
      "en": "Grimer",
      "jp": "ベトベター"
    },
    "type": [
      "poison"
    ],
    "type_fr": [
      "Poison"
    ],
    "type_color": [
      "#A33EA1"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      89
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 25
    }
  },
  89: {
    "identifier": "muk",
    "height": 12,
    "weight": 300,
    "base_experience": 175,
    "name": {
      "fr": "Grotadmorv",
      "en": "Muk",
      "jp": "ベトベトン"
    },
    "type": [
      "poison"
    ],
    "type_fr": [
      "Poison"
    ],
    "type_color": [
      "#A33EA1"
    ],
    "evolutions_pre": [
      88
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 105,
      "attack": 105,
      "defense": 75,
      "special_attack": 65,
      "special_defense": 100,
      "speed": 50
    }
  },
  90: {
    "identifier": "shellder",
    "height": 3,
    "weight": 40,
    "base_experience": 61,
    "name": {
      "fr": "Kokiyas",
      "en": "Shellder",
      "jp": "シェルダー"
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      91
    ],
    "stats": {
      "hp": 30,
      "attack": 65,
      "defense": 100,
      "special_attack": 45,
      "special_defense": 25,
      "speed": 40
    }
  },
  91: {
    "identifier": "cloyster",
    "height": 15,
    "weight": 1325,
    "base_experience": 184,
    "name": {
      "fr": "Crustabri",
      "en": "Cloyster",
      "jp": "パルシェン"
    },
    "type": [
      "water",
      "ice"
    ],
    "type_fr": [
      "Eau",
      "Glace"
    ],
    "type_color": [
      "#6390F0",
      "#96D9D6"
    ],
    "evolutions_pre": [
      90
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 50,
      "attack": 95,
      "defense": 180,
      "special_attack": 85,
      "special_defense": 45,
      "speed": 70
    }
  },
  92: {
    "identifier": "gastly",
    "height": 13,
    "weight": 1,
    "base_experience": 62,
    "name": {
      "fr": "Fantominus",
      "en": "Gastly",
      "jp": "ゴース"
    },
    "type": [
      "ghost",
      "poison"
    ],
    "type_fr": [
      "Spectre",
      "Poison"
    ],
    "type_color": [
      "#735797",
      "#A33EA1"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      93,
      94
    ],
    "stats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "special_attack": 100,
      "special_defense": 35,
      "speed": 80
    }
  },
  93: {
    "identifier": "haunter",
    "height": 16,
    "weight": 1,
    "base_experience": 142,
    "name": {
      "fr": "Spectrum",
      "en": "Haunter",
      "jp": "ゴースト"
    },
    "type": [
      "ghost",
      "poison"
    ],
    "type_fr": [
      "Spectre",
      "Poison"
    ],
    "type_color": [
      "#735797",
      "#A33EA1"
    ],
    "evolutions_pre": [
      92
    ],
    "evolutions_next": [
      94
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 45,
      "special_attack": 115,
      "special_defense": 55,
      "speed": 95
    }
  },
  94: {
    "identifier": "gengar",
    "height": 15,
    "weight": 405,
    "base_experience": 225,
    "name": {
      "fr": "Ectoplasma",
      "en": "Gengar",
      "jp": "ゲンガー"
    },
    "type": [
      "ghost",
      "poison"
    ],
    "type_fr": [
      "Spectre",
      "Poison"
    ],
    "type_color": [
      "#735797",
      "#A33EA1"
    ],
    "evolutions_pre": [
      92,
      93
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "special_attack": 130,
      "special_defense": 75,
      "speed": 110
    }
  },
  95: {
    "identifier": "onix",
    "height": 88,
    "weight": 2100,
    "base_experience": 77,
    "name": {
      "fr": "Onix",
      "en": "Onix",
      "jp": "イワーク"
    },
    "type": [
      "rock",
      "ground"
    ],
    "type_fr": [
      "Roche",
      "Sol"
    ],
    "type_color": [
      "#B6A136",
      "#E2BF65"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      208
    ],
    "stats": {
      "hp": 35,
      "attack": 45,
      "defense": 160,
      "special_attack": 30,
      "special_defense": 45,
      "speed": 70
    }
  },
  96: {
    "identifier": "drowzee",
    "height": 10,
    "weight": 324,
    "base_experience": 66,
    "name": {
      "fr": "Soporifik",
      "en": "Drowzee",
      "jp": "スリープ"
    },
    "type": [
      "psychic"
    ],
    "type_fr": [
      "Psy"
    ],
    "type_color": [
      "#F95587"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      97
    ],
    "stats": {
      "hp": 60,
      "attack": 48,
      "defense": 45,
      "special_attack": 43,
      "special_defense": 90,
      "speed": 42
    }
  },
  97: {
    "identifier": "hypno",
    "height": 16,
    "weight": 756,
    "base_experience": 169,
    "name": {
      "fr": "Hypnomade",
      "en": "Hypno",
      "jp": "スリーパー"
    },
    "type": [
      "psychic"
    ],
    "type_fr": [
      "Psy"
    ],
    "type_color": [
      "#F95587"
    ],
    "evolutions_pre": [
      96
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 85,
      "attack": 73,
      "defense": 70,
      "special_attack": 73,
      "special_defense": 115,
      "speed": 67
    }
  },
  98: {
    "identifier": "krabby",
    "height": 4,
    "weight": 65,
    "base_experience": 65,
    "name": {
      "fr": "Krabby",
      "en": "Krabby",
      "jp": "クラブ"
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      99
    ],
    "stats": {
      "hp": 30,
      "attack": 105,
      "defense": 90,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 50
    }
  },
  99: {
    "identifier": "kingler",
    "height": 13,
    "weight": 600,
    "base_experience": 166,
    "name": {
      "fr": "Krabboss",
      "en": "Kingler",
      "jp": "キングラー"
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [
      98
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 55,
      "attack": 130,
      "defense": 115,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 75
    }
  },
  100: {
    "identifier": "voltorb",
    "height": 5,
    "weight": 104,
    "base_experience": 66,
    "name": {
      "fr": "Voltorbe",
      "en": "Voltorb",
      "jp": "ビリリダマ "
    },
    "type": [
      "electric"
    ],
    "type_fr": [
      "Électrique"
    ],
    "type_color": [
      "#F7D02C"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      101
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 50,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 100
    }
  },
  101: {
    "identifier": "electrode",
    "height": 12,
    "weight": 666,
    "base_experience": 168,
    "name": {
      "fr": "Électrode",
      "en": "Electrode",
      "jp": "マルマイン"
    },
    "type": [
      "electric"
    ],
    "type_fr": [
      "Électrique"
    ],
    "type_color": [
      "#F7D02C"
    ],
    "evolutions_pre": [
      100
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 150
    }
  },
  102: {
    "identifier": "exeggcute",
    "height": 4,
    "weight": 25,
    "base_experience": 65,
    "name": {
      "fr": "Noeunoeuf",
      "en": "Exeggcute",
      "jp": "タマタマ "
    },
    "type": [
      "grass",
      "psychic"
    ],
    "type_fr": [
      "Plante",
      "Psy"
    ],
    "type_color": [
      "#7AC74C",
      "#F95587"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      103
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 80,
      "special_attack": 60,
      "special_defense": 45,
      "speed": 40
    }
  },
  103: {
    "identifier": "exeggutor",
    "height": 20,
    "weight": 1200,
    "base_experience": 182,
    "name": {
      "fr": "Noadkoko",
      "en": "Exeggutor",
      "jp": "ナッシー"
    },
    "type": [
      "grass",
      "psychic"
    ],
    "type_fr": [
      "Plante",
      "Psy"
    ],
    "type_color": [
      "#7AC74C",
      "#F95587"
    ],
    "evolutions_pre": [
      102
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 85,
      "special_attack": 125,
      "special_defense": 75,
      "speed": 55
    }
  },
  104: {
    "identifier": "cubone",
    "height": 4,
    "weight": 65,
    "base_experience": 64,
    "name": {
      "fr": "Osselait",
      "en": "Cubone",
      "jp": "カラカラ "
    },
    "type": [
      "ground"
    ],
    "type_fr": [
      "Sol"
    ],
    "type_color": [
      "#E2BF65"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      105
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 95,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 35
    }
  },
  105: {
    "identifier": "marowak",
    "height": 10,
    "weight": 450,
    "base_experience": 149,
    "name": {
      "fr": "Ossatueur",
      "en": "Marowak",
      "jp": "ガラガラ "
    },
    "type": [
      "ground"
    ],
    "type_fr": [
      "Sol"
    ],
    "type_color": [
      "#E2BF65"
    ],
    "evolutions_pre": [
      104
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 110,
      "special_attack": 50,
      "special_defense": 80,
      "speed": 45
    }
  },
  106: {
    "identifier": "hitmonlee",
    "height": 15,
    "weight": 498,
    "base_experience": 159,
    "name": {
      "fr": "Kicklee",
      "en": "Hitmonlee",
      "jp": "サワムラー"
    },
    "type": [
      "fighting"
    ],
    "type_fr": [
      "Combat"
    ],
    "type_color": [
      "#C22E28"
    ],
    "evolutions_pre": [
      236
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 50,
      "attack": 120,
      "defense": 53,
      "special_attack": 35,
      "special_defense": 110,
      "speed": 87
    }
  },
  107: {
    "identifier": "hitmonchan",
    "height": 14,
    "weight": 502,
    "base_experience": 159,
    "name": {
      "fr": "Tygnon",
      "en": "Hitmonchan",
      "jp": "エビワラー"
    },
    "type": [
      "fighting"
    ],
    "type_fr": [
      "Combat"
    ],
    "type_color": [
      "#C22E28"
    ],
    "evolutions_pre": [
      236
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 50,
      "attack": 105,
      "defense": 79,
      "special_attack": 35,
      "special_defense": 110,
      "speed": 76
    }
  },
  108: {
    "identifier": "lickitung",
    "height": 12,
    "weight": 655,
    "base_experience": 77,
    "name": {
      "fr": "Excelangue",
      "en": "Lickitung",
      "jp": "ベロリンガ "
    },
    "type": [
      "normal"
    ],
    "type_fr": [
      "Normal"
    ],
    "type_color": [
      "#A8A77A"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      463
    ],
    "stats": {
      "hp": 90,
      "attack": 55,
      "defense": 75,
      "special_attack": 60,
      "special_defense": 75,
      "speed": 30
    }
  },
  109: {
    "identifier": "koffing",
    "height": 6,
    "weight": 10,
    "base_experience": 68,
    "name": {
      "fr": "Smogo",
      "en": "Koffing",
      "jp": "ドガース"
    },
    "type": [
      "poison"
    ],
    "type_fr": [
      "Poison"
    ],
    "type_color": [
      "#A33EA1"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      110
    ],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 95,
      "special_attack": 60,
      "special_defense": 45,
      "speed": 35
    }
  },
  110: {
    "identifier": "weezing",
    "height": 12,
    "weight": 95,
    "base_experience": 172,
    "name": {
      "fr": "Smogogo",
      "en": "Weezing",
      "jp": "マタドガス"
    },
    "type": [
      "poison"
    ],
    "type_fr": [
      "Poison"
    ],
    "type_color": [
      "#A33EA1"
    ],
    "evolutions_pre": [
      109
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 120,
      "special_attack": 85,
      "special_defense": 70,
      "speed": 60
    }
  },
  111: {
    "identifier": "rhyhorn",
    "height": 10,
    "weight": 1150,
    "base_experience": 69,
    "name": {
      "fr": "Rhinocorne",
      "en": "Rhyhorn",
      "jp": "サイホーン"
    },
    "type": [
      "ground",
      "rock"
    ],
    "type_fr": [
      "Sol",
      "Roche"
    ],
    "type_color": [
      "#E2BF65",
      "#B6A136"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      112,
      464
    ],
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 95,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 25
    }
  },
  112: {
    "identifier": "rhydon",
    "height": 19,
    "weight": 1200,
    "base_experience": 170,
    "name": {
      "fr": "Rhinoféros",
      "en": "Rhydon",
      "jp": "サイドン"
    },
    "type": [
      "ground",
      "rock"
    ],
    "type_fr": [
      "Sol",
      "Roche"
    ],
    "type_color": [
      "#E2BF65",
      "#B6A136"
    ],
    "evolutions_pre": [
      111
    ],
    "evolutions_next": [
      464
    ],
    "stats": {
      "hp": 105,
      "attack": 130,
      "defense": 120,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 40
    }
  },
  113: {
    "identifier": "chansey",
    "height": 11,
    "weight": 346,
    "base_experience": 395,
    "name": {
      "fr": "Leveinard",
      "en": "Chansey",
      "jp": "ラッキー"
    },
    "type": [
      "normal"
    ],
    "type_fr": [
      "Normal"
    ],
    "type_color": [
      "#A8A77A"
    ],
    "evolutions_pre": [
      440
    ],
    "evolutions_next": [
      242
    ],
    "stats": {
      "hp": 250,
      "attack": 5,
      "defense": 5,
      "special_attack": 35,
      "special_defense": 105,
      "speed": 50
    }
  },
  114: {
    "identifier": "tangela",
    "height": 10,
    "weight": 350,
    "base_experience": 87,
    "name": {
      "fr": "Saquedeneu",
      "en": "Tangela",
      "jp": "モンジャラ "
    },
    "type": [
      "grass"
    ],
    "type_fr": [
      "Plante"
    ],
    "type_color": [
      "#7AC74C"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      465
    ],
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 115,
      "special_attack": 100,
      "special_defense": 40,
      "speed": 60
    }
  },
  115: {
    "identifier": "kangaskhan",
    "height": 22,
    "weight": 800,
    "base_experience": 172,
    "name": {
      "fr": "Kangourex",
      "en": "Kangaskhan",
      "jp": "ガルーラ"
    },
    "type": [
      "normal"
    ],
    "type_fr": [
      "Normal"
    ],
    "type_color": [
      "#A8A77A"
    ],
    "evolutions_pre": [],
    "evolutions_next": [],
    "stats": {
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "special_attack": 40,
      "special_defense": 80,
      "speed": 90
    }
  },
  116: {
    "identifier": "horsea",
    "height": 4,
    "weight": 80,
    "base_experience": 59,
    "name": {
      "fr": "Hypotrempe",
      "en": "Horsea",
      "jp": "タッツー"
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      117,
      230
    ],
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 70,
      "special_attack": 70,
      "special_defense": 25,
      "speed": 60
    }
  },
  117: {
    "identifier": "seadra",
    "height": 12,
    "weight": 250,
    "base_experience": 154,
    "name": {
      "fr": "Hypocéan",
      "en": "Seadra",
      "jp": "シードラ"
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [
      116
    ],
    "evolutions_next": [
      230
    ],
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 95,
      "special_attack": 95,
      "special_defense": 45,
      "speed": 85
    }
  },
  118: {
    "identifier": "goldeen",
    "height": 6,
    "weight": 150,
    "base_experience": 64,
    "name": {
      "fr": "Poissirène",
      "en": "Goldeen",
      "jp": "トサキント "
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      119
    ],
    "stats": {
      "hp": 45,
      "attack": 67,
      "defense": 60,
      "special_attack": 35,
      "special_defense": 50,
      "speed": 63
    }
  },
  119: {
    "identifier": "seaking",
    "height": 13,
    "weight": 390,
    "base_experience": 158,
    "name": {
      "fr": "Poissoroy",
      "en": "Seaking",
      "jp": "アズマオウ"
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [
      118
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 80,
      "attack": 92,
      "defense": 65,
      "special_attack": 65,
      "special_defense": 80,
      "speed": 68
    }
  },
  120: {
    "identifier": "staryu",
    "height": 8,
    "weight": 345,
    "base_experience": 68,
    "name": {
      "fr": "Stari",
      "en": "Staryu",
      "jp": "ヒトデマン "
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      121
    ],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 55,
      "special_attack": 70,
      "special_defense": 55,
      "speed": 85
    }
  },
  121: {
    "identifier": "starmie",
    "height": 11,
    "weight": 800,
    "base_experience": 182,
    "name": {
      "fr": "Staross",
      "en": "Starmie",
      "jp": "スターミー"
    },
    "type": [
      "water",
      "psychic"
    ],
    "type_fr": [
      "Eau",
      "Psy"
    ],
    "type_color": [
      "#6390F0",
      "#F95587"
    ],
    "evolutions_pre": [
      120
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "special_attack": 100,
      "special_defense": 85,
      "speed": 115
    }
  },
  122: {
    "identifier": "mr-mime",
    "height": 13,
    "weight": 545,
    "base_experience": 161,
    "name": {
      "fr": "mr-mime",
      "en": "mr-mime",
      "jp": "mr-mime"
    },
    "type": [
      "psychic",
      "fairy"
    ],
    "type_fr": [
      "Psy",
      "Fée"
    ],
    "type_color": [
      "#F95587",
      "#D685AD"
    ],
    "evolutions_pre": [],
    "evolutions_next": [],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 65,
      "special_attack": 100,
      "special_defense": 120,
      "speed": 90
    }
  },
  123: {
    "identifier": "scyther",
    "height": 15,
    "weight": 560,
    "base_experience": 100,
    "name": {
      "fr": "Insécateur",
      "en": "Scyther",
      "jp": "ストライク"
    },
    "type": [
      "bug",
      "flying"
    ],
    "type_fr": [
      "Insecte",
      "Vol"
    ],
    "type_color": [
      "#A6B91A",
      "#A98FF3"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      212,
      900
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "special_attack": 55,
      "special_defense": 80,
      "speed": 105
    }
  },
  124: {
    "identifier": "jynx",
    "height": 14,
    "weight": 406,
    "base_experience": 159,
    "name": {
      "fr": "Lippoutou",
      "en": "Jynx",
      "jp": "ルージュラ"
    },
    "type": [
      "ice",
      "psychic"
    ],
    "type_fr": [
      "Glace",
      "Psy"
    ],
    "type_color": [
      "#96D9D6",
      "#F95587"
    ],
    "evolutions_pre": [
      238
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 65,
      "attack": 50,
      "defense": 35,
      "special_attack": 115,
      "special_defense": 95,
      "speed": 95
    }
  },
  125: {
    "identifier": "electabuzz",
    "height": 11,
    "weight": 300,
    "base_experience": 172,
    "name": {
      "fr": "Élektek",
      "en": "Electabuzz",
      "jp": "エレブー"
    },
    "type": [
      "electric"
    ],
    "type_fr": [
      "Électrique"
    ],
    "type_color": [
      "#F7D02C"
    ],
    "evolutions_pre": [
      239
    ],
    "evolutions_next": [
      466
    ],
    "stats": {
      "hp": 65,
      "attack": 83,
      "defense": 57,
      "special_attack": 95,
      "special_defense": 85,
      "speed": 105
    }
  },
  126: {
    "identifier": "magmar",
    "height": 13,
    "weight": 445,
    "base_experience": 173,
    "name": {
      "fr": "Magmar",
      "en": "Magmar",
      "jp": "ブーバー"
    },
    "type": [
      "fire"
    ],
    "type_fr": [
      "Feu"
    ],
    "type_color": [
      "#EE8130"
    ],
    "evolutions_pre": [
      240
    ],
    "evolutions_next": [
      467
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 57,
      "special_attack": 100,
      "special_defense": 85,
      "speed": 93
    }
  },
  127: {
    "identifier": "pinsir",
    "height": 15,
    "weight": 550,
    "base_experience": 175,
    "name": {
      "fr": "Scarabrute",
      "en": "Pinsir",
      "jp": "カイロス"
    },
    "type": [
      "bug"
    ],
    "type_fr": [
      "Insecte"
    ],
    "type_color": [
      "#A6B91A"
    ],
    "evolutions_pre": [],
    "evolutions_next": [],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "special_attack": 55,
      "special_defense": 70,
      "speed": 85
    }
  },
  128: {
    "identifier": "tauros",
    "height": 14,
    "weight": 884,
    "base_experience": 172,
    "name": {
      "fr": "Tauros",
      "en": "Tauros",
      "jp": "ケンタロス"
    },
    "type": [
      "normal"
    ],
    "type_fr": [
      "Normal"
    ],
    "type_color": [
      "#A8A77A"
    ],
    "evolutions_pre": [],
    "evolutions_next": [],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 95,
      "special_attack": 40,
      "special_defense": 70,
      "speed": 110
    }
  },
  129: {
    "identifier": "magikarp",
    "height": 9,
    "weight": 100,
    "base_experience": 40,
    "name": {
      "fr": "Magicarpe",
      "en": "Magikarp",
      "jp": "コイキング"
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      130
    ],
    "stats": {
      "hp": 20,
      "attack": 10,
      "defense": 55,
      "special_attack": 15,
      "special_defense": 20,
      "speed": 80
    }
  },
  130: {
    "identifier": "gyarados",
    "height": 65,
    "weight": 2350,
    "base_experience": 189,
    "name": {
      "fr": "Léviator",
      "en": "Gyarados",
      "jp": "ギャラドス"
    },
    "type": [
      "water",
      "flying"
    ],
    "type_fr": [
      "Eau",
      "Vol"
    ],
    "type_color": [
      "#6390F0",
      "#A98FF3"
    ],
    "evolutions_pre": [
      129
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "special_attack": 60,
      "special_defense": 100,
      "speed": 81
    }
  },
  131: {
    "identifier": "lapras",
    "height": 25,
    "weight": 2200,
    "base_experience": 187,
    "name": {
      "fr": "Lokhlass",
      "en": "Lapras",
      "jp": "ラプラス"
    },
    "type": [
      "water",
      "ice"
    ],
    "type_fr": [
      "Eau",
      "Glace"
    ],
    "type_color": [
      "#6390F0",
      "#96D9D6"
    ],
    "evolutions_pre": [],
    "evolutions_next": [],
    "stats": {
      "hp": 130,
      "attack": 85,
      "defense": 80,
      "special_attack": 85,
      "special_defense": 95,
      "speed": 60
    }
  },
  132: {
    "identifier": "ditto",
    "height": 3,
    "weight": 40,
    "base_experience": 101,
    "name": {
      "fr": "Métamorph",
      "en": "Ditto",
      "jp": "メタモン "
    },
    "type": [
      "normal"
    ],
    "type_fr": [
      "Normal"
    ],
    "type_color": [
      "#A8A77A"
    ],
    "evolutions_pre": [],
    "evolutions_next": [],
    "stats": {
      "hp": 48,
      "attack": 48,
      "defense": 48,
      "special_attack": 48,
      "special_defense": 48,
      "speed": 48
    }
  },
  133: {
    "identifier": "eevee",
    "height": 3,
    "weight": 65,
    "base_experience": 65,
    "name": {
      "fr": "Évoli",
      "en": "Eevee",
      "jp": "イーブイ"
    },
    "type": [
      "normal"
    ],
    "type_fr": [
      "Normal"
    ],
    "type_color": [
      "#A8A77A"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      134,
      135,
      136,
      196,
      197,
      470,
      471,
      700
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 50,
      "special_attack": 45,
      "special_defense": 65,
      "speed": 55
    }
  },
  134: {
    "identifier": "vaporeon",
    "height": 10,
    "weight": 290,
    "base_experience": 184,
    "name": {
      "fr": "Aquali",
      "en": "Vaporeon",
      "jp": "シャワーズ"
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [
      133
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "special_attack": 110,
      "special_defense": 95,
      "speed": 65
    }
  },
  135: {
    "identifier": "jolteon",
    "height": 8,
    "weight": 245,
    "base_experience": 184,
    "name": {
      "fr": "Voltali",
      "en": "Jolteon",
      "jp": "サンダース"
    },
    "type": [
      "electric"
    ],
    "type_fr": [
      "Électrique"
    ],
    "type_color": [
      "#F7D02C"
    ],
    "evolutions_pre": [
      133
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "special_attack": 110,
      "special_defense": 95,
      "speed": 130
    }
  },
  136: {
    "identifier": "flareon",
    "height": 9,
    "weight": 250,
    "base_experience": 184,
    "name": {
      "fr": "Pyroli",
      "en": "Flareon",
      "jp": "ブースター"
    },
    "type": [
      "fire"
    ],
    "type_fr": [
      "Feu"
    ],
    "type_color": [
      "#EE8130"
    ],
    "evolutions_pre": [
      133
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "special_attack": 95,
      "special_defense": 110,
      "speed": 65
    }
  },
  137: {
    "identifier": "porygon",
    "height": 8,
    "weight": 365,
    "base_experience": 79,
    "name": {
      "fr": "Porygon",
      "en": "Porygon",
      "jp": "ポリゴン"
    },
    "type": [
      "normal"
    ],
    "type_fr": [
      "Normal"
    ],
    "type_color": [
      "#A8A77A"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      233,
      474
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 70,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 40
    }
  },
  138: {
    "identifier": "omanyte",
    "height": 4,
    "weight": 75,
    "base_experience": 71,
    "name": {
      "fr": "Amonita",
      "en": "Omanyte",
      "jp": "オムナイト"
    },
    "type": [
      "rock",
      "water"
    ],
    "type_fr": [
      "Roche",
      "Eau"
    ],
    "type_color": [
      "#B6A136",
      "#6390F0"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      139
    ],
    "stats": {
      "hp": 35,
      "attack": 40,
      "defense": 100,
      "special_attack": 90,
      "special_defense": 55,
      "speed": 35
    }
  },
  139: {
    "identifier": "omastar",
    "height": 10,
    "weight": 350,
    "base_experience": 173,
    "name": {
      "fr": "Amonistar",
      "en": "Omastar",
      "jp": "オムスター"
    },
    "type": [
      "rock",
      "water"
    ],
    "type_fr": [
      "Roche",
      "Eau"
    ],
    "type_color": [
      "#B6A136",
      "#6390F0"
    ],
    "evolutions_pre": [
      138
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 125,
      "special_attack": 115,
      "special_defense": 70,
      "speed": 55
    }
  },
  140: {
    "identifier": "kabuto",
    "height": 5,
    "weight": 115,
    "base_experience": 71,
    "name": {
      "fr": "Kabuto",
      "en": "Kabuto",
      "jp": "カブト "
    },
    "type": [
      "rock",
      "water"
    ],
    "type_fr": [
      "Roche",
      "Eau"
    ],
    "type_color": [
      "#B6A136",
      "#6390F0"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      141
    ],
    "stats": {
      "hp": 30,
      "attack": 80,
      "defense": 90,
      "special_attack": 55,
      "special_defense": 45,
      "speed": 55
    }
  },
  141: {
    "identifier": "kabutops",
    "height": 13,
    "weight": 405,
    "base_experience": 173,
    "name": {
      "fr": "Kabutops",
      "en": "Kabutops",
      "jp": "カブトプス"
    },
    "type": [
      "rock",
      "water"
    ],
    "type_fr": [
      "Roche",
      "Eau"
    ],
    "type_color": [
      "#B6A136",
      "#6390F0"
    ],
    "evolutions_pre": [
      140
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 60,
      "attack": 115,
      "defense": 105,
      "special_attack": 65,
      "special_defense": 70,
      "speed": 80
    }
  },
  142: {
    "identifier": "aerodactyl",
    "height": 18,
    "weight": 590,
    "base_experience": 180,
    "name": {
      "fr": "Ptéra",
      "en": "Aerodactyl",
      "jp": "プテラ"
    },
    "type": [
      "rock",
      "flying"
    ],
    "type_fr": [
      "Roche",
      "Vol"
    ],
    "type_color": [
      "#B6A136",
      "#A98FF3"
    ],
    "evolutions_pre": [],
    "evolutions_next": [],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "special_attack": 60,
      "special_defense": 75,
      "speed": 130
    }
  },
  143: {
    "identifier": "snorlax",
    "height": 21,
    "weight": 4600,
    "base_experience": 189,
    "name": {
      "fr": "Ronflex",
      "en": "Snorlax",
      "jp": "カビゴン "
    },
    "type": [
      "normal"
    ],
    "type_fr": [
      "Normal"
    ],
    "type_color": [
      "#A8A77A"
    ],
    "evolutions_pre": [
      143
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "special_attack": 65,
      "special_defense": 110,
      "speed": 30
    }
  },
  144: {
    "identifier": "articuno",
    "height": 17,
    "weight": 554,
    "base_experience": 261,
    "name": {
      "fr": "Artikodin",
      "en": "Articuno",
      "jp": "フリーザー"
    },
    "type": [
      "ice",
      "flying"
    ],
    "type_fr": [
      "Glace",
      "Vol"
    ],
    "type_color": [
      "#96D9D6",
      "#A98FF3"
    ],
    "evolutions_pre": [],
    "evolutions_next": [],
    "stats": {
      "hp": 90,
      "attack": 85,
      "defense": 100,
      "special_attack": 95,
      "special_defense": 125,
      "speed": 85
    }
  },
  145: {
    "identifier": "zapdos",
    "height": 16,
    "weight": 526,
    "base_experience": 261,
    "name": {
      "fr": "Électhor",
      "en": "Zapdos",
      "jp": "サンダー"
    },
    "type": [
      "electric",
      "flying"
    ],
    "type_fr": [
      "Électrique",
      "Vol"
    ],
    "type_color": [
      "#F7D02C",
      "#A98FF3"
    ],
    "evolutions_pre": [],
    "evolutions_next": [],
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 85,
      "special_attack": 125,
      "special_defense": 90,
      "speed": 100
    }
  },
  146: {
    "identifier": "moltres",
    "height": 20,
    "weight": 600,
    "base_experience": 261,
    "name": {
      "fr": "Sulfura",
      "en": "Moltres",
      "jp": "ファイヤー"
    },
    "type": [
      "fire",
      "flying"
    ],
    "type_fr": [
      "Feu",
      "Vol"
    ],
    "type_color": [
      "#EE8130",
      "#A98FF3"
    ],
    "evolutions_pre": [],
    "evolutions_next": [],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "special_attack": 125,
      "special_defense": 85,
      "speed": 90
    }
  },
  147: {
    "identifier": "dratini",
    "height": 18,
    "weight": 33,
    "base_experience": 60,
    "name": {
      "fr": "Minidraco",
      "en": "Dratini",
      "jp": "ミニリュウ"
    },
    "type": [
      "dragon"
    ],
    "type_fr": [
      "Dragon"
    ],
    "type_color": [
      "#6F35FC"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      148,
      149
    ],
    "stats": {
      "hp": 41,
      "attack": 64,
      "defense": 45,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 50
    }
  },
  148: {
    "identifier": "dragonair",
    "height": 40,
    "weight": 165,
    "base_experience": 147,
    "name": {
      "fr": "Draco",
      "en": "Dragonair",
      "jp": "ハクリュー"
    },
    "type": [
      "dragon"
    ],
    "type_fr": [
      "Dragon"
    ],
    "type_color": [
      "#6F35FC"
    ],
    "evolutions_pre": [
      147
    ],
    "evolutions_next": [
      149
    ],
    "stats": {
      "hp": 61,
      "attack": 84,
      "defense": 65,
      "special_attack": 70,
      "special_defense": 70,
      "speed": 70
    }
  },
  149: {
    "identifier": "dragonite",
    "height": 22,
    "weight": 2100,
    "base_experience": 270,
    "name": {
      "fr": "Dracolosse",
      "en": "Dragonite",
      "jp": "カイリュー"
    },
    "type": [
      "dragon",
      "flying"
    ],
    "type_fr": [
      "Dragon",
      "Vol"
    ],
    "type_color": [
      "#6F35FC",
      "#A98FF3"
    ],
    "evolutions_pre": [
      147,
      148
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 80
    }
  },
  150: {
    "identifier": "mewtwo",
    "height": 20,
    "weight": 1220,
    "base_experience": 306,
    "name": {
      "fr": "Mewtwo",
      "en": "Mewtwo",
      "jp": "ミュウツー"
    },
    "type": [
      "psychic"
    ],
    "type_fr": [
      "Psy"
    ],
    "type_color": [
      "#F95587"
    ],
    "evolutions_pre": [],
    "evolutions_next": [],
    "stats": {
      "hp": 106,
      "attack": 110,
      "defense": 90,
      "special_attack": 154,
      "special_defense": 90,
      "speed": 130
    }
  },
  151: {
    "identifier": "mew",
    "height": 4,
    "weight": 40,
    "base_experience": 270,
    "name": {
      "fr": "Mew",
      "en": "Mew",
      "jp": "ミュウ"
    },
    "type": [
      "psychic"
    ],
    "type_fr": [
      "Psy"
    ],
    "type_color": [
      "#F95587"
    ],
    "evolutions_pre": [],
    "evolutions_next": [],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 100
    }
  },
  152: {
    "identifier": "chikorita",
    "height": 9,
    "weight": 64,
    "base_experience": 64,
    "name": {
      "fr": "Germignon",
      "en": "Chikorita",
      "jp": "チコリータ"
    },
    "type": [
      "grass"
    ],
    "type_fr": [
      "Plante"
    ],
    "type_color": [
      "#7AC74C"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      153,
      154
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 65,
      "special_attack": 49,
      "special_defense": 65,
      "speed": 45
    }
  },
  153: {
    "identifier": "bayleef",
    "height": 12,
    "weight": 158,
    "base_experience": 142,
    "name": {
      "fr": "Macronium",
      "en": "Bayleef",
      "jp": "ベイリーフ"
    },
    "type": [
      "grass"
    ],
    "type_fr": [
      "Plante"
    ],
    "type_color": [
      "#7AC74C"
    ],
    "evolutions_pre": [
      152
    ],
    "evolutions_next": [
      154
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 80,
      "special_attack": 63,
      "special_defense": 80,
      "speed": 60
    }
  },
  154: {
    "identifier": "meganium",
    "height": 18,
    "weight": 1005,
    "base_experience": 236,
    "name": {
      "fr": "Méganium",
      "en": "Meganium",
      "jp": "メガニウム"
    },
    "type": [
      "grass"
    ],
    "type_fr": [
      "Plante"
    ],
    "type_color": [
      "#7AC74C"
    ],
    "evolutions_pre": [
      152,
      153
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 100,
      "special_attack": 83,
      "special_defense": 100,
      "speed": 80
    }
  },
  155: {
    "identifier": "cyndaquil",
    "height": 5,
    "weight": 79,
    "base_experience": 62,
    "name": {
      "fr": "Héricendre",
      "en": "Cyndaquil",
      "jp": "ヒノアラシ "
    },
    "type": [
      "fire"
    ],
    "type_fr": [
      "Feu"
    ],
    "type_color": [
      "#EE8130"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      156,
      157,
      157
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "special_attack": 60,
      "special_defense": 50,
      "speed": 65
    }
  },
  156: {
    "identifier": "quilava",
    "height": 9,
    "weight": 190,
    "base_experience": 142,
    "name": {
      "fr": "Feurisson",
      "en": "Quilava",
      "jp": "マグマラシ"
    },
    "type": [
      "fire"
    ],
    "type_fr": [
      "Feu"
    ],
    "type_color": [
      "#EE8130"
    ],
    "evolutions_pre": [
      155
    ],
    "evolutions_next": [
      157,
      157
    ],
    "stats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "special_attack": 80,
      "special_defense": 65,
      "speed": 80
    }
  },
  157: {
    "identifier": "typhlosion",
    "height": 17,
    "weight": 795,
    "base_experience": 240,
    "name": {
      "fr": "Typhlosion",
      "en": "Typhlosion",
      "jp": "バクフーン"
    },
    "type": [
      "fire"
    ],
    "type_fr": [
      "Feu"
    ],
    "type_color": [
      "#EE8130"
    ],
    "evolutions_pre": [
      155,
      156
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "special_attack": 109,
      "special_defense": 85,
      "speed": 100
    }
  },
  158: {
    "identifier": "totodile",
    "height": 6,
    "weight": 95,
    "base_experience": 63,
    "name": {
      "fr": "Kaiminus",
      "en": "Totodile",
      "jp": "ワニノコ "
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      159,
      160
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 64,
      "special_attack": 44,
      "special_defense": 48,
      "speed": 43
    }
  },
  159: {
    "identifier": "croconaw",
    "height": 11,
    "weight": 250,
    "base_experience": 142,
    "name": {
      "fr": "Crocrodil",
      "en": "Croconaw",
      "jp": "アリゲイツ"
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [
      158
    ],
    "evolutions_next": [
      160
    ],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 80,
      "special_attack": 59,
      "special_defense": 63,
      "speed": 58
    }
  },
  160: {
    "identifier": "feraligatr",
    "height": 23,
    "weight": 888,
    "base_experience": 239,
    "name": {
      "fr": "Aligatueur",
      "en": "Feraligatr",
      "jp": "オーダイル"
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [
      158,
      159
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 100,
      "special_attack": 79,
      "special_defense": 83,
      "speed": 78
    }
  },
  161: {
    "identifier": "sentret",
    "height": 8,
    "weight": 60,
    "base_experience": 43,
    "name": {
      "fr": "Fouinette",
      "en": "Sentret",
      "jp": "オタチ "
    },
    "type": [
      "normal"
    ],
    "type_fr": [
      "Normal"
    ],
    "type_color": [
      "#A8A77A"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      162
    ],
    "stats": {
      "hp": 35,
      "attack": 46,
      "defense": 34,
      "special_attack": 35,
      "special_defense": 45,
      "speed": 20
    }
  },
  162: {
    "identifier": "furret",
    "height": 18,
    "weight": 325,
    "base_experience": 145,
    "name": {
      "fr": "Fouinar",
      "en": "Furret",
      "jp": "オオタチ"
    },
    "type": [
      "normal"
    ],
    "type_fr": [
      "Normal"
    ],
    "type_color": [
      "#A8A77A"
    ],
    "evolutions_pre": [
      161
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 85,
      "attack": 76,
      "defense": 64,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 90
    }
  },
  163: {
    "identifier": "hoothoot",
    "height": 7,
    "weight": 212,
    "base_experience": 52,
    "name": {
      "fr": "Hoothoot",
      "en": "Hoothoot",
      "jp": "ホーホー"
    },
    "type": [
      "normal",
      "flying"
    ],
    "type_fr": [
      "Normal",
      "Vol"
    ],
    "type_color": [
      "#A8A77A",
      "#A98FF3"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      164
    ],
    "stats": {
      "hp": 60,
      "attack": 30,
      "defense": 30,
      "special_attack": 36,
      "special_defense": 56,
      "speed": 50
    }
  },
  164: {
    "identifier": "noctowl",
    "height": 16,
    "weight": 408,
    "base_experience": 155,
    "name": {
      "fr": "Noarfang",
      "en": "Noctowl",
      "jp": "ヨルノズク "
    },
    "type": [
      "normal",
      "flying"
    ],
    "type_fr": [
      "Normal",
      "Vol"
    ],
    "type_color": [
      "#A8A77A",
      "#A98FF3"
    ],
    "evolutions_pre": [
      163
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 100,
      "attack": 50,
      "defense": 50,
      "special_attack": 86,
      "special_defense": 96,
      "speed": 70
    }
  },
  165: {
    "identifier": "ledyba",
    "height": 10,
    "weight": 108,
    "base_experience": 53,
    "name": {
      "fr": "Coxy",
      "en": "Ledyba",
      "jp": "レディバ "
    },
    "type": [
      "bug",
      "flying"
    ],
    "type_fr": [
      "Insecte",
      "Vol"
    ],
    "type_color": [
      "#A6B91A",
      "#A98FF3"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      166
    ],
    "stats": {
      "hp": 40,
      "attack": 20,
      "defense": 30,
      "special_attack": 40,
      "special_defense": 80,
      "speed": 55
    }
  },
  166: {
    "identifier": "ledian",
    "height": 14,
    "weight": 356,
    "base_experience": 137,
    "name": {
      "fr": "Coxyclaque",
      "en": "Ledian",
      "jp": "レディアン "
    },
    "type": [
      "bug",
      "flying"
    ],
    "type_fr": [
      "Insecte",
      "Vol"
    ],
    "type_color": [
      "#A6B91A",
      "#A98FF3"
    ],
    "evolutions_pre": [
      165
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 55,
      "attack": 35,
      "defense": 50,
      "special_attack": 55,
      "special_defense": 110,
      "speed": 85
    }
  },
  167: {
    "identifier": "spinarak",
    "height": 5,
    "weight": 85,
    "base_experience": 50,
    "name": {
      "fr": "Mimigal",
      "en": "Spinarak",
      "jp": "イトマル "
    },
    "type": [
      "bug",
      "poison"
    ],
    "type_fr": [
      "Insecte",
      "Poison"
    ],
    "type_color": [
      "#A6B91A",
      "#A33EA1"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      168
    ],
    "stats": {
      "hp": 40,
      "attack": 60,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 30
    }
  },
  168: {
    "identifier": "ariados",
    "height": 11,
    "weight": 335,
    "base_experience": 137,
    "name": {
      "fr": "Migalos",
      "en": "Ariados",
      "jp": "アリアドス"
    },
    "type": [
      "bug",
      "poison"
    ],
    "type_fr": [
      "Insecte",
      "Poison"
    ],
    "type_color": [
      "#A6B91A",
      "#A33EA1"
    ],
    "evolutions_pre": [
      167
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 40
    }
  },
  169: {
    "identifier": "crobat",
    "height": 18,
    "weight": 750,
    "base_experience": 241,
    "name": {
      "fr": "Nostenfer",
      "en": "Crobat",
      "jp": "クロバット"
    },
    "type": [
      "poison",
      "flying"
    ],
    "type_fr": [
      "Poison",
      "Vol"
    ],
    "type_color": [
      "#A33EA1",
      "#A98FF3"
    ],
    "evolutions_pre": [
      41,
      42
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 85,
      "attack": 90,
      "defense": 80,
      "special_attack": 70,
      "special_defense": 80,
      "speed": 130
    }
  },
  170: {
    "identifier": "chinchou",
    "height": 5,
    "weight": 120,
    "base_experience": 66,
    "name": {
      "fr": "Loupio",
      "en": "Chinchou",
      "jp": "チョンチー"
    },
    "type": [
      "water",
      "electric"
    ],
    "type_fr": [
      "Eau",
      "Électrique"
    ],
    "type_color": [
      "#6390F0",
      "#F7D02C"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      171
    ],
    "stats": {
      "hp": 75,
      "attack": 38,
      "defense": 38,
      "special_attack": 56,
      "special_defense": 56,
      "speed": 67
    }
  },
  171: {
    "identifier": "lanturn",
    "height": 12,
    "weight": 225,
    "base_experience": 161,
    "name": {
      "fr": "Lanturn",
      "en": "Lanturn",
      "jp": "ランターン"
    },
    "type": [
      "water",
      "electric"
    ],
    "type_fr": [
      "Eau",
      "Électrique"
    ],
    "type_color": [
      "#6390F0",
      "#F7D02C"
    ],
    "evolutions_pre": [
      170
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 125,
      "attack": 58,
      "defense": 58,
      "special_attack": 76,
      "special_defense": 76,
      "speed": 67
    }
  },
  172: {
    "identifier": "pichu",
    "height": 3,
    "weight": 20,
    "base_experience": 41,
    "name": {
      "fr": "Pichu",
      "en": "Pichu",
      "jp": "ピチュー"
    },
    "type": [
      "electric"
    ],
    "type_fr": [
      "Électrique"
    ],
    "type_color": [
      "#F7D02C"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      25,
      26
    ],
    "stats": {
      "hp": 20,
      "attack": 40,
      "defense": 15,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 60
    }
  },
  173: {
    "identifier": "cleffa",
    "height": 3,
    "weight": 30,
    "base_experience": 44,
    "name": {
      "fr": "Mélo",
      "en": "Cleffa",
      "jp": "ピィ"
    },
    "type": [
      "fairy"
    ],
    "type_fr": [
      "Fée"
    ],
    "type_color": [
      "#D685AD"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      35,
      36
    ],
    "stats": {
      "hp": 50,
      "attack": 25,
      "defense": 28,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 15
    }
  },
  174: {
    "identifier": "igglybuff",
    "height": 3,
    "weight": 10,
    "base_experience": 42,
    "name": {
      "fr": "Toudoudou",
      "en": "Igglybuff",
      "jp": "ププリン "
    },
    "type": [
      "normal",
      "fairy"
    ],
    "type_fr": [
      "Normal",
      "Fée"
    ],
    "type_color": [
      "#A8A77A",
      "#D685AD"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      39,
      40
    ],
    "stats": {
      "hp": 90,
      "attack": 30,
      "defense": 15,
      "special_attack": 40,
      "special_defense": 20,
      "speed": 15
    }
  },
  175: {
    "identifier": "togepi",
    "height": 3,
    "weight": 15,
    "base_experience": 49,
    "name": {
      "fr": "Togepi",
      "en": "Togepi",
      "jp": "トゲピー"
    },
    "type": [
      "fairy"
    ],
    "type_fr": [
      "Fée"
    ],
    "type_color": [
      "#D685AD"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      176,
      468
    ],
    "stats": {
      "hp": 35,
      "attack": 20,
      "defense": 65,
      "special_attack": 40,
      "special_defense": 65,
      "speed": 20
    }
  },
  176: {
    "identifier": "togetic",
    "height": 6,
    "weight": 32,
    "base_experience": 142,
    "name": {
      "fr": "Togetic",
      "en": "Togetic",
      "jp": "トゲチック"
    },
    "type": [
      "fairy",
      "flying"
    ],
    "type_fr": [
      "Fée",
      "Vol"
    ],
    "type_color": [
      "#D685AD",
      "#A98FF3"
    ],
    "evolutions_pre": [
      175
    ],
    "evolutions_next": [
      468
    ],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 85,
      "special_attack": 80,
      "special_defense": 105,
      "speed": 40
    }
  },
  177: {
    "identifier": "natu",
    "height": 2,
    "weight": 20,
    "base_experience": 64,
    "name": {
      "fr": "Natu",
      "en": "Natu",
      "jp": "ネイティ"
    },
    "type": [
      "psychic",
      "flying"
    ],
    "type_fr": [
      "Psy",
      "Vol"
    ],
    "type_color": [
      "#F95587",
      "#A98FF3"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      178
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 45,
      "special_attack": 70,
      "special_defense": 45,
      "speed": 70
    }
  },
  178: {
    "identifier": "xatu",
    "height": 15,
    "weight": 150,
    "base_experience": 165,
    "name": {
      "fr": "Xatu",
      "en": "Xatu",
      "jp": "ネイティオ"
    },
    "type": [
      "psychic",
      "flying"
    ],
    "type_fr": [
      "Psy",
      "Vol"
    ],
    "type_color": [
      "#F95587",
      "#A98FF3"
    ],
    "evolutions_pre": [
      177
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 70,
      "special_attack": 95,
      "special_defense": 70,
      "speed": 95
    }
  },
  179: {
    "identifier": "mareep",
    "height": 6,
    "weight": 78,
    "base_experience": 56,
    "name": {
      "fr": "Wattouat",
      "en": "Mareep",
      "jp": "メリープ"
    },
    "type": [
      "electric"
    ],
    "type_fr": [
      "Électrique"
    ],
    "type_color": [
      "#F7D02C"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      180,
      181
    ],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 40,
      "special_attack": 65,
      "special_defense": 45,
      "speed": 35
    }
  },
  180: {
    "identifier": "flaaffy",
    "height": 8,
    "weight": 133,
    "base_experience": 128,
    "name": {
      "fr": "Lainergie",
      "en": "Flaaffy",
      "jp": "モココ"
    },
    "type": [
      "electric"
    ],
    "type_fr": [
      "Électrique"
    ],
    "type_color": [
      "#F7D02C"
    ],
    "evolutions_pre": [
      179
    ],
    "evolutions_next": [
      181
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "special_attack": 80,
      "special_defense": 60,
      "speed": 45
    }
  },
  181: {
    "identifier": "ampharos",
    "height": 14,
    "weight": 615,
    "base_experience": 230,
    "name": {
      "fr": "Pharamp",
      "en": "Ampharos",
      "jp": "デンリュウ"
    },
    "type": [
      "electric"
    ],
    "type_fr": [
      "Électrique"
    ],
    "type_color": [
      "#F7D02C"
    ],
    "evolutions_pre": [
      179,
      180
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 85,
      "special_attack": 115,
      "special_defense": 90,
      "speed": 55
    }
  },
  182: {
    "identifier": "bellossom",
    "height": 4,
    "weight": 58,
    "base_experience": 221,
    "name": {
      "fr": "Joliflor",
      "en": "Bellossom",
      "jp": "キレイハナ"
    },
    "type": [
      "grass"
    ],
    "type_fr": [
      "Plante"
    ],
    "type_color": [
      "#7AC74C"
    ],
    "evolutions_pre": [
      43,
      44
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 95,
      "special_attack": 90,
      "special_defense": 100,
      "speed": 50
    }
  },
  183: {
    "identifier": "marill",
    "height": 4,
    "weight": 85,
    "base_experience": 88,
    "name": {
      "fr": "Marill",
      "en": "Marill",
      "jp": "マリル"
    },
    "type": [
      "water",
      "fairy"
    ],
    "type_fr": [
      "Eau",
      "Fée"
    ],
    "type_color": [
      "#6390F0",
      "#D685AD"
    ],
    "evolutions_pre": [
      298
    ],
    "evolutions_next": [
      184
    ],
    "stats": {
      "hp": 70,
      "attack": 20,
      "defense": 50,
      "special_attack": 20,
      "special_defense": 50,
      "speed": 40
    }
  },
  184: {
    "identifier": "azumarill",
    "height": 8,
    "weight": 285,
    "base_experience": 189,
    "name": {
      "fr": "Azumarill",
      "en": "Azumarill",
      "jp": "マリルリ"
    },
    "type": [
      "water",
      "fairy"
    ],
    "type_fr": [
      "Eau",
      "Fée"
    ],
    "type_color": [
      "#6390F0",
      "#D685AD"
    ],
    "evolutions_pre": [
      298,
      183
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 100,
      "attack": 50,
      "defense": 80,
      "special_attack": 60,
      "special_defense": 80,
      "speed": 50
    }
  },
  185: {
    "identifier": "sudowoodo",
    "height": 12,
    "weight": 380,
    "base_experience": 144,
    "name": {
      "fr": "Simularbre",
      "en": "Sudowoodo",
      "jp": "ウソッキー"
    },
    "type": [
      "rock"
    ],
    "type_fr": [
      "Roche"
    ],
    "type_color": [
      "#B6A136"
    ],
    "evolutions_pre": [
      438
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "special_attack": 30,
      "special_defense": 65,
      "speed": 30
    }
  },
  186: {
    "identifier": "politoed",
    "height": 11,
    "weight": 339,
    "base_experience": 225,
    "name": {
      "fr": "Tarpaud",
      "en": "Politoed",
      "jp": "ニョロトノ "
    },
    "type": [
      "water"
    ],
    "type_fr": [
      "Eau"
    ],
    "type_color": [
      "#6390F0"
    ],
    "evolutions_pre": [
      60,
      61
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 75,
      "special_attack": 90,
      "special_defense": 100,
      "speed": 70
    }
  },
  187: {
    "identifier": "hoppip",
    "height": 4,
    "weight": 5,
    "base_experience": 50,
    "name": {
      "fr": "Granivol",
      "en": "Hoppip",
      "jp": "ハネッコ"
    },
    "type": [
      "grass",
      "flying"
    ],
    "type_fr": [
      "Plante",
      "Vol"
    ],
    "type_color": [
      "#7AC74C",
      "#A98FF3"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      188,
      189
    ],
    "stats": {
      "hp": 35,
      "attack": 35,
      "defense": 40,
      "special_attack": 35,
      "special_defense": 55,
      "speed": 50
    }
  },
  188: {
    "identifier": "skiploom",
    "height": 6,
    "weight": 10,
    "base_experience": 119,
    "name": {
      "fr": "Floravol",
      "en": "Skiploom",
      "jp": "ポポッコ"
    },
    "type": [
      "grass",
      "flying"
    ],
    "type_fr": [
      "Plante",
      "Vol"
    ],
    "type_color": [
      "#7AC74C",
      "#A98FF3"
    ],
    "evolutions_pre": [
      187
    ],
    "evolutions_next": [
      189
    ],
    "stats": {
      "hp": 55,
      "attack": 45,
      "defense": 50,
      "special_attack": 45,
      "special_defense": 65,
      "speed": 80
    }
  },
  189: {
    "identifier": "jumpluff",
    "height": 8,
    "weight": 30,
    "base_experience": 207,
    "name": {
      "fr": "Cotovol",
      "en": "Jumpluff",
      "jp": "ワタッコ"
    },
    "type": [
      "grass",
      "flying"
    ],
    "type_fr": [
      "Plante",
      "Vol"
    ],
    "type_color": [
      "#7AC74C",
      "#A98FF3"
    ],
    "evolutions_pre": [
      187,
      188
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 75,
      "attack": 55,
      "defense": 70,
      "special_attack": 55,
      "special_defense": 95,
      "speed": 110
    }
  },
  190: {
    "identifier": "aipom",
    "height": 8,
    "weight": 115,
    "base_experience": 72,
    "name": {
      "fr": "Capumain",
      "en": "Aipom",
      "jp": "エイパム"
    },
    "type": [
      "normal"
    ],
    "type_fr": [
      "Normal"
    ],
    "type_color": [
      "#A8A77A"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      424
    ],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 55,
      "special_attack": 40,
      "special_defense": 55,
      "speed": 85
    }
  },
  191: {
    "identifier": "sunkern",
    "height": 3,
    "weight": 18,
    "base_experience": 36,
    "name": {
      "fr": "Tournegrin",
      "en": "Sunkern",
      "jp": "ヒマナッツ"
    },
    "type": [
      "grass"
    ],
    "type_fr": [
      "Plante"
    ],
    "type_color": [
      "#7AC74C"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      192
    ],
    "stats": {
      "hp": 30,
      "attack": 30,
      "defense": 30,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 30
    }
  },
  192: {
    "identifier": "sunflora",
    "height": 8,
    "weight": 85,
    "base_experience": 149,
    "name": {
      "fr": "Héliatronc",
      "en": "Sunflora",
      "jp": "キマワリ "
    },
    "type": [
      "grass"
    ],
    "type_fr": [
      "Plante"
    ],
    "type_color": [
      "#7AC74C"
    ],
    "evolutions_pre": [
      191
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 55,
      "special_attack": 105,
      "special_defense": 85,
      "speed": 30
    }
  },
  193: {
    "identifier": "yanma",
    "height": 12,
    "weight": 380,
    "base_experience": 78,
    "name": {
      "fr": "Yanma",
      "en": "Yanma",
      "jp": "ヤンヤンマ "
    },
    "type": [
      "bug",
      "flying"
    ],
    "type_fr": [
      "Insecte",
      "Vol"
    ],
    "type_color": [
      "#A6B91A",
      "#A98FF3"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      469
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 45,
      "special_attack": 75,
      "special_defense": 45,
      "speed": 95
    }
  },
  194: {
    "identifier": "wooper",
    "height": 4,
    "weight": 85,
    "base_experience": 42,
    "name": {
      "fr": "Axoloto",
      "en": "Wooper",
      "jp": "ウパー"
    },
    "type": [
      "water",
      "ground"
    ],
    "type_fr": [
      "Eau",
      "Sol"
    ],
    "type_color": [
      "#6390F0",
      "#E2BF65"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      195
    ],
    "stats": {
      "hp": 55,
      "attack": 45,
      "defense": 45,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 15
    }
  },
  195: {
    "identifier": "quagsire",
    "height": 14,
    "weight": 750,
    "base_experience": 151,
    "name": {
      "fr": "Maraiste",
      "en": "Quagsire",
      "jp": "ヌオー"
    },
    "type": [
      "water",
      "ground"
    ],
    "type_fr": [
      "Eau",
      "Sol"
    ],
    "type_color": [
      "#6390F0",
      "#E2BF65"
    ],
    "evolutions_pre": [
      194
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 95,
      "attack": 85,
      "defense": 85,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 35
    }
  },
  196: {
    "identifier": "espeon",
    "height": 9,
    "weight": 265,
    "base_experience": 184,
    "name": {
      "fr": "Mentali",
      "en": "Espeon",
      "jp": "エーフィ"
    },
    "type": [
      "psychic"
    ],
    "type_fr": [
      "Psy"
    ],
    "type_color": [
      "#F95587"
    ],
    "evolutions_pre": [
      133
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "special_attack": 130,
      "special_defense": 95,
      "speed": 110
    }
  },
  197: {
    "identifier": "umbreon",
    "height": 10,
    "weight": 270,
    "base_experience": 184,
    "name": {
      "fr": "Noctali",
      "en": "Umbreon",
      "jp": "ブラッキー"
    },
    "type": [
      "dark"
    ],
    "type_fr": [
      "Ténèbres"
    ],
    "type_color": [
      "#705746"
    ],
    "evolutions_pre": [
      133
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 110,
      "special_attack": 60,
      "special_defense": 130,
      "speed": 65
    }
  },
  198: {
    "identifier": "murkrow",
    "height": 5,
    "weight": 21,
    "base_experience": 81,
    "name": {
      "fr": "Cornèbre",
      "en": "Murkrow",
      "jp": "ヤミカラス "
    },
    "type": [
      "dark",
      "flying"
    ],
    "type_fr": [
      "Ténèbres",
      "Vol"
    ],
    "type_color": [
      "#705746",
      "#A98FF3"
    ],
    "evolutions_pre": [],
    "evolutions_next": [
      430
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 42,
      "special_attack": 85,
      "special_defense": 42,
      "speed": 91
    }
  },
  199: {
    "identifier": "slowking",
    "height": 20,
    "weight": 795,
    "base_experience": 172,
    "name": {
      "fr": "Roigada",
      "en": "Slowking",
      "jp": "ヤドキング"
    },
    "type": [
      "water",
      "psychic"
    ],
    "type_fr": [
      "Eau",
      "Psy"
    ],
    "type_color": [
      "#6390F0",
      "#F95587"
    ],
    "evolutions_pre": [
      79
    ],
    "evolutions_next": [],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 80,
      "special_attack": 100,
      "special_defense": 110,
      "speed": 30
    }
  }
}