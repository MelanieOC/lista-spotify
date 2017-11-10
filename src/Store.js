import createStore from 'redux-zero';

const LIST = {
    name: 'ELECTRO BR',
    by: 'Spotify',
    image: 'https://i.scdn.co/image/8fceebd160a5efab9088f7a66e0555d70b44a520',
    playlist: [
        {
            title: "Road",
            artist:  "Bruno Martini, Timbaland, Johnny Franco",
            album: "Road",
            duration: "2:48",
            src: "https://open.spotify.com/embed/track/4C6IBSWdeKpiEChXGhZaRs"
        }, 
        {
            title: "Calabria",
            artist:  "Cat Dealers, Groove Delight",
            album: "Calabria",
            duration: "2:41",
            src: "https://open.spotify.com/embed/track/3QVLyVPY6fB6l9xjQ23VlH"
        },
        {
            title: "Big Jet Plane",
            artist:  "Alok, Mathieu Koss",
            album: "Big Jet Plane",
            duration: "3:02",
            src: "https://open.spotify.com/embed/track/71P1N0X76YtZMbBIGG47un"
        },
        {
            title: "Coastline",
            artist:  "Liu, Woak",
            album: "Coastilne (By Hollow Coves)",
            duration: "3:02",
            src: "https://open.spotify.com/embed/track/4MFJja8C5DQGWstBew2BUC"
        },
        {
            title: "In My Soul",
            artist:  "Wao, Kamatos",
            album: "We Are One",
            duration: "2:56",
            src: "https://open.spotify.com/embed/track/0S57JHaDSX6xN80YViQydJ"
        },
        {
            title: "So Bad",
            artist:  "Vinne, SoFly",
            album: "So Bad",
            duration: "3:19",
            src: "https://open.spotify.com/embed/track/0qVVWRuQfuVV3Qfeb6E9fi"
        },
        {
            title: "Always Summer",
            artist: "Dubdogz, Tom Bailey",
            album: "Always Summer",
            duration: "3:08",
            src: "https://open.spotify.com/embed/track/1Mjn9kjt2RSxh1JPW1YCzD"
        },
        {
            title: "Cold Heart",
            artist: "Bhaskar, Gabriel Boni, Layna",
            album: "Cold Heart",
            duration: "3:31",
            src: "https://open.spotify.com/embed/track/1nZktjRTpvyL7l5Piget0G"
        },
        {
            title: "Someday - Radio Mix",
            artist: "Rakka, Victor Olivatti",
            album: "Someday (Radio Mix)",
            duration: "3:20",
            src: "https://open.spotify.com/embed/track/5xTQnsFh1IeQjCwhpZNb6P" 
        },
        {
            title: "Make Me Wanna",
            artist: "Selva, Zerky",
            album: "Alok presents Brazilian Bass - Part 1",
            duration: "2:53",
            src: "https://open.spotify.com/embed/track/4O50bT2bZXNSBlaEbLewjq"
        },
        {
            title: "Too Close",
            artist: "Ghostt, Radiomatik",
            album: "Too Close",
            duration: "3:44",
            src: "https://open.spotify.com/embed/track/36jWNNLzKKKlWYArwm2yim"
        },
        {
            title: "Monday",
            artist: "Vintage Culture, Felguk, Le Dib",
            album: "Monday",
            duration: "3:11",
            src: "https://open.spotify.com/embed/track/4XmeDoWEMBG6Km2Ts6brCt"
        },
        {
            title: "Feelings",
            artist: "El Baile, James Ty ",
            album: "Feelings",
            duration: "3:30",
            src: "https://open.spotify.com/embed/track/46mmswGEhYJcqRG7LjehLA"
        },
        {
            title: "23 as 5",
            artist: "E-Cologyk, Phillip Nutt, Nith",
            album: "23 as 5",
            duration: "2:53",
            src: "https://open.spotify.com/embed/track/48eDZ4XWpVtdJ4KL9COzll"
        },
        {
            title: "Illusion",
            artist: "Jord, Santti",
            album: "Illusion",
            duration: "3:12",
            src: "https://open.spotify.com/embed/track/3IL6t7X9IH0CmwoqSJeX9J"
        },
        {
            title: "Human (Remix)",
            artist: "Vintage Culture, Bruno Be, Manimal",
            album: "Human (Remix)",
            duration: "3:31", 
            src: "https://open.spotify.com/embed/track/0bVp6yZEUrJzOm2agoFYZm"
        },
        {
            title: "Not the Right Guy - Radio Mix",
            artist: "Subb, Livit",
            album: "Not the Right Guy",
            duration: "3:04",
            src: "https://open.spotify.com/embed/track/5qKsOwqpwg1s8gvYpnR8Fl"
        },
        {
            title: "Memories of You",
            artist: "Bhaskar, Yves Paquet",
            album: "Memories of You",
            duration: "3:45",
            src: "https://open.spotify.com/embed/track/7yLCJHh9fuaiMgcV4TlXLr" 
        },
        {
            title: "Heavy Dirty Soul",
            artist: "Bruno Be",
            album: "Heavy Dirty Soul",
            duration: "3:30",
            src: "https://open.spotify.com/embed/track/7CdDBSaHDOlp6hSPpsmS1a"
        },
        {
            title: "Uma Noite e 1/2",
            artist: "Jetlag Music, Thaeme",
            album: "Uma Noite e 1/2",
            duration: "5:14", 
            src: "https://open.spotify.com/embed/track/0XcuBfglpHdhOoIdaSEjAv"
        },
    
    ]
}

const initialState = {
    LIST: LIST,
    playlist: LIST.playlist,
    currentIndex: -1,
    play:false,
    follow: false
};

const store = createStore(initialState);

export default store;
