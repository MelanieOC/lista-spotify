import createStore from 'redux-zero';

let playlist = [
    {
        title: "Road",
        artist:  "Bruno Martini, Timbaland, Johnny Franco",
        album: "Road",
        duration: "2:48"
    }, 
    {
        title: "Calabria",
        artist:  "Cat Dealers, Groove Delight",
        album: "Calabria",
        duration: "2:41"
    },
    {
        title: "Big Jet Plane",
        artist:  "Alok, Mathieu Koss",
        album: "Big Jet Plane",
        duration: "3:02"
    },
    {
        title: "Coastline",
        artist:  "Liu, Woak",
        album: "Coastilne (By Hollow Coves)",
        duration: "3:02"
    },
    {
        title: "In My Soul",
        artist:  "Wao, Kamatos",
        album: "We Are One",
        duration: "2:56"
    },
    {
        title: "So Bad",
        artist:  "Vinne, SoFly",
        album: "So Bad",
        duration: "3:19"
    },
    {
        title: "Always Summer",
        artist: "Dubdogz, Tom Bailey",
        album: "Always Summer",
        duration: "3:08"
    },
    {
        title: "Cold Heart",
        artist: "Bhaskar, Gabriel Boni, Layna",
        album: "Cold Heart",
        duration: "3:31"
    },
    {
        title: "Someday - Radio Mix",
        artist: "Rakka, Victor Olivatti",
        album: "Someday (Radio Mix)",
        duration: "3:20"
    },
    {
        title: "Make Me Wanna",
        artist: "Selva, Zerky",
        album: "Alok presents Brazilian Bass - Part 1",
        duration: "2:53"
    },
    {
        title: "Too Close",
        artist: "Ghostt, Radiomatik",
        album: "Too Close",
        duration: "3:44"
    },
    {
        title: "Monday",
        artist: "Vintage Culture, Felguk, Le Dib",
        album: "Monday",
        duration: "3:11"
    },
    {
        title: "Feelings",
        artist: "El Baile, James Ty ",
        album: "Feelings",
        duration: "3:30"
    },
    {
        title: "23 as 5",
        artist: "E-Cologyk, Phillip Nutt, Nith",
        album: "23 as 5",
        duration: "2:53"
    },
    {
        title: "Illusion",
        artist: "Jord, Santti",
        album: "Illusion",
        duration: "3:12"
    },
    {
        title: "Human (Remix)",
        artist: "Vintage Culture, Bruno Be, Manimal",
        album: "Human (Remix)",
        duration: "3:31"
    },
    {
        title: "Not the Right Guy - Radio Mix",
        artist: "Subb, Livit",
        album: "Not the Right Guy",
        duration: "3:04"
    },
    {
        title: "Memories of You",
        artist: "Bhaskar, Yves Paquet",
        album: "Memories of You",
        duration: "3:45"
    },
    {
        title: "Heavy Dirty Soul",
        artist: "Bruno Be",
        album: "Heavy Dirty Soul",
        duration: "3:30"
    },
    {
        title: "Uma Noite e 1/2",
        artist: "Jetlag Music, Thaeme",
        album: "Uma Noite e 1/2",
        duration: "5:14"
    },
    {
        title: "Cyclone",
        artist: "Chirs Leao, Allexis, Marymell",
        album: "Cyclone",
        duration: "4:15"
    },
    {
        title: "Suavemente",
        artist: "KVSH, Beowulf",
        album: "Suavemente",
        duration: "2:42"
    },
    {
        title: "Macete",
        artist: "Maffalda",
        album: "Macete",
        duration: "2:53"
    },
    {
        title: "Ligth Me Up",
        artist: "FTampa",
        album: "Light Me Up",
        duration: "3:26"
    },
    {
        title: "A Star Named After You",
        artist: "Kyber Krystals",
        album: "A Star Named After You",
        duration: "3:35"
    },
    {
        title: "My Way",
        artist: "Evokings, Magga",
        album: "My Way",
        duration: "3:43"
    },
    {
        title: "Love Is Blue - Rivas (BR) Radio Remix",
        artist: "Marcelo CIC, Dj Thai, Rivas (BR), Lecis",
        album: "Love Is Blue",
        duration: "3:42"
    },
    {
        title: "Away We Go",
        artist: "Radiomatik",
        album: "Away We Go",
        duration: "4:51"
    },
    {
        title: "Sober",
        artist: "Cat Dealers, Santti",
        album: "Sober",
        duration: "3:30"
    },
    {
        title: "You and I",
        artist: "The Kraken Music",
        album: "You and I",
        duration: "3:39"
    },
    {
        title: "Later",
        artist: "Vintage Culture, RICCI",
        album: "Later",
        duration: "3:30"
    },
    {
        title: "This City",
        artist: "Bhaskar, Alok, Stonefox",
        album: "Alok presents Brazilian Bass",
        duration: "3:39"
    },
    {
        title: "Paralyzed",
        artist: "Andy Bianchini, Ming",
        album: "Paralyzed",
        duration: "3:33"
    },
    {
        title: "Sun Goes Down",
        artist: "Bruno Martini, Isadora",
        album: "Sun Goes Down",
        duration: "3:23"
    },
    {
        title: "The Bad Touch",
        artist: "Chris Leao, Allexis",
        album: "The Bad Touch",
        duration: "3:18"
    },
    {
        title: "Feel Your Heart",
        artist: "Be Lion, Kamatos",
        album: "Colors",
        duration: "3:47"
    },
    {
        title: "Why Don't U Love - Felguk Remix",
        artist: "Vintage Culture, Selva, Lazy Bear, Felguk",
        album: "Why Don't U Love - Felguk Remix",
        duration: "4:20"
    },
    {
        title: "Ela é de SP",
        artist: "Danne, Livit",
        album: "Ela é de SP",
        duration: ""
    },
    {
        title:"On Fire",
        artist: "Livit, Velden",
        album: "On Fire",
        duration: "3:35"
    },
    {
        title: "Raining Again",
        artist: "Nato Medrado",
        album: "Without Name",
        duration: "7:01"
    },
    {
        title: "Infinito Particular - Bhaskar Remix ",
        artist: "Bhaskar, Silva",
        album: "Infinito Particular (Bhaskar Remix)",
        duration: "2:40"
    },
    {
        title: "1000 Times",
        artist: "Roger Melo, Laurell",
        album: "1000 Times",
        duration: "3:38"
    },
    {
        title: "About Love",
        artist: "DUX, Rae",
        album: "About Love",
        duration: "3:21"
    },
    {
        title: "Wildest Dreams - Ruxell Remix",
        artist: "Marcelo CIC, Breana, Ruxell",
        album: "Wildest Dreams",
        duration: "3:42"
    },
    {
        title: "Lost Generation",
        artist: "RICCI",
        album: "Lost Generation",
        duration: "3:28"
    },
    {
        title: "On Fire",
        artist: "Livit, Velden",
        album: "On Fire",
        duration: "3:35"
    },
    {
        title: "Love Is A Temple",
        artist: "Alok, IRO",
        album: "Love Is A Temple",
        duration: "3:38"
    },
    {
        title: "Sunrise",
        artist: "Dubdogz, Illicris",
        album: "Sunrise",
        duration: "3:27"
    },
    {
        title: "Dominamo o Club - Radio Edit",
        artist: "Malik Mustache, Pablo Novacci",
        album: "Dominamo o Club",
        duration: "4:56"
    },
    {
        title: "Don't You Know",
        artist: "Beowulf, Dom",
        album: "Don't You Know",
        duration: "3:36"
    },
];

const initialState = {
    playlist: playlist
};

const store = createStore(initialState);

export default store;