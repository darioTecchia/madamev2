import { EMenuKind, ICombinedMenu, IMenu, ITastingMenu } from "@/models/menu";

interface IDB {
  menus: (IMenu | ITastingMenu | ICombinedMenu)[]
}

const DB: IDB = {
  menus: [
    {
      id: "caffetteria",
      name: "Caffetteria",
      kind: EMenuKind.Simple,
      items: [
        {
          "name": "Caffè espresso",
          "price": 2,
        },
        {
          "name": "Caffè americano",
          "price": 2.5,
        },
        {
          "name": "Caffè shakerato",
          "price": 3.5,
        },
        {
          "name": "Cappuccino",
          "price": 2.5,
        },
        {
          "name": "Latte macchiato",
          "price": 3,
        },
        {
          "name": "Premuta d'arancia",
          "price": 4,
        },
        {
          "name": "Premuta di limone",
          "price": 4,
        },
        {
          "name": "Succhi di frutta",
          "price": 3,
        },
        {
          "name": "Ginseng",
          "price": 2,
          size: "Tazza piccola",
        },
        {
          "name": "Ginseng",
          size: "Tazza grande",
          "price": 4,
        },
        {
          "name": "Orzo",
          "price": 2,
          "size": "Tazza piccola",
        },
        {
          "name": "Orzo",
          "price": 4,
          "size": "Tazza grande",
        }
      ]
    },
    {
      id: "dolci-e-gelati",
      name: "Dolci e Gelati",
      kind: EMenuKind.Simple,
      items: [
        {
          name: "Babà al Rum",
          price: 4,
        },
        {
          name: "Crepes alla Nutella",
          price: 4,
        },
        {
          name: "Gelati Algida",
          price: 3,
        },
        {
          name: "Tartufo Bianco",
          price: 4,
        },
        {
          name: "Tartufo al Cioccolato",
          price: 4,
        },
        {
          name: "Pancake",
          price: 4
        }
      ]
    },
    {
      id: "birre",
      name: "Birre",
      kind: EMenuKind.Simple,
      description: "Una selezione di birre nazionali e internazionali, perfette per ogni occasione.",
      items: [
        {
          "name": "Menabrea",
          "price": 4,
          "description": "Birra lager italiana dal gusto bilanciato e leggermente amaro."
        },
        {
          "name": "Ichnusa non filtrata",
          size: "0,5 litri",
          "price": 5,
          "description": "Birra sarda non filtrata, dal corpo pieno e gusto rotondo."
        },
        {
          "name": "Peroni alla spina",
          size: "0,2 litri",
          "price": 3,
          "description": "Birra chiara alla spina, fresca e leggera, servita in piccolo formato."
        },
        {
          "name": "Peroni alla spina",
          size: "0,4 litri",
          "price": 6,
          "description": "Birra chiara alla spina in formato grande, dal gusto morbido."
        },
        {
          "name": "Nastro Azzurro",
          "price": 3,
          "description": "Birra premium italiana, secca e con finale amaro."
        },
        {
          "name": "Heineken",
          "price": 3.5,
          "description": "Birra olandese dal gusto equilibrato e rinfrescante."
        },
        {
          "name": "Beck's",
          "price": 3.5,
          "description": "Birra tedesca chiara, dal carattere secco e aroma luppolato."
        },
        {
          "name": "Ceres",
          "price": 4,
          "description": "Birra strong danese, dal gusto pieno e deciso."
        },
        {
          "name": "Corona",
          "price": 4,
          "description": "Birra messicana leggera, ideale con una fetta di lime."
        },
        {
          "name": "Leffe bionda",
          "price": 5,
          "description": "Birra belga d'abbazia, dolce e speziata, dal colore dorato."
        },
        {
          "name": "Leffe rossa",
          "price": 5,
          "description": "Birra rossa d’abbazia, con note caramellate e tostature leggere."
        },
        {
          "name": "Tennent's",
          "price": 4,
          "description": "Birra scozzese strong lager, intensa e corposa."
        },
        {
          "name": "Weissbier",
          "price": 5,
          "description": "Birra di frumento tedesca, dal gusto morbido e fruttato.",
          "size": "0,5 litri"
        },
        {
          "name": "Ipa",
          "price": 6,
          "description": "India Pale Ale, birra artigianale con forte luppolatura e note agrumate."
        }
      ]
    },
    {
      id: "aperitivi-classici",
      name: "Apertivi Classici",
      kind: EMenuKind.Simple,
      description: "Una selezione di aperitivi classici italiani, perfetti per iniziare la serata.",
      items: [
        {
          "name": "San Bitter",
          "price": 3,
          "description": "Aperitivo analcolico rosso, dal gusto amarognolo e rinfrescante."
        },
        {
          "name": "Crodino",
          "price": 3.5,
          "description": "Classico aperitivo analcolico dolce-amaro, ricco di erbe aromatiche."
        },
        {
          "name": "Crodino Twist",
          "price": 4,
          "description": "Variante fruttata del Crodino, con note di agrumi e spezie."
        },
        {
          "name": "Campari Soda",
          "price": 3.5,
          "description": "Iconico aperitivo alcolico, amaro e frizzante, pronto da servire."
        },
        {
          "name": "Tassoni Cedrata",
          "price": 3,
          "description": "Bevanda analcolica a base di cedro, fresca e piacevolmente agrumata."
        },
        {
          "name": "Cocktail San Pellegrino",
          "price": 3,
          "description": "Analcolico frizzante dal gusto agrodolce, con note fruttate."
        }
      ]
    },
    {
      id: "gin-list",
      name: "Gin List",
      kind: EMenuKind.Combined,
      items: [
        {
          name: "Tanqueray",
          description: "London Dry classico con note di ginepro pronunciate",
          notes: ["Ginepro", "Coriandolo", "Angelica"],
          price: 5,
          origin: "gb",
        },
        {
          name: "Bombay Sapphire",
          description: "Delicato e aromatico con 10 botaniche",
          notes: ["Ginepro", "Limone", "Mandorla"],
          price: 5,
          origin: "gb",
        },
        {
          name: "Bulldog",
          description: "Moderno e morbido con note esotiche",
          notes: ["Loto", "Lavanda", "Papavero"],
          price: 5,
          origin: "gb",
        },
        {
          name: "Acque verdi",
          description: "Gin italiano con botaniche mediterranee",
          notes: ["Rosmarino", "Timo", "Limone"],
          price: 6,
          origin: "it",
        },
        {
          name: "Malfy Limone",
          description: "Gin italiano con limoni della costiera amalfitana",
          notes: ["Limone", "Ginepro", "Agrumi"],
          price: 6,
          origin: "it",
        },
        {
          name: "Malfy Pompelmo",
          description: "Fresco e agrumato con pompelmo rosa siciliano",
          notes: ["Pompelmo", "Ginepro", "Rabarbaro"],
          price: 6,
          origin: "it",
        },
        {
          name: "Hendrick's",
          description: "Unico con infusione di cetriolo e petali di rosa",
          notes: ["Cetriolo", "Rosa", "Ginepro"],
          price: 6,
          origin: "gb",
        },
        {
          name: "Nordes",
          description: "Gin galiziano con uva albariño",
          notes: ["Uva", "Eucalipto", "Alloro"],
          price: 6,
          origin: "es",
        },
        {
          name: "Tanqueray 10",
          description: "Premium con agrumi freschi interi",
          notes: ["Pompelmo", "Arancia", "Lime"],
          price: 6,
          origin: "gb",
        },
        {
          name: "Citadelle",
          description: "Francese con 19 botaniche, delicato ed elegante",
          notes: ["Violetta", "Anice", "Cannella"],
          price: 6,
          origin: "fr",
        },
        {
          name: "Plymouth",
          description: "Stile Navy Strength, robusto e intenso",
          notes: ["Ginepro", "Cardamomo", "Arancia"],
          price: 6,
          origin: "gb",
        },
        {
          name: "Gin n° 3 London Dry",
          description: "Tre frutti, tre spezie, perfettamente bilanciato",
          notes: ["Ginepro", "Cardamomo", "Pompelmo"],
          price: 6,
          origin: "nl",
        },
      ],
      additionalItems: [
        {
          name: "Schweppes Tonica",
          description: "Classica, con bollicine fini",
          size: "180 ml",
          price: 2,
        },
        {
          name: "Fever-Tree Indian",
          description: "Con chinino naturale delle piantagioni",
          size: "200 ml",
          price: 3,
        },
        {
          name: "Fever-Tree Mediterranean",
          description: "Con note di timo e rosmarino",
          size: "200 ml",
          price: 3,
        },
      ]
    },
    {
      id: "la-via-del-rum",
      name: "La Via del Rum",
      kind: EMenuKind.Tasting,
      price: 20,
      description: "Degustazione di 3 rum da 25 ml accompagnato da frutta secca e cioccolato fondente.",
      items: [
        {
          name: "Brugal 1888 Doblemente Añejado",
          age: "6-8 anni",
          origin: "do",
          description:
            "Un rum premium invecchiato prima in botti di rovere americano e poi in botti ex-sherry. Questo doppio invecchiamento conferisce al distillato una complessità e una morbidezza straordinarie.",
          notes: ["Cioccolato", "Caffè", "Frutta secca", "Vaniglia", "Legno"],
        },
        {
          name: "J. Bally 7 Agricole",
          age: "7 anni",
          origin: "mq",
          description:
            "Un rhum agricole prodotto dal succo di canna da zucchero fresco anziché dalla melassa. Questo metodo di produzione, tipico della Martinica, conferisce al distillato un carattere erbaceo e terroso unico.",
          notes: ["Canna da zucchero", "Erbe", "Spezie", "Agrumi", "Pepe"],
        },
        {
          name: "Hampden Estate 8",
          age: "8 anni",
          origin: "jm",
          description:
            "Un rum giamaicano prodotto con metodi tradizionali che risalgono al XVIII secolo. Famoso per il suo alto contenuto di esteri, offre un profilo aromatico intenso e complesso.",
          notes: ["Frutta tropicale", "Banana", "Ananas", "Spezie", "Funk giamaicano"],
        },
      ]
    },
  ]
}

export default DB;