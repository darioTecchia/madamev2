import { EMenuKind, ICombinedMenu, IMenu, ITastingMenu } from "@/models/menu";

interface IDB {
  menus: (IMenu | ITastingMenu | ICombinedMenu)[]
}

const DB: IDB = {
  menus: [
    {
      id: "caffetteria",
      name: "Caffetteria",
      href: "/menu/caffetteria",
      kind: EMenuKind.Simple,
      items: [
        {
          name: "San Bitter",
          price: 3,
          description: "Analcolico dal gusto amaro e rinfrescante, servito con ghiaccio e fetta d'arancia.",
        },
        {
          name: "Crodino",
          price: 3.5,
          description: "Aperitivo analcolico dal gusto dolce-amaro con note di arancia e erbe aromatiche.",
        },
        {
          name: "Crodino Twist",
          price: 4,
          description: "Variante del classico Crodino con un tocco di agrumi e spezie.",
        },
        {
          name: "Campari soda",
          price: 3.5,
          description: "Iconico aperitivo italiano, dal gusto amaro e rinfrescante.",
        },
        {
          name: "Tassoni cedrata",
          price: 3,
          description: "Bevanda analcolica a base di cedro, dal gusto dolce e agrumato.",
        },
        {
          name: "Cocktail San Pellegrino",
          price: 3,
          description: "Mix rinfrescante di succhi di frutta e acqua frizzante San Pellegrino.",
        }
      ]
    },
    {
      id: "gin-list",
      name: "Gin List",
      href: "/menu/gin-list",
      kind: EMenuKind.Combined,
      items: [
        {
          name: "Tanqueray",
          description: "London Dry classico con note di ginepro pronunciate",
          notes: ["Ginepro", "Coriandolo", "Angelica"],
          price: 5,
          origin: "UK",
        },
        {
          name: "Bombay Sapphire",
          description: "Delicato e aromatico con 10 botaniche",
          notes: ["Ginepro", "Limone", "Mandorla"],
          price: 5,
          origin: "UK",
        },
        {
          name: "Bulldog",
          description: "Moderno e morbido con note esotiche",
          notes: ["Loto", "Lavanda", "Papavero"],
          price: 5,
          origin: "UK",
        },
        {
          name: "Acque verdi",
          description: "Gin italiano con botaniche mediterranee",
          notes: ["Rosmarino", "Timo", "Limone"],
          price: 6,
          origin: "Italia",
        },
        {
          name: "Malfy Limone",
          description: "Gin italiano con limoni della costiera amalfitana",
          notes: ["Limone", "Ginepro", "Agrumi"],
          price: 6,
          origin: "Italia",
        },
        {
          name: "Malfy Pompelmo",
          description: "Fresco e agrumato con pompelmo rosa siciliano",
          notes: ["Pompelmo", "Ginepro", "Rabarbaro"],
          price: 6,
          origin: "Italia",
        },
        {
          name: "Hendrick's",
          description: "Unico con infusione di cetriolo e petali di rosa",
          notes: ["Cetriolo", "Rosa", "Ginepro"],
          price: 6,
          origin: "Scozia",
        },
        {
          name: "Nordes",
          description: "Gin galiziano con uva albariño",
          notes: ["Uva", "Eucalipto", "Alloro"],
          price: 6,
          origin: "Spagna",
        },
        {
          name: "Tanqueray 10",
          description: "Premium con agrumi freschi interi",
          notes: ["Pompelmo", "Arancia", "Lime"],
          price: 6,
          origin: "UK",
        },
        {
          name: "Citadelle",
          description: "Francese con 19 botaniche, delicato ed elegante",
          notes: ["Violetta", "Anice", "Cannella"],
          price: 6,
          origin: "Francia",
        },
        {
          name: "Plymouth",
          description: "Stile Navy Strength, robusto e intenso",
          notes: ["Ginepro", "Cardamomo", "Arancia"],
          price: 6,
          origin: "UK",
        },
        {
          name: "Gin n° 3 London Dry",
          description: "Tre frutti, tre spezie, perfettamente bilanciato",
          notes: ["Ginepro", "Cardamomo", "Pompelmo"],
          price: 6,
          origin: "Olanda",
        },
      ],
      additionalItems: [
        {
          name: "Schweppes Premium",
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
      href: "/menu/la-via-del-rum",
      kind: EMenuKind.Tasting,
      price: 20,
      description: "Degustazione di 3 rum da 25 ml accompagnato da frutta secca e cioccolato fondente.",
      items: [
        {
          name: "Brugal 1888 Doblemente Añejado",
          age: "6-8 anni",
          origin: "Repubblica Dominicana",
          description:
            "Un rum premium invecchiato prima in botti di rovere americano e poi in botti ex-sherry. Questo doppio invecchiamento conferisce al distillato una complessità e una morbidezza straordinarie.",
          notes: ["Cioccolato", "Caffè", "Frutta secca", "Vaniglia", "Legno"],
        },
        {
          name: "J. Bally 7 Agricole",
          age: "7 anni",
          origin: "Martinica",
          description:
            "Un rhum agricole prodotto dal succo di canna da zucchero fresco anziché dalla melassa. Questo metodo di produzione, tipico della Martinica, conferisce al distillato un carattere erbaceo e terroso unico.",
          notes: ["Canna da zucchero", "Erbe", "Spezie", "Agrumi", "Pepe"],
        },
        {
          name: "Hampden Estate 8",
          age: "8 anni",
          origin: "Giamaica",
          description:
            "Un rum giamaicano prodotto con metodi tradizionali che risalgono al XVIII secolo. Famoso per il suo alto contenuto di esteri, offre un profilo aromatico intenso e complesso.",
          notes: ["Frutta tropicale", "Banana", "Ananas", "Spezie", "Funk giamaicano"],
        },
      ]
    },
  ]
}

export default DB;