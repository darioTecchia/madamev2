import { MenuType, Menu, MenuHeader } from '@/models/menu';

export interface MenuItem {
  name: string;
  description?: string;
  price?: number;
  age?: string;
  origin?: string;
  notes?: string[];
  size?: string;
  allergens?: string[];
}

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
        { name: 'Caffè espresso', price: 2.0 },
        { name: 'Caffè americano', price: 2.5 },
        { name: 'Caffè shakerato', price: 3.5 },
        { name: 'Cappuccino', price: 2.5 },
        { name: 'Latte macchiato', price: 3.0 },
        { name: "Spremuta d'arancia", price: 4.0 },
        { name: 'Spremuta di limone', price: 4.0 },
        { name: 'Succhi di frutta', price: 3.0 },
        { name: 'Ginseng', size: 'Tazza piccola', price: 2.0 },
        { name: 'Ginseng', size: 'Tazza grande', price: 4.0 },
        { name: 'Orzo', size: 'Tazza piccola', price: 2.0 },
        { name: 'Orzo', size: 'Tazza grande', price: 4.0 },
      ],
    },
    {
      id: 'birre',
      name: 'Birre',
      type: MenuType.Simple,
      items: [
        { name: 'Ichnusa non filtrata', size: '0,5 l', price: 5.0 },
        { name: 'Peroni alla spina', size: '0,2 l', price: 3.0 },
        { name: 'Peroni alla spina', size: '0,4 l', price: 6.0 },
        { name: 'Nastro Azzurro', price: 3.0 },
        { name: 'Heineken', price: 3.5 },
        { name: "Beck's", price: 3.5 },
        { name: 'Ceres', price: 4.0 },
        { name: 'Corona', price: 4.0 },
        { name: 'Leffe bionda', price: 5.0 },
        { name: 'Leffe rossa', price: 5.0 },
        { name: "Tennent's", price: 4.0 },
        { name: 'Weissbier', size: '0,5 l', price: 5.0 },
        { name: 'Ipa', price: 6.0 },
      ],
    },
    {
      id: 'aperitivi-classici',
      name: 'Aperitivi & Spritz',
      type: MenuType.Simple,
      items: [
        { name: 'San Bitter', price: 4.0 },
        { name: 'Crodino', price: 4.0 },
        { name: 'Crodino Twist', price: 4.0 },
        { name: 'Campari Soda', price: 4.0 },
        { name: 'Cedrata Tassoni', price: 4.0 },
        { name: 'Cocktail San Pellegrino', price: 4.0 },
        { name: 'Aperol Spritz', price: 8.0 },
        { name: 'Campari Spritz', price: 8.0 },
        { name: 'Limoncello Spritz', price: 8.0 },
        { name: 'Americano', price: 8.0 },
        { name: 'Negroni', price: 8.0 },
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
          allergens: ['uova'],
        },
        {
          name: 'Whiskey Sour',
          price: 9,
          description:
            "Bulleit Bourbon, limone, zucchero, angostura bitters, albume d'uovo",
          allergens: ['uova'],
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
          name: 'Vodka',
          id: 'vodka',
          mainItemLabel: 'Vodka',
          overPrice: 0,
        },
        {
          name: 'Vodka Martini',
          id: 'vodka-martini',
          mainItemLabel: 'Scegli la Vodka per il tuo Martini',
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
      price: 15,
      description:
        'Degustazione di 3 rum da 25 ml accompagnato da frutta secca e cioccolato fondente.',
      items: [
        {
          name: 'Brugal 1888 Doblemente Añejado',
          origin: 'Repubblica Dominicana',
          description:
            'Un rum premium invecchiato prima in botti di rovere americano e poi in botti ex-sherry. Questo doppio invecchiamento conferisce una morbidezza straordinaria.',
          notes: ['Cioccolato', 'Caffè', 'Frutta secca', 'Vaniglia'],
        },
        {
          name: 'J. Bally 7 Agricole',
          origin: 'Martinica',
          description:
            'Prodotto dal succo di canna da zucchero fresco, offre un carattere erbaceo ed elegante tipico dei grandi rhum agricole.',
          notes: ['Canna da zucchero', 'Erbe', 'Spezie', 'Miele'],
        },
        {
          name: 'Hampden Estate 8',
          origin: 'Giamaica',
          description:
            'Famoso per il suo alto contenuto di esteri, è un rum intenso, selvaggio e ricchissimo di aromi tropicali.',
          notes: ['Frutta tropicale', 'Banana', 'Ananas', 'Funk giamaicano'],
        },
      ],
    },
    {
      id: 'whisky-list',
      name: 'Whisky',
      type: MenuType.Simple,
      description: 'La nostra selezione di distillati dal mondo.',
      items: [
        { name: 'SCOTCH' } as MenuHeader,
        {
          name: 'Macallan 12',
          price: 15,
          description:
            'Single Malt bilanciato con note di miele, agrumi e zenzero.',
        },
        {
          name: 'Lagavulin 16',
          price: 12,
          description:
            'Intensamente torbato, sapido e con un finale dolcemente affumicato.',
        },
        {
          name: 'Port Charlotte Islay Barley',
          price: 12,
          description:
            'Pesantemente torbato ma con una sorprendente nota floreale e marina.',
        },
        {
          name: 'Macallan Quest',
          price: 12,
          description:
            'Profilo fresco con note di mela, limone e vaniglia dolce.',
        },
        {
          name: 'Oban 14',
          price: 10,
          description:
            'Unione di dolcezza autunnale, leggero fumo e sale marino.',
        },
        {
          name: 'Dalwhinnie 15 Anni',
          price: 9,
          description: 'Estremamente morbido, con note di erica e miele.',
        },
        {
          name: 'Laphroaig',
          price: 7,
          description: 'Il classico torbato, medicinale e iodato di Islay.',
        },
        {
          name: 'Talisker 10',
          price: 7,
          description: 'Pungente di pepe nero, fumo e brezza marina.',
        },
        {
          name: 'Cragganomore 12',
          price: 8,
          description:
            'Complesso e fragrante con note di fiori dolci e un tocco di fumo.',
        },
        {
          name: 'Johnnie Walker Black Label',
          price: 5,
          description: 'Equilibrio perfetto tra fumo dolce e note fruttate.',
        },

        { name: 'BOURBON' } as MenuHeader,
        {
          name: 'Michter’s US 1',
          price: 10,
          description: 'Note ricche di caramello, vaniglia e frutta secca.',
        },
        {
          name: 'Maker’s Mark',
          price: 6,
          description: 'Morbido, con note di miele e burro.',
        },
        {
          name: 'Bulleit',
          price: 6,
          description: 'Speziato e pulito con un finale secco.',
        },
        {
          name: 'Woodford Reserve',
          price: 6,
          description: 'Complesso, con sentori di cacao e spezie dolci.',
        },

        { name: 'RYE' } as MenuHeader,
        {
          name: 'Woodford Reserve Rye',
          price: 8,
          description: 'Note di segale tostata, pepe nero e mela verde.',
        },
        {
          name: 'Bulleit Rye',
          price: 6,
          description: 'Estremamente secco con sentori di ciliegia e tabacco.',
        },

        { name: 'IRISH & JAPANESE' } as MenuHeader,
        {
          name: 'Connemara',
          price: 8,
          description: 'Irish Single Malt torbato, morbido e terroso.',
        },
        {
          name: 'Jameson',
          price: 5,
          description:
            'Tripla distillazione, note di vaniglia e legno tostato.',
        },
        {
          name: 'Nikka From The Barrel',
          price: 9,
          description: 'Blend giapponese intenso con note di quercia e spezie.',
        },
        {
          name: 'Jack Daniel’s',
          price: 5,
          description: 'Il classico Tennessee Whiskey, dolce e bilanciato.',
        },
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
        {
          name: 'Cragganomore Speyside 12 YO',
          description:
            'Un classico single malt dello Speyside, noto per il suo profilo complesso, ricco e delicatamente floreale.',
          notes: ['Miele', 'Fiori di campo', 'Malto'],
        },
        {
          name: 'Woodford Reserve Rye Whisky',
          description:
            'Un whiskey di segale che offre un equilibrio perfetto tra spezie audaci e note dolci di caramello.',
          notes: ['Spezie', 'Pepe nero', 'Cedro', 'Marzapane'],
        },
        {
          name: 'Port Charlotte Islay Barley',
          description:
            "Intensamente torbato ma con un'eleganza floreale data dall'orzo coltivato esclusivamente sull'isola di Islay.",
          notes: ['Torba intensa', 'Salsedine', 'Limone', 'Vaniglia'],
        },
      ],
    },
    {
      id: 'tequila-mezcal',
      name: 'Tequila & Mezcal',
      type: MenuType.Simple,
      items: [
        { name: 'TEQUILA' } as MenuHeader,
        {
          name: 'Josè Cuervo Silver',
          price: 4,
          description:
            'Tequila chiara dal sapore pulito, con fresche note agrumate e un leggero tocco di pepe nero.',
        },
        {
          name: 'Tequila 1800 Blanco',
          price: 6,
          description:
            'Ottenuta da 100% Agave Blu, si distingue per la sua morbidezza e i sentori di frutta bianca e spezie.',
        },
        {
          name: 'Tequila 1800 Reposado',
          price: 7,
          description:
            'Affinata in botti di rovere, offre note dolci di caramello, burro e scorza d’arancia.',
        },
        {
          name: 'Tequila 1800 Añejo',
          price: 7,
          description:
            'Invecchiata oltre un anno, presenta un profilo ricco con note di vaniglia, cioccolato fondente e rovere.',
        },
        {
          name: 'Patrón Silver',
          price: 7,
          description:
            'Tequila ultra-premium prodotta artigianalmente, nota per la sua estrema purezza e gli aromi di agave fresca.',
        },
        {
          name: 'Patrón Reposado',
          price: 8,
          description:
            'Un sapiente equilibrio tra la vivacità dell’agave e i sentori speziati del legno derivanti dall’affinamento.',
        },
        {
          name: 'Patrón Añejo',
          price: 9,
          description:
            'Complessa ed elegante, invecchiata in piccole botti di rovere per sviluppare note di miele e uva passa.',
        },
        {
          name: 'Casamigos Blanco',
          price: 9,
          description:
            'Piccola produzione artigianale per una tequila fresca, pulita, con una sottile nota di vaniglia sul finale.',
        },
        {
          name: 'Casamigos Reposado',
          price: 9,
          description:
            'Invecchiata 7 mesi, regala una consistenza setosa al palato con accenni di cacao e caramello.',
        },
        {
          name: 'Casamigos Añejo',
          price: 10,
          description:
            'Affinata per 14 mesi, si caratterizza per una grande complessità e note persistenti di spezie dolci.',
        },
        {
          name: 'Clase Azul Reposado',
          price: 35,
          description:
            'Tequila iconica invecchiata 8 mesi in botti di rovere americano; corpo vellutato con note di nocciola e vaniglia.',
        },

        { name: 'MEZCAL' } as MenuHeader,
        {
          name: 'Mezcal Nuestra Soledad',
          price: 6,
          description:
            'Mezcal artigianale 100% Espadín, con un carattere terroso e un’intensa affumicatura naturale.',
        },
        {
          name: 'Mezcal Casamigos',
          price: 12,
          description:
            'Prodotto artigianalmente a Oaxaca, bilancia un fumo delicato con note di frutta tropicale e pepe.',
        },
      ],
    },
    {
      id: 'cognac-brandy',
      name: 'Cognac & Brandy',
      type: MenuType.Simple,
      items: [
        { name: 'BRANDY' } as MenuHeader,
        {
          name: 'Vecchia Romagna Etichetta Nera',
          price: 5,
          description:
            'Il più celebre brandy italiano, distillato da uve Trebbiano e invecchiato in botti di rovere. Gusto deciso con note di frutta secca e vaniglia.',
        },

        { name: 'COGNAC' } as MenuHeader,
        {
          name: 'Hennessy V.S.',
          price: 8,
          description:
            'Cognac intenso e fruttato, con vivaci note di agrumi, mela fresca e un finale caratterizzato da sentori di rovere e spezie.',
        },
        {
          name: 'Remy Martin V.S.O.P.',
          price: 8,
          description:
            'Un Fine Champagne Cognac di grande eleganza, che bilancia perfettamente aromi di frutta estiva matura e delicate note floreali di violetta.',
        },
      ],
    },
    {
      id: 'vini-bianchi',
      name: 'Vini Bianchi',
      type: MenuType.Simple,
      description: 'Per altre bottiglie esposte chiedere al personale.',
      items: [
        { name: 'AL CALICE' } as MenuHeader,
        { name: 'Falanghina', price: 4 },
        { name: 'Chardonnay', price: 5 },
        { name: 'Gewürztraminer', price: 5 },

        { name: 'IN BOTTIGLIA' } as MenuHeader,
        {
          name: 'Pallagrello Bianco (Tenuta Tralice)',
          price: 30,
          description: 'Regione: Campania',
        },
        {
          name: 'Bianco di Bellona (Coda di Volpe, Az. Agr. Cavalier Pepe)',
          price: 25,
          description: 'Regione: Campania',
        },
        {
          name: 'Elemento Ventitréfilari (Fiano di Avellino D.O.C.G.)',
          price: 30,
          description: 'Regione: Campania',
        },
        {
          name: 'Pinot Bianco DOC 2025 (Kurtatsch)',
          price: 30,
          description: 'Regione: Trentino-Alto Adige',
        },
        {
          name: 'Sauvignon DOC 2025 (Kurtatsch)',
          price: 30,
          description: 'Regione: Trentino-Alto Adige',
        },
        {
          name: 'Pinosè (Pinot Nero Rosé, Kurtatsch)',
          price: 30,
          description: 'Regione: Trentino-Alto Adige',
        },
        {
          name: 'JD Bourgogne (Chardonnay 2023)',
          price: 40,
          description: 'Regione: Borgogna (Francia)',
        },
      ],
    },

    // --- VINI ROSSI ---
    {
      id: 'vini-rossi',
      name: 'Vini Rossi',
      type: MenuType.Simple,
      description: 'Per altre bottiglie esposte chiedere al personale.',
      items: [
        { name: 'AL CALICE' } as MenuHeader,
        { name: 'Aglianico', price: 4 },
        { name: 'Primitivo', price: 5 },
        { name: 'Pinot Nero', price: 5 },

        { name: 'IN BOTTIGLIA' } as MenuHeader,
        {
          name: 'Pallagrello Nero (Tenuta Tralice)',
          price: 30,
          description: 'Regione: Campania',
        },
        {
          name: 'Merlot Cabernet Curtis 2024 (Kurtatsch)',
          price: 30,
          description: 'Regione: Trentino-Alto Adige',
        },
        {
          name: 'Lagrein 2025 (Kurtatsch)',
          price: 30,
          description: 'Regione: Trentino-Alto Adige',
        },
        {
          name: "Socré (Barbera d'Alba Superiore 2021)",
          price: 30,
          description: 'Regione: Piemonte',
        },
        {
          name: 'Socré (Nebbiolo Langhe 2023)',
          price: 30,
          description: 'Regione: Piemonte',
        },
        {
          name: 'Chianti Classico (Leccia)',
          price: 30,
          description: 'Regione: Toscana',
        },
        {
          name: 'JD Bourgogne (Pinot Nero 2023)',
          price: 40,
          description: 'Regione: Borgogna (Francia)',
        },
      ],
    },

    // --- BOLLICINE E CHAMPAGNE ---
    {
      id: 'bollicine-champagne',
      name: 'Bollicine e Champagne',
      type: MenuType.Simple,
      description: 'Per altre bottiglie esposte chiedere al personale.',
      items: [
        { name: 'AL CALICE' } as MenuHeader,
        { name: 'Prosecco DOC', price: 5 },
        { name: 'Metodo Classico Feudi di San Gregorio', price: 9 },

        { name: 'IN BOTTIGLIA' } as MenuHeader,
        { name: 'Prosecco DOC Sui Nui (Brut o Extra Dry)', price: 30 },
        {
          name: 'Crémant de Limoux Brut',
          price: 60,
          description: 'Metodo Classico francese (Limoux)',
        },
      ],
    },
    {
      id: 'signature-drink',
      name: 'Signature Drink',
      type: MenuType.Simple,
      description:
        'Le creazioni esclusive dei nostri bartender, con e senza alcol.',
      items: [
        { name: 'DREAMERS' } as MenuHeader,
        {
          name: 'La Cama',
          price: 10,
          description: 'Tequila 1800 Blanco, lime, peperone arrostito',
        },
        {
          name: 'Sweet Auburn',
          price: 12,
          description:
            'Bulleit Rye Whiskey, noce pecan, ratafià alle ciliegie, Vermouth Antica Formula, chocolate bitter',
          allergens: ['frutta a guscio'],
        },
        {
          name: 'Codex',
          price: 10,
          description:
            'Vodka Altamura, liquore al pan brioche, albicocca, spuma al caffè',
          allergens: ['glutine', 'latte'],
        },
        {
          name: 'Red Lipstick',
          price: 10,
          description: 'Cognac Hennessy, Chardonnay, fragole & panna, CO2',
          allergens: ['latte'],
        },
        {
          name: 'Macondo',
          price: 12,
          description: 'Rum Hechicera, mango, shrub alla birra IPA, CO2',
          allergens: ['glutine'],
        },
        {
          name: 'Once Upon a Time',
          price: 10,
          description: 'Gin Bulldog, Calvados, Mastiha, limone, mela verde',
        },

        {
          name: 'MADAMÈ SPECIALS',
          description: 'Tutti i Madamè Specials sono serviti a € 10',
        } as MenuHeader,
        {
          name: 'Scalinatella',
          price: 10,
          description: 'Gin Bulldog, Biancosarti, cordiale agli agrumi, alloro',
        },
        {
          name: 'Old Penny',
          price: 10,
          description:
            'Maker’s Mark Bourbon, grappa barricata, pera pennata locale, Fernet Branca',
        },
        {
          name: 'Bella ‘Mbriana',
          price: 10,
          description:
            'Vodka Altamura, amaro Montenegro, lampone, latte alla cannella',
          allergens: ['latte'],
        },
        {
          name: 'Machete',
          price: 10,
          description: 'Pisco, Mezcal, ananas, jalapeño, lime',
        },

        {
          name: 'MOCKTAILS',
          description: 'Tutti i drink analcolici sono serviti a € 5',
        } as MenuHeader,
        {
          name: 'Vento d’Estate',
          price: 5,
          description: 'Ananas, passion fruit, lime e soda',
        },
        {
          name: 'Purple Rain',
          price: 5,
          description: 'Lampone, lime e ginger beer',
        },
        {
          name: 'Lemon Tree',
          price: 5,
          description: 'Fragola, limonata e granita di limone',
        },
        {
          name: 'Bocca di Rosa',
          price: 5,
          description:
            'Mirtillo rosso, cordiale al pompelmo rosa e basilico, tonica Fever Tree Mediterranea',
        },
        {
          name: 'Kiss From a Rose',
          price: 5,
          description: 'Tanqueray Gin 0.0%, limone, rosa, miele allo zenzero',
        },
      ],
    },
    {
      id: 'food',
      name: 'Food',
      type: MenuType.Simple,
      items: [
        { name: 'LIGHT LUNCH (09:00 - 18:00)' } as MenuHeader,
        {
          name: 'Pancake banana, sciroppo d’acero e cannella',
          price: 7,
          allergens: ['glutine', 'uova', 'latte'],
        },
        {
          name: 'Pancake fragola e Nutella',
          price: 7,
          allergens: ['glutine', 'uova', 'latte', 'frutta a guscio'],
        },
        {
          name: 'Pancake bacon e sciroppo d’acero',
          price: 8,
          allergens: ['glutine', 'uova', 'latte'],
        },
        {
          name: 'French toast sciroppo d’acero e frutti rossi',
          price: 9,
          allergens: ['glutine', 'uova', 'latte'],
        },
        {
          name: 'Bowl di yogurt con frutta e granola',
          price: 6,
          description: 'Yogurt 0 zuccheri, frutta fresca e granola croccante',
          allergens: ['latte', 'frutta a guscio', 'glutine'],
        },
        {
          name: 'Avocado Toast',
          price: 10,
          description:
            'Pane multicereale, uova strapazzate, avocado, lime, semi di chia',
          allergens: ['glutine', 'uova', 'semi di sesamo', 'semi di chia'],
        },
        {
          name: 'Salmon Toast',
          price: 12,
          description: 'Pane multicereale, salmone affumicato, avocado, lime',
          allergens: ['glutine', 'pesce'],
        },
        {
          name: 'Hummus Toast',
          price: 9,
          description:
            'Pane multicereale, hummus, zucchine grigliate, pomodorini',
          allergens: ['glutine', 'semi di sesamo'],
        },
        {
          name: 'Toast Prosciutto e Formaggio',
          price: 5,
          allergens: ['glutine', 'latte'],
        },
        {
          name: 'Full English Breakfast',
          price: 15,
          description:
            'Uova, bacon, funghi, pomodoro, verdure grigliate, pane tostato',
          allergens: ['glutine', 'uova', 'latte'],
        },
        {
          name: 'Caprese',
          price: 10,
          description: 'Fior di latte di Agerola e pomodori freschi',
          allergens: ['latte'],
        },
        {
          name: 'Green Salad',
          price: 10,
          description:
            'Feta, mela verde, lattuga, noci e nocciole tostate, miele',
          allergens: ['latte', 'frutta a guscio'],
        },
        {
          name: 'Fresco',
          price: 10,
          description:
            'Panino croccante, culaccia di Parma, fior di latte, rucola, pomodorini confit, patatine fritte',
          allergens: ['glutine', 'latte'],
        },

        {
          name: 'LE CENTRIFUGHE',
          description: 'Tutte le centrifughe sono servite a € 5',
        } as MenuHeader,
        {
          name: 'Green Detox',
          description: 'Mela verde, cetriolo, sedano, zenzero',
          allergens: ['sedano'],
        },
        { name: 'Golden Hour', description: 'Arancia, carota, zenzero' },
        { name: 'Tropical Mood', description: 'Ananas, mela, lime' },
        { name: 'Red Kiss', description: 'Fragola, mela, limone' },

        { name: 'APERITIVO E DINNER (DALLE 18:00)' } as MenuHeader,
        {
          name: 'L’Aperitivo all’Italiana (per 2 persone)',
          price: 15,
          description:
            '6 finger food da condividere con prodotti stagionali selezionati',
          allergens: ['glutine', 'latte', 'uova', 'frutta a guscio', 'pesce'],
        },

        { name: 'LE BRUSCHETTE (6 PZ)' } as MenuHeader,
        {
          name: 'Stracciatella, mortadella e pistacchio',
          price: 6,
          allergens: ['latte', 'frutta a guscio', 'glutine'],
        },
        {
          name: 'Salmone e avocado',
          price: 8,
          allergens: ['pesce', 'glutine'],
        },
        {
          name: 'Acciughe e burro con zest di limone',
          price: 6,
          allergens: ['pesce', 'latte', 'glutine'],
        },
        { name: 'Pomodorini e basilico', price: 6, allergens: ['glutine'] },

        { name: 'FRITTURE' } as MenuHeader,
        {
          name: 'Crocchè di patate',
          price: 5,
          allergens: ['glutine', 'latte', 'uova'],
        },
        {
          name: 'Polpetta di melanzane',
          price: 5,
          allergens: ['glutine', 'latte', 'uova'],
        },
        {
          name: 'Frittatina cacio e pepe',
          price: 5,
          allergens: ['glutine', 'latte', 'uova'],
        },
        {
          name: 'Verdure marinate al latte in pastella',
          price: 5,
          allergens: ['glutine', 'latte', 'uova'],
        },
        {
          name: 'Patatine fritte',
          price: 3,
          description: 'Possibile contaminazione crociata (olio condiviso)',
        },

        {
          name: "O' CUZZETIELLO",
          description:
            'Tipico street food napoletano: estremità del pane scavata e farcita',
        } as MenuHeader,
        {
          name: 'Polpetta della nonna',
          price: 6,
          description: 'Polpetta al sugo con parmigiano e basilico',
          allergens: ['glutine', 'latte', 'uova'],
        },
        {
          name: 'Parmigiana di melanzane',
          price: 6,
          allergens: ['glutine', 'latte', 'uova'],
        },

        { name: 'BUN, SANDWICH & TAGLIERI' } as MenuHeader,
        {
          name: 'Bun Hamburger',
          price: 10,
          description:
            'Hamburger di manzo, cheddar, lattuga, pomodoro, cipolla caramellata, mayo e patatine fritte',
          allergens: ['glutine', 'latte', 'uova'],
        },
        {
          name: 'Club Sandwich',
          price: 10,
          description:
            'Pane in cassetta, pollo grigliato, bacon, uova, lattuga, pomodoro, mayo e patatine fritte',
          allergens: ['glutine', 'latte', 'uova'],
        },
        {
          name: 'Caesar Salad',
          price: 10,
          description:
            'Pollo grigliato, bacon, lattuga, crostini di pane, parmigiano, salsa Caesar',
          allergens: ['glutine', 'latte', 'uova', 'pesce'],
        },
        {
          name: 'Il Tagliere Madamè',
          price: 10,
          description:
            'Culaccia di Parma e fior di latte di Agerola serviti con pane caldo e croccante',
          allergens: ['glutine', 'latte'],
        },
      ],
    },
  ],
};

export default DB;
