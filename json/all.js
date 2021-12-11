'use strict'

var todos = [
    {
        'idAll': 0,
        'titulo': "Forza Horizon 4",
        'url': "img/juegos/descarga.jfif", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2018,
        'consola': ['pc', 'xboxOne'],
        'precio': 419900,
        'idioma':['inglés', 'español'],
        'genero':['conducción', 'otros']

    },

    {
        'idAll': 1,
        'titulo': "Doom Eternal",
        'url': "img/juegos/f65636effbfbb657a625617d332a1321.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2020,
        'consola': ['ps5', 'ps4','pc', 'xboxOne','nSwitch'],
        'precio': 250400,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['acción', 'otros']

    },
    {
        'idAll': 2,
        'titulo': "Halo Infinite",
        'url': "img/juegos/halo-infinite-202072216173826_2.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': "2006",
        'consola': ['pc', 'xboxOne'],
        'precio': 475000,
        'idioma':['inglés'],
        'genero':['acción', 'aventuras', 'otros']

    },
    {
        'idAll': 3,
        'titulo': "New Pokémon Snap",
        'url': "img/juegos/164229531610653335.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2021,
        'consola': ['nSwitch'],
        'precio': 139900,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['estrategía']

    },
    {
        'idAll': 4,
        'titulo': "FIFA 21",
        'url': "img/juegos/fifa-21-202092911423764_1.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2020,
        'consola': ['ps5', 'ps4','pc', 'xboxOne','nSwitch'],
        'precio': 109900,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['deportes']

    },
    {
        'idAll': 5,
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
        'idAll': 6,
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
        'idAll': 7,
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
        'idAll': 8,
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
        'idAll': 9,
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
        'idAll': 10,
        'titulo': "Resident Evil Village",
        'url': "img/nuevo/resident-evil-8-village-20211229461390_1.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",  
        'anio': 2021,
        'consola': ['ps5', 'pc'],
        'precio': 169900,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['horror', 'supervivencia', 'acción', 'aventuras']

    },
    {
        'idAll': 11,
        'titulo': "Hitman 3",
        'url': "img/nuevo/hitman-3-202012111717524_1.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2021,
        'consola': ['ps5', 'pc'],
        'precio': 249900,
        'idioma':['inglés', 'español', 'frances', 'italiano'],
        'genero':['sigilo', 'acción', 'aventuras']

    },
    {
        'idAll': 12,
        'titulo': "It takes two",
        'url': "img/nuevo/It-Takes-TwoXBOX.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2021,
        'consola': ['ps5', 'ps4', 'pc', 'xboxOne'],
        'precio': 159900,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['acción', 'aventuras']

    },
    {
        'idAll': 13,
        'titulo': "Civilization VI",
        'url': "img/juegos/sid-meiers-civilization-vi-2016511172747_1.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2016,
        'consola': ['ps4', 'pc', 'xboxOne','nSwitch', 'mac'],
        'precio': 219000,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['estrategía']

    },
    {
        'idAll': 14,
        'titulo': "Hades",
        'url': "img/juegos/626711571544268149.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2018,
        'consola': ['nSwitch', 'mac', 'pc'],
        'precio': 490000,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['acción', 'aventuras', 'rpg']

    },
    {
        'idAll': 15,
        'titulo': "Path of Exile",
        'url': "img/juegos/path-of-exile-2017828173043_1.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2013,
        'consola': ['ps4', 'pc', 'xboxOne', 'mac'],
        'precio': 35000,
        'idioma':['inglés'],
        'genero':['acción', 'rpg']

    },
    {
        'idAll': 16,
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
        'idAll': 17,
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
        'idAll': 18,
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
        'idAll': 19,
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
        'idAll': 20,
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
        'idAll': 21,
        'titulo': "Sonic Generations",
        'url': "img/juegos/810Z7T1sBJL._SL1500_.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2011,
        'consola': ['pc', 'n3ds', 'xbox360', 'ps3'],
        'precio': 20000,
        'idioma':['inglés'],
        'genero':['acción', 'aventuras']

    },
    {
        'idAll': 22,
        'titulo': "Far Cry 4",
        'url': "img/juegos/descarga (1).jfif", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2014,
        'consola': ['xboxOne', 'ps3', 'xbox360', 'pc'],
        'precio': 30900,
        'idioma':['inglés'],
        'genero':['acción', 'aventuras', 'otros']

    },
    {
        'idAll': 23,
        'titulo': "Godfall",
        'url': "img/juegos/godfall-2020101613434899_1.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2020,
        'consola': ['ps5', 'pc'],
        'precio': 260900,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['acción', 'aventuras', 'rpg']

    },
    {
        'idAll': 24,
        'titulo': "Astro's Playroom",
        'url': "img/juegos/981783511591961177.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2020,
        'consola': ['ps5'],
        'precio': 30900,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['acción']

    },
    {
        'idAll': 25,
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
        'idAll': 26,
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
        'idAll': 27,
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
        'idAll': 28,
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
        'idAll': 29,
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
]