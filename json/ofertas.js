'use strict' 

var ofertas = [
    {
        'idOfertas': 0,
        'titulo': "Wii Sports",
        'url': "img/ofertas/Wii_Sports_Resort_boxart.png", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2006,
        'consola': ['Wii'],
        'descuento': 0.15,
        'precio': 70000,
        'idioma':['inglés'],
        'genero':['deportes']

    },

    {
        'idOfertas': 1,
        'titulo': "Grand Theft Auto V",
        'url': "img/ofertas/Carátula_GTA_V.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2013,
        'consola': ['ps4', 'ps3', 'xbox360', 'xboxOne', 'pc'],
        'descuento': 0.05,
        'precio': 45000,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['acción', 'aventuras']

    },
    {
        'idOfertas': 2,
        'titulo': "Batman: Arkham Asylum",
        'url': "img/ofertas/Batman-arkham-asylum-1731.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2009,
        'consola': ['ps3', 'xbox360', 'pc', 'mac'],
        'descuento': 0.10,
        'precio': 30000,
        'idioma':['inglés'],
        'genero':['acción', 'aventuras', 'sigilo']

    },
    {
        'idOfertas': 3,
        'titulo': "Mortal Kombat",
        'url': "img/ofertas/mortal-kombat-komplete-edition-360.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2011,
        'consola': ['ps3', 'xbox360', 'pc'],
        'descuento': 0.05,
        'precio': 45900,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['acción']

    },
    {
        'idOfertas': 4,
        'titulo': "Skate 3",
        'url': "img/ofertas/51XBbwXANRL._SY445_.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2010,
        'consola': ['ps3', 'xbox360'],
        'descuento': 0.35,
        'precio': 350900,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['deportes', 'simuladores']

    },
    {
        'idOfertas': 5,
        'titulo': "Lego Marvel Vengadores",
        'url': "img/ofertas/43306.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2016,
        'consola': ['ps3', 'xbox360', 'xboxOne', 'pc', 'N3ds', 'NWii'],
        'descuento': 0.10,
        'precio': 109900,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['acción', 'aventuras']

    },
    {
        'idOfertas': 6,
        'titulo': "Asterix y Obelix XXL 3",
        'url': "img/ofertas/asterix-xxl3-cartel.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2019,
        'consola': ['ps4', 'nSwitch', 'pc', 'mac', 'xboxOne'],
        'descuento': 0.50,
        'precio': 150000,
        'idioma':['inglés', 'español'],
        'genero':['acción', 'aventuras']

    },
    {
        'idOfertas': 7,
        'titulo': "Heavenly Guardian",
        'url': "img/ofertas/D_NQ_NP_908901-MCO29741223060_032019-O.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2007,
        'consola': ['ps2', 'ps4', 'nSwitch', 'pc', 'ps3'],
        'descuento': 0.15,
        'precio': 75900,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['otros']

    },
    {
        'idOfertas': 8,
        'titulo': "Sims 4",
        'url': "img/ofertas/71otyq1xFNL._SL1499_.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2014,
        'consola': ['ps4', 'xboxOne', 'pc', 'mac'],
        'descuento': 0.05,
        'precio': 139900,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['simuladores']

    },
    {
        'idOfertas': 9,
        'titulo': "Journey",
        'url': "img/ofertas/1200px-Journeycover.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2012,
        'consola': ['ps3', 'ps4'],
        'descuento': 0.30,
        'precio': 59900,
        'idioma':['inglés'],
        'genero':['aventuras']

    },
    {
        'idOfertas': 10,
        'titulo': "Beyond: Dos Almas",
        'url': "img/ofertas/814rQzz3twL._AC_SX425_.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2013,
        'consola': ['ps3', 'ps4', 'pc'],
        'descuento': 0.20,
        'precio': 158900,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['acción', 'aventuras']

    },
    {
        'idOfertas': 11,
        'titulo': "Microsoft Gears Tactics",
        'url': "img/ofertas/468132431579342093.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2020,
        'consola': ['pc', 'xboxOne'],
        'descuento': 0.15,
        'precio': 259900,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['acción', 'estrategía']

    },
    {
        'idOfertas': 12,
        'titulo': "Striker Zone",
        'url': "img/ofertas/unnamed.png", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2019,
        'consola': ['pc'],
        'descuento': 0.25,
        'precio': 58900,
        'idioma':['inglés'],
        'genero':['otros']

    },
    {
        'idOfertas': 13,
        'titulo': "Gears 5",
        'url': "img/ofertas/gears-of-war-5-20198161726203_1.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2019,
        'consola': ['xboxOne'],
        'descuento': 0.40,
        'precio': 350900,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['acción']

    },
    {
        'idOfertas': 14,
        'titulo': "Ori and the Will of the Wisps",
        'url': "img/ofertas/ori-and-the-will-of-the-wisps-20201319543824_1.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2020,
        'consola': ['nSwitch', 'xboxOne', 'pc'],
        'descuento': 0.15,
        'precio': 45800,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['aventuras', 'otros']

    }

    
];

