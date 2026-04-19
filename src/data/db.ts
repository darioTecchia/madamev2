import { MenuType, Menu } from '@/models/menu';

interface IDB {
  menus: Menu[];
}

const DB: IDB = {
  menus: [
    {
      id: 'caffetteria',
      name: 'Caffetteria',
      type: MenuType.Simple,
      description: 'Aperta fino alle 21:00 - Coffee Bar fino alle 21:00.',
      items: [
        { name: 'Caffè espresso', price: 2 },
        { name: 'Caffè americano', price: 2.5 },
        { name: 'Caffè shakerato', price: 3.5 },
        { name: 'Cappuccino', price: 2.5 },
        { name: 'Latte macchiato', price: 3 },
        { name: "Spremuta d'arancia", price: 4 },
        { name: 'Spremuta di limone', price: 4 },
        { name: 'Succhi di frutta', price: 3 },
        { name: 'Ginseng', size: 'Tazza piccola', price: 2 },
        { name: 'Ginseng', size: 'Tazza grande', price: 4 },
        { name: 'Orzo', size: 'Tazza piccola', price: 2 },
        { name: 'Orzo', size: 'Tazza grande', price: 4 },
      ],
    },
    {
      id: 'birre',
      name: 'Birre',
      type: MenuType.Simple,
      items: [
        { name: 'Ichnusa non filtrata', size: '0,5 l', price: 5 },
        { name: 'Peroni alla spina', size: '0,2 l', price: 3 },
        { name: 'Peroni alla spina', size: '0,4 l', price: 6 },
        { name: 'Nastro Azzurro', price: 3 },
        { name: 'Heineken', price: 3.5 },
        { name: "Beck's", price: 3.5 },
        { name: 'Ceres', price: 4 },
        { name: 'Corona', price: 4 },
        { name: 'Leffe bionda', price: 5 },
        { name: 'Leffe rossa', price: 5 },
        { name: "Tennent's", price: 4 },
        { name: 'Weissbier', size: '0,5 l', price: 5 },
        { name: 'Ipa', price: 6 },
      ],
    },
    {
      id: 'aperitivi',
      name: 'Aperitivi',
      type: MenuType.Simple,
      items: [
        { name: 'San Bitter', price: 4 },
        { name: 'Crodino', price: 4 },
        { name: 'Crodino Twist', price: 4 },
        { name: 'Campari Soda', price: 4 },
        { name: 'Cedrata Tassoni', price: 4 },
        { name: 'Cocktail San Pellegrino', price: 4 },
      ],
    },
    {
      id: 'spritz-classici',
      name: 'Spritz & Classici',
      type: MenuType.Simple,
      items: [
        { name: 'Aperol Spritz', price: 8 },
        { name: 'Campari Spritz', price: 8 },
        { name: 'Limoncello Spritz', price: 8 },
        { name: 'Americano', price: 8 },
        { name: 'Negroni', price: 8 },
        { name: 'Calice Prosecco DOC', price: 5 },
        { name: 'Calice Dubl Brut (Feudi di San Gregorio)', price: 9 },
      ],
    },
    {
      id: 'cocktails-classici',
      name: 'Cocktail Classici',
      type: MenuType.Simple,
      description: 'Tutti i cocktail sono serviti a € 9,00',
      items: [
        {
          name: 'Daiquiri',
          price: 9,
          description:
            'Rum bianco Plantation 3 Stars, lime, sciroppo di zucchero',
        },
        {
          name: 'Margarita',
          price: 9,
          description: 'Tequila Blanco, Cointreau, lime',
        },
        {
          name: 'Caipirinha',
          price: 9,
          description: 'Cachaça, lime, zucchero',
        },
        {
          name: 'Mai Tai',
          price: 9,
          description: 'Mix di Rum, lime, Orange Curaçao, orzata',
        },
        {
          name: 'Gin Basil Smash',
          price: 9,
          description: 'Bulldog Gin, basilico, limone, zucchero',
        },
        {
          name: 'South Side',
          price: 9,
          description: 'Bulldog Gin, menta, lime, zucchero',
        },
        {
          name: 'Cosmopolitan',
          price: 9,
          description: 'Vodka al limone, Cointreau, succo di cranberry, lime',
        },
        {
          name: 'Pornstar Martini',
          price: 9,
          description:
            'Vodka alla vaniglia, Passoã, lime, passion fruit, zucchero',
        },
        {
          name: 'Espresso Martini',
          price: 9,
          description: 'Vodka alla vaniglia, Kahlúa, caffè espresso, zucchero',
        },
        {
          name: 'Clover Club',
          price: 9,
          description: "Nordés Gin, limone, sciroppo di lamponi, albume d'uovo",
        },
        {
          name: 'Whiskey Sour',
          price: 9,
          description:
            "Bulleit Bourbon, limone, zucchero, angostura bitters, albume d'uovo",
        },
        {
          name: 'Boulevardier',
          price: 9,
          description:
            "Maker's Mark Bourbon, Campari, Vermouth Carpano Antica Formula",
        },
        {
          name: 'Paloma',
          price: 9,
          description: 'Tequila Blanco, lime, soda al pompelmo rosa, sale',
        },
        {
          name: 'Old Cuban',
          price: 9,
          description:
            'Havana Club 7 Años, lime, zucchero muscovado, menta, angostura bitters, prosecco',
        },
        {
          name: 'Naked & Famous',
          price: 9,
          description:
            'Mezcal Nuestra Soledad, Aperol, lime, Chartreuse giallo',
        },
        {
          name: 'Paper Plane',
          price: 9,
          description: 'Bulleit Bourbon, Aperol, limone, Amaro Nonino',
        },
        {
          name: 'Manhattan',
          price: 9,
          description:
            'Bulleit Rye Whiskey, Vermouth Cocchi Rosso, angostura bitters',
        },
        {
          name: 'Old Fashioned',
          price: 9,
          description: "Maker's Mark, zucchero, angostura bitters",
        },
        {
          name: 'Penicillin',
          price: 9,
          description:
            'Johnnie Walker Black Label, limone, miele allo zenzero, Laphroaig 10',
        },
        {
          name: 'Limoncello Fizz',
          price: 9,
          description:
            'Bulldog Gin, limoncello, succo di limone, basilico, soda',
        },
        {
          name: 'Mosquito',
          price: 9,
          description:
            'Mezcal Nuestra Soledad, Campari, succo di limone, sciroppo allo zenzero',
        },
        {
          name: 'Suffering Bastard',
          price: 9,
          description:
            'Cognac, Tanqueray Gin, succo di lime, angostura bitters, ginger beer',
        },
      ],
    },
    {
      id: 'gin-list',
      name: 'Gin List',
      type: MenuType.Combined,
      items: [
        // € 6 Tier
        { name: 'Tanqueray', price: 6, origin: 'gb' },
        { name: 'Bombay Sapphire', price: 6, origin: 'gb' },
        { name: 'Bulldog', price: 6, origin: 'gb' },
        // € 7 Tier
        { name: 'Sabatini', price: 7, origin: 'it' },
        { name: "Hendrick's", price: 7, origin: 'gb' },
        { name: 'Nordés', price: 7, origin: 'es' },
        { name: 'Tanqueray 10', price: 7, origin: 'gb' },
        { name: 'Aviation', price: 7, origin: 'us' },
        { name: 'Plymouth', price: 7, origin: 'gb' },
        { name: 'N°3 London Dry', price: 7, origin: 'nl' },
        { name: 'Fifty Pounds', price: 7, origin: 'gb' },
        // € 8 Tier
        { name: 'Gunpowder Irish Gin', price: 8, origin: 'ie' },
        { name: 'Gin Mare', price: 8, origin: 'es' },
        { name: "Bobby's", price: 8, origin: 'nl' },
        { name: 'Cotswolds', price: 8, origin: 'gb' },
        { name: 'Etna', price: 8, origin: 'it' },
        { name: 'Brockmans', price: 8, origin: 'gb' },
        { name: 'Roku', price: 8, origin: 'jp' },
        // € 9 Tier
        { name: 'Elephant London Dry', price: 9, origin: 'de' },
        { name: 'Plymouth Navy Strength', price: 9, origin: 'gb' },
        { name: 'Monkey 47', price: 9, origin: 'de' },
      ],
      subMenus: [
        {
          name: 'Aggiungi la tua tonica',
          id: 'tonica',
          mainItemLabel: 'Scegli il gin',
          additionalItems: [
            { name: 'Schweppes Tonica', price: 2, size: '180 ml' },
            { name: 'Fever-Tree Indian', price: 3, size: '200 ml' },
            { name: 'Fever-Tree Mediterranea', price: 3, size: '200 ml' },
          ],
          additionalItemLabel: 'Aggiungi la tonica',
          overPrice: 0,
        },
        {
          name: 'Martini Cocktail',
          id: 'martini-cocktail',
          mainItemLabel: 'Scegli il gin per il tuo Martini',
          description:
            'Servito con olive o twist di limone. Il prezzo del cocktail varia in base al gin scelto (sovrapprezzo fisso di € 3).',
          overPrice: 3,
        },
      ],
    },
    {
      id: 'vodka-spirits',
      name: 'Vodka',
      type: MenuType.Combined,
      items: [
        { name: 'Stolichnaya', price: 5 },
        { name: 'Grey Goose', price: 6 },
        { name: 'Belvedere', price: 6 },
        { name: 'Altamura', price: 6 },
        { name: "Tito's", price: 7 },
      ],
      subMenus: [
        {
          name: 'Vodka Martini',
          id: 'vodka-martini',
          mainItemLabel: 'Scegli la Vodka',
          overPrice: 3,
        },
      ],
    },
    {
      id: 'rum-list',
      name: 'Rum',
      type: MenuType.Simple,
      items: [
        { name: 'Clément XO Agricole', origin: 'mq', price: 10 },
        { name: 'J. Bally 7', origin: 'mq', price: 9 },
        { name: 'Zacapa', origin: 'gt', price: 8 },
        { name: 'Hampden Estate 8', origin: 'jm', price: 8 },
        { name: 'La Hechicera', origin: 'co', price: 7 },
        { name: 'Brugal 1888', origin: 'do', price: 7 },
        { name: 'Havana Club 7', origin: 'cu', price: 6 },
        { name: 'Diplomatico', origin: 've', price: 6 },
        { name: 'Don Papa Baroko', origin: 'ph', price: 6 },
        { name: 'El Dorado 12', origin: 'gy', price: 6 },
      ],
    },
    {
      id: 'la-via-del-rum',
      name: 'La Via del Rum',
      type: MenuType.Tasting,
      price: 20,
      description:
        'Degustazione di 3 rum da 25 ml accompagnato da frutta secca e cioccolato fondente.',
      items: [
        { name: 'Brugal 1888 Doblemente Añejo', origin: 'do' },
        { name: 'J. Bally 7 Agricole', origin: 'mq' },
        { name: 'Hampden Estate 8', origin: 'jm' },
      ],
    },
    {
      id: 'whisky-list',
      name: 'Whisky & Spirits',
      type: MenuType.Simple,
      items: [
        { name: 'McCallan 12', price: 15 },
        { name: 'Lagavulin 16', price: 12 },
        { name: 'Port Charlotte Islay Barley', price: 15 },
        { name: 'McCallan Quest', price: 12 },
        { name: 'Oban 14', price: 10 },
        { name: 'Dalwhinnie 15 anni', price: 9 },
        { name: 'Cragganomore 12', price: 8 },
        { name: 'Talisker 10', price: 7 },
        { name: 'Laphroaig', price: 7 },
        { name: 'Johnny Walker Black Label', price: 5 },
        { name: "Michter's US 1 (Bourbon)", price: 10 },
        { name: "Maker's Mark (Bourbon)", price: 6 },
        { name: 'Bulleit (Bourbon)', price: 6 },
        { name: 'Woodford Reserve (Bourbon)', price: 6 },
        { name: 'Woodford Reserve (Rye)', price: 8 },
        { name: 'Bulleit (Rye)', price: 6 },
        { name: 'Connemara (Irish)', price: 8 },
        { name: 'Jameson (Irish)', price: 5 },
        { name: 'Nikka From The Barrel (Japanese)', price: 9 },
        { name: "Jack Daniel's (Tennessee)", price: 5 },
      ],
    },
    {
      id: 'water-of-life',
      name: 'Water of Life',
      type: MenuType.Tasting,
      price: 18,
      description:
        'Degustazione di 3 whisky da 25ml accompagnato da frutta secca e cioccolato fondente.',
      items: [
        { name: 'Cragganomore Speyside 12 YO' },
        { name: 'Woodford Reserve Rye Whisky' },
        { name: 'Port Charlotte Islay Barley' },
      ],
    },
    {
      id: 'tequila-mezcal',
      name: 'Tequila & Mezcal',
      type: MenuType.Simple,
      items: [
        { name: 'Josè Cuervo Silver', price: 4 },
        { name: 'Tequila 1800 Blanco', price: 6 },
        { name: 'Mezcal Nuestra Soledad', price: 6 },
        { name: 'Tequila 1800 Reposado', price: 7 },
        { name: 'Tequila 1800 Anejo', price: 7 },
        { name: 'Patron Silver', price: 7 },
        { name: 'Patròn Reposado', price: 8 },
        { name: 'Patròn Añejo', price: 9 },
        { name: 'Casamigos Blanco', price: 9 },
        { name: 'Casamigos Reposado', price: 9 },
        { name: 'Casamigos Añejo', price: 10 },
        { name: 'Mezcal Casamigos', price: 12 },
        { name: 'Clase Azul Reposado', price: 35 },
      ],
    },
    {
      id: 'wine-list-glass',
      name: 'Wine List (Al Calice)',
      type: MenuType.Simple,
      items: [
        { name: 'Falanghina', price: 4 },
        { name: 'Chardonnay', price: 5 },
        { name: 'Gewurztraminer', price: 5 },
        { name: 'Aglianico', price: 4 },
        { name: 'Primitivo', price: 5 },
        { name: 'Pinot Nero', price: 5 },
        { name: 'Prosecco DOC', price: 5 },
        { name: 'Metodo Classico Feudi di San Gregorio', price: 9 },
      ],
    },
    {
      id: 'dreamers-specialty',
      name: 'Dreamers',
      type: MenuType.Simple,
      items: [
        {
          name: 'La Cama',
          price: 12,
          description: 'Tequila 1800 Blanco, lime, peperone arrostito',
        },
        {
          name: 'Sweet Auburn',
          price: 12,
          description:
            'Bulleit Rye Whiskey, noce pecan, ratafià alle ciliegie, Vermouth Antica Formula, chocolate bitter',
        },
        {
          name: 'Reflex',
          price: 12,
          description:
            'Vodka Altamura, liquore al pan brioche, albicocca, spuma al caffè',
        },
        {
          name: 'Red Lipstick',
          price: 12,
          description: 'Cognac Hennessy, Chardonnay, fragole & panna, CO2',
        },
        {
          name: 'Macondo',
          price: 12,
          description: 'Rum Hechicera, mango, shrub alla birra IPA, CO2',
        },
        {
          name: 'Once Upon a Time',
          price: 12,
          description: 'Gin Bulldog, Calvados, Mastiha, limone, mela verde',
        },
      ],
    },
    {
      id: 'madame-specials',
      name: 'Madamè Specials',
      type: MenuType.Simple,
      items: [
        {
          name: 'Scalinatella',
          price: 12,
          description: 'Gin Bulldog, Biancosarti, cordiale agli agrumi, alloro',
        },
        {
          name: 'Old Penny',
          price: 12,
          description:
            "Maker's Mark Bourbon, grappa barricata, pera pennata, Fernet Branca",
        },
        {
          name: "Bella 'Mbriana",
          price: 12,
          description:
            'Vodka Altamura, amaro montenegro, lampone, latte alla cannella',
        },
        {
          name: 'Machete',
          price: 12,
          description: 'Pisco, Mezcal, ananas, jalapeno, lime',
        },
      ],
    },
    {
      id: 'analcolici-mocktails',
      name: 'Analcolici',
      type: MenuType.Simple,
      items: [
        {
          name: "Vento d'Estate",
          price: 8,
          description: 'Ananas, passion fruit, lime, soda',
        },
        {
          name: 'Purple Rain',
          price: 8,
          description: 'Lampone, lime, ginger beer',
        },
        {
          name: 'Lemon Tree',
          price: 8,
          description: 'Fragola, limonata, granita di limone',
        },
        {
          name: 'Bocca di Rosa',
          price: 8,
          description:
            'Mirtillo rosso, cordiale al pompelmo rosa e basilico, tonica Fever Tree',
        },
        {
          name: 'Kiss From A Rose',
          price: 8,
          description:
            'Non Alcoholic Tanqueray Gin 0.0, limone, rosa, miele allo zenzero',
        },
      ],
    },
  ],
};

export default DB;
