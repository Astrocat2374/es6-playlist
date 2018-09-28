const data = [
    {
        title: "Anyway You Want It",
        artist: 'Journey',
        genre: 'Rock',
        image: 'images/anyway.jpg',
        music: 'music/AWYWI.mp3'
    },
    {
        title: "Eye in the Sky",
        artist: 'Alan Parsons',
        genre: 'Rock',
        image: 'images/eye_in_sky.jpg',
        music: 'music/EITS.mp3'
    },
    {
        title: "Bohemian Rhapsody",
        artist: 'Queen',
        genre: 'Rock',
        image: 'images/bohemian.jpg',
        music: 'music/BR.mp3'
    },
    {
        title: "Moonage Daydream",
        artist: 'David Bowie',
        genre: 'Classic Rock',
        image: 'images/daydream.jpg',
        music: 'music/MD.mp3'
    },
    {
        title: "Seven Nation Army",
        artist: 'The White Stripes',
        genre: 'Rock',
        image: 'images/seven_nation.jpg',
        music: 'music/SNA.mp3'
    },
    {
        title: "Here I Go Again",
        artist: 'Whitesnake',
        genre: 'Hard Rock',
        image: 'images/here_I_go.jpg',
        music: 'music/HIGA.mp3'
    },
    {
        title: "Fortunate Son",
        artist: 'Creedence Clearwater Revival',
        genre: 'Rock',
        image: 'images/vietnam.jpg',
        music: 'music/FS.mp3'
    },
    {
        title: "Stairway to Heaven",
        artist: 'Led Zeppelin',
        genre: 'Hard Rock',
        image: 'images/stairway.jpg',
        music: 'music/STH.mp3'
    },
    {
        title: "Sympathy for the Devil",
        artist: 'The Rolling Stones',
        genre: 'Classic Rock',
        image: 'images/sympathy.jpg',
        music: 'music/SFTD.mp3'
    },
    {
        title: "House of the Rising Sun",
        artist: 'The Animals',
        genre: 'Rock',
        image: 'images/rising_sun.jpg',
        music: 'music/HOTRS.mp3'
    },
    {
        title: "Livin on a Prayer",
        artist: 'Bon Jovi',
        genre: 'Rock',
        image: 'images/livin_on_a_prayer.jpg',
        music: 'music/LOAP.mp3'
    },
    {
        title: "In the Navy",
        artist: 'Village People',
        genre: 'Dance',
        image: 'images/in_the_navy.jpg',
        music: 'music/ITN.mp3'
    },
    {
        title: "Hotel California",
        artist: 'Eagles',
        genre: 'Classic Rock',
        image: 'images/hotel_california.jpg',
        music: 'music/HC.mp3'
    },
    {
        title: "Hooked on a Feeling",
        artist: 'Blue Swede',
        genre: 'Pop Rock',
        image: 'images/hooked.jpg',
        music: 'music/HOAF.mp3'
    },
    {
        title: "Stuck in the Middle with You",
        artist: 'Stealers Wheel',
        genre: 'Pop Rock',
        image: 'images/stuck_in_the_middle.jpg',
        music: 'music/SITMWY.mp3'
    },
    {
        title: "Sweet Child o' Mine",
        artist: 'Guns and Roses',
        genre: 'Rock',
        image: 'images/sweet_child.jpg',
        music: 'music/SCOM.mp3'
    },
    {
        title: "Don't Stop Me Now",
        artist: 'Queen',
        genre: 'Classic Rock',
        image: 'images/dont_stop_me.jpg',
        music: 'music/DSMN.mp3'
    },
    {
        title: "Paradise City",
        artist: 'Guns and Roses',
        genre: 'Hard Rock',
        image: 'images/sweet_child.jpg',
        music: 'music/PC.mp3'
    },
    {
        title: "Dream On",
        artist: 'Aerosmith',
        genre: 'Hard Rock',
        image: 'images/dream.jpg',
        music: 'music/DO.mp3'
    },
    {
        title: "More Than a Feeling",
        artist: 'Boston',
        genre: 'Rock',
        image: 'images/marianne.jpg',
        music: 'music/MTAF.mp3'
    },
    {
        title: "Highway To Hell",
        artist: 'ACDC',
        genre: 'Hard Rock',
        image: 'images/highway.jpg',
        music: 'music/HTH.mp3'
    },
    {
        title: "Jump",
        artist: 'Van Halen',
        genre: 'Rock',
        image: 'images/jump.jpg',
        music: 'music/J.mp3'
    },
    {
        title: "Everybody Wants to Rule the World",
        artist: 'Tears for Fears',
        genre: 'Pop',
        image: 'images/rule_the_world.jpg',
        music: 'music/EWTRTW.mp3'
    },
    {
        title: "Don't Stop Believin'",
        artist: 'Journey',
        genre: 'Rock',
        image: 'images/dont_stop_believing.jpg',
        music: 'music/DSB.mp3'
    },
    {
        title: "Under Pressure",
        artist: 'Queen',
        genre: 'Rock',
        image: 'images/pressure.jpg',
        music: 'music/UP.mp3'
    },
    {
        title: "You Give Love a Bad Name",
        artist: 'Bon Jovi',
        genre: 'Rock',
        image: 'images/heartbroken.jpg',
        music: 'music/YGLABN.mp3'
    },
    {
        title: "Africa",
        artist: 'Toto',
        genre: 'Pop',
        image: 'images/africa.jpg',
        music: 'music/A.mp3'
    },
    {
        title: "Space Oddity",
        artist: 'David Bowie',
        genre: 'Pop',
        image: 'images/oddity.jpg',
        music: 'music/SO.mp3'
    },
    {
        title: "[I Can't Get No] Satisfaction",
        artist: 'The Rolling Stones',
        genre: 'Rock',
        image: 'images/satisfaction.jpg',
        music: 'music/ICGNS.mp3'
    },
    {
        title: "Back in Black",
        artist: 'ACDC',
        genre: 'Hard Rock',
        image: 'images/black.jpg',
        music: 'music/BIB.mp3'
    },
    {
        title: "Walk This Way",
        artist: 'Aerosmith',
        genre: 'Classic Rock',
        image: 'images/walk.jpg',
        music: 'music/WTW.mp3'
    },
    {
        title: "Thunderstruck",
        artist: 'ACDC',
        genre: 'Hard Rock',
        image: 'images/thunder.jpg',
        music: 'music/TS.mp3'
    },
    {
        title: "Panama",
        artist: 'Van Halen',
        genre: 'Rock',
        image: 'images/jump.jpg',
        music: 'music/P.mp3'
    },
    {
        title: "Starman",
        artist: 'David Bowie',
        genre: 'Pop',
        image: 'images/starman.jpg',
        music: 'music/SM.mp3'
    },
    {
        title: "The Boys Are Back in Town",
        artist: 'Thin Lizzy',
        genre: 'Classic Rock',
        image: 'images/cold_one.jpg',
        music: 'music/TBABIT.mp3'
    },
    {
        title: "Smoke on the Water",
        artist: 'Deep Purple',
        genre: 'Rock',
        image: 'images/smoke_water.jpg',
        music: 'music/SOTW.mp3'
    },
    {
        title: "Born to be Wild",
        artist: 'Steppenwolf',
        genre: 'Rock',
        image: 'images/wild.jpg',
        music: 'music/BTBW.mp3'
    },
    {
        title: "Carry on Wayward Son",
        artist: 'Kansas',
        genre: 'Rock',
        image: 'images/carry_on.jpg',
        music: 'music/COWS.mp3'
    },
    {
        title: "Smells Like Teen Spirit",
        artist: 'Nirvana',
        genre: 'Rock',
        image: 'images/smells.jpg',
        music: 'music/SLTS.mp3'
    },
    {
        title: "I'm Still Standing",
        artist: 'Elton John',
        genre: 'Pop',
        image: 'images/standing.jpg',
        music: 'music/ISS.mp3'
    },
    {
        title: "We Didn't Start the Fire",
        artist: 'Elton John',
        genre: 'Pop',
        image: 'images/fire.jpg',
        music: 'music/WDSTF.mp3'
    },
    {
        title: "Life on Mars",
        artist: 'David Bowie',
        genre: 'Pop',
        image: 'images/life.jpg',
        music: 'music/LOM.mp3'
    }
];
