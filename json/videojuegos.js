'use strict' 

var videoJuegos = [
    {
        'id': 0,
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
        'id': 1,
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
        'id': 2,
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
        'id': 3,
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
        'id': 4,
        'titulo': "FIFA 21",
        'url': "img/juegos/fifa-21-202092911423764_1.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2020,
        'consola': ['ps5', 'ps4','pc', 'xboxOne','nSwitch'],
        'precio': 109900,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['deporte']

    },
    {
        'id': 5,
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
        'id': 6,
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
        'id': 7,
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
        'id': 8,
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
        'id': 9,
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
        'id': 10,
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
        'id': 11,
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
        'id': 12,
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
        'id': 13,
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
        'id': 14,
        'titulo': "Astro's Playroom",
        'url': "img/juegos/981783511591961177.jpg", 
        'descripcion': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis vestibulum nisl. Duis vitae consequat lacus, et tristique urna. Aenean vitae luctus lectus, at dictum ante. Duis ultricies risus in neque imperdiet varius.",
        'anio': 2020,
        'consola': ['ps5'],
        'precio': 30900,
        'idioma':['inglés', 'español', 'frances', 'portugués', 'italiano'],
        'genero':['acción']

    }

    
]