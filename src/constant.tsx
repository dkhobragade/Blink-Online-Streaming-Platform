import {
    DesktopOutlined,
    HomeOutlined,
    MenuUnfoldOutlined,
    MinusCircleOutlined,
    SearchOutlined,
    UserOutlined,
} from '@ant-design/icons'

export const menuItem = ([] = [
    {
        icon: <UserOutlined />,
        title: 'My Space',
        key: '',
    },
    {
        icon: <SearchOutlined />,
        title: 'Search',
        key: '',
    },
    {
        icon: <HomeOutlined />,
        title: 'Home',
        key: '',
    },
    {
        icon: <DesktopOutlined />,
        title: 'TV',
        key: '',
    },
    {
        icon: <MinusCircleOutlined />,
        title: 'Movies',
        key: '',
    },
    {
        icon: <MenuUnfoldOutlined />,
        title: 'Categories',
        key: '',
    },
])

export const api_key = '5c61281db1640e948982784ce33529dc'

export const https = 'https://api.themoviedb.org/3/'

export const img_https = 'https://image.tmdb.org/t/p/w500/'

const apiGet = (url: string) => {
    const init: RequestInit = {
        method: 'GET',
    }
    return fetch(url, init).then((resp) => {
        return resp.json()
    })
}

const apiPost = (url: string, requestBody?: Record<string, string>) => {
    const requestPayload: Record<string, any> = {
        method: 'POST',
    }
    const formData = new FormData()
    for (const key in requestBody) {
        formData.set(key, requestBody[key])
    }

    if (requestBody) {
        requestPayload['body'] = formData
    }
    return fetch(url, requestPayload).then((resp) => {
        return resp.json()
    })
}

const processApiResponse = (response: any) => {
    return response
}

export const preparePromise = (type: string, url: string, params?: Record<string, string>) => {
    const payload = {
        ...params,
    }

    const updatedURl = `${https}${url}?api_key=${process.env.REACT_APP_API_KEY}`

    if (type === 'get') {
        return apiGet(updatedURl).then((resp) => processApiResponse(resp))
    } else {
        return apiPost(updatedURl, payload).then((resp) => processApiResponse(resp))
    }
}


//To add the movies and we series data into the firebase

// const onAdddata = async () => {
//     for (const movie of movies_list) {
//         await setDoc(doc(db, "movies_data", `movie_${movie.movies_id}`), movie);
//     }

//     for (const web of webSeriesData) {
//         await setDoc(doc(db, "web_data", `movie_${web.webShow_id}`), web);
//     }
// }

export const movies_list = [
    {
        movies_durations: "03:14",
        movies_id: 2,
        movies_imdb: "9.2",
        movies_name: "The Godfather",
        movies_year: "1972",
        movies_video: "https://www.youtube.com/embed/sY1S34973zA",
        movies_director: "Francis Ford Coppola",
        movies_writers: "Mario Puzo (screenplay), Francis Ford Coppola (screenplay)",
        movies_stars: "Marlon Brando, Al Pacino, James Caan",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        movies_genre: "Crime, Drama"
    },
    {
        movies_durations: "02:32",
        movies_id: 3,
        movies_imdb: "9.0",
        movies_name: "The Dark Knight",
        movies_year: "2008",
        movies_video: "https://www.youtube.com/embed/EXeTwQWrcwY",
        movies_director: "Christopher Nolan",
        movies_writers: "Jonathan Nolan (screenplay), Christopher Nolan (screenplay)",
        movies_stars: "Christian Bale, Heath Ledger, Aaron Eckhart",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
        movies_genre: "Action, Crime, Drama"
    },
    {
        movies_durations: "01:36",
        movies_id: 4,
        movies_imdb: "8.9",
        movies_name: "12 Angry Men",
        movies_year: "1957",
        movies_video: "https://www.youtube.com/embed/K5iRBp6A6R4",
        movies_director: "Sidney Lumet",
        movies_writers: "Reginald Rose (screenplay)",
        movies_stars: "Henry Fonda, Lee J. Cobb, Martin Balsam",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/9/91/12_angry_men.jpg",
        movies_genre: "Drama"
    },
    {
        movies_durations: "03:22",
        movies_id: 5,
        movies_imdb: "8.9",
        movies_name: "The Lord of the Rings: The Return of the King",
        movies_year: "2003",
        movies_video: "https://www.youtube.com/embed/r5X-hFf6Bwo",
        movies_director: "Peter Jackson",
        movies_writers: "J.R.R. Tolkien (novel), Fran Walsh (screenplay)",
        movies_stars: "Elijah Wood, Viggo Mortensen, Ian McKellen",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/9/9d/LOTR_-_The_Return_of_the_King.jpg",
        movies_genre: "Action, Adventure, Drama"
    },
    {
        movies_durations: "02:34",
        movies_id: 6,
        movies_imdb: "8.9",
        movies_name: "Pulp Fiction",
        movies_year: "1994",
        movies_video: "https://www.youtube.com/embed/s7EdQ4FqbhY",
        movies_director: "Quentin Tarantino",
        movies_writers: "Quentin Tarantino (stories), Roger Avary (stories)",
        movies_stars: "John Travolta, Uma Thurman, Samuel L. Jackson",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/8/82/Pulp_Fiction_cover.jpg",
        movies_genre: "Crime, Drama"
    },
    {
        movies_durations: "02:41",
        movies_id: 7,
        movies_imdb: "8.8",
        movies_name: "The Good, the Bad and the Ugly",
        movies_year: "1966",
        movies_video: "https://www.youtube.com/embed/WCN5JJY_wiA",
        movies_director: "Sergio Leone",
        movies_writers: "Luciano Vincenzoni (story), Sergio Leone (story)",
        movies_stars: "Clint Eastwood, Eli Wallach, Lee Van Cleef",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/4/45/Good_bad_ugly_poster.jpg",
        movies_genre: "Western"
    },
    {
        movies_durations: "02:19",
        movies_id: 8,
        movies_imdb: "8.8",
        movies_name: "Fight Club",
        movies_year: "1999",
        movies_video: "https://www.youtube.com/embed/qtRKdVHc-cE",
        movies_director: "David Fincher",
        movies_writers: "Chuck Palahniuk (novel), Jim Uhls (screenplay)",
        movies_stars: "Brad Pitt, Edward Norton, Meat Loaf",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
        movies_genre: "Drama"
    },
    {
        movies_durations: "02:22",
        movies_id: 9,
        movies_imdb: "8.8",
        movies_name: "Forrest Gump",
        movies_year: "1994",
        movies_video: "https://www.youtube.com/embed/bLvqoHBptjg",
        movies_director: "Robert Zemeckis",
        movies_writers: "Winston Groom (novel), Eric Roth (screenplay)",
        movies_stars: "Tom Hanks, Robin Wright, Gary Sinise",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
        movies_genre: "Drama, Romance"
    },
    {
        movies_durations: "02:28",
        movies_id: 10,
        movies_imdb: "8.8",
        movies_name: "Inception",
        movies_year: "2010",
        movies_video: "https://www.youtube.com/embed/YoHD9XEInc0",
        movies_director: "Christopher Nolan",
        movies_writers: "Christopher Nolan",
        movies_stars: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg",
        movies_genre: "Action, Adventure, Sci-Fi"
    },
    {
        movies_id: 11,
        movies_name: "Dune",
        movies_year: "2021",
        movies_durations: "02:35",
        movies_imdb: "8.3",
        movies_genre: "Adventure, Drama, Sci-Fi",
        movies_director: "Denis Villeneuve",
        movies_writers: "Frank Herbert (novel), Jon Spaihts (screenplay), Denis Villeneuve (screenplay)",
        movies_stars: "Timothée Chalamet, Rebecca Ferguson, Zendaya",
        movies_video: "https://www.youtube.com/embed/n9xhJrPXop4",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/d/df/Dune_2021_film_poster.jpg"
    },
    {
        movies_id: 12,
        movies_name: "No Time to Die",
        movies_year: "2021",
        movies_durations: "02:43",
        movies_imdb: "7.4",
        movies_genre: "Action, Adventure, Thriller",
        movies_director: "Cary Joji Fukunaga",
        movies_writers: "Neal Purvis, Robert Wade, Cary Joji Fukunaga, Phoebe Waller-Bridge",
        movies_stars: "Daniel Craig, Ana de Armas, Rami Malek",
        movies_video: "https://www.youtube.com/embed/BIhNsAtPbPI",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/f/f3/No_Time_to_Die_poster.jpeg"
    },
    {
        movies_id: 13,
        movies_name: "The French Dispatch",
        movies_year: "2021",
        movies_durations: "01:47",
        movies_imdb: "7.6",
        movies_genre: "Comedy, Drama, Romance",
        movies_director: "Wes Anderson",
        movies_writers: "Wes Anderson, Roman Coppola, Hugo Guinness, Jason Schwartzman",
        movies_stars: "Benicio Del Toro, Adrien Brody, Tilda Swinton",
        movies_video: "https://www.youtube.com/embed/TcPk2p0Zaw4",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/b/b7/The_French_Dispatch.jpg"
    },
    {
        movies_id: 14,
        movies_name: "Eternals",
        movies_year: "2021",
        movies_durations: "02:37",
        movies_imdb: "6.7",
        movies_genre: "Action, Adventure, Drama",
        movies_director: "Chloé Zhao",
        movies_writers: "Chloé Zhao, Kaz Firpo, Ryan Firpo",
        movies_stars: "Gemma Chan, Richard Madden, Angelina Jolie",
        movies_video: "https://www.youtube.com/embed/0WVDKZJkGlY",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/b/bd/Eternals_poster.jpeg"
    },
    {
        movies_id: 15,
        movies_name: "Spider-Man: No Way Home",
        movies_year: "2021",
        movies_durations: "02:28",
        movies_imdb: "8.5",
        movies_genre: "Action, Adventure, Fantasy",
        movies_director: "Jon Watts",
        movies_writers: "Chris McKenna, Erik Sommers",
        movies_stars: "Tom Holland, Zendaya, Benedict Cumberbatch",
        movies_video: "https://www.youtube.com/embed/rt-2cxAiPJk",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_No_Way_Home_poster.jpeg"
    },
    {
        movies_id: 16,
        movies_name: "The Matrix Resurrections",
        movies_year: "2021",
        movies_durations: "02:28",
        movies_imdb: "5.8",
        movies_genre: "Action, Sci-Fi",
        movies_director: "Lana Wachowski",
        movies_writers: "Lana Wachowski, David Mitchell, Aleksandar Hemon",
        movies_stars: "Keanu Reeves, Carrie-Anne Moss, Yahya Abdul-Mateen II",
        movies_video: "https://www.youtube.com/embed/q3TktdD1jgk",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/The_Matrix_Resurrections.jpeg/220px-The_Matrix_Resurrections.jpeg"
    },
    {
        movies_id: 17,
        movies_name: "Shang-Chi and the Legend of the Ten Rings",
        movies_year: "2021",
        movies_durations: "02:12",
        movies_imdb: "7.5",
        movies_genre: "Action, Adventure, Fantasy",
        movies_director: "Destin Daniel Cretton",
        movies_writers: "Dave Callaham, Destin Daniel Cretton, Andrew Lanham",
        movies_stars: "Simu Liu, Awkwafina, Tony Leung",
        movies_video: "https://www.youtube.com/embed/giWIr7U1deA",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/3/3f/Shang-Chi_poster.jpg"
    },
    {
        movies_id: 18,
        movies_name: "Black Widow",
        movies_year: "2021",
        movies_durations: "02:13",
        movies_imdb: "6.7",
        movies_genre: "Action, Adventure, Sci-Fi",
        movies_director: "Cate Shortland",
        movies_writers: "Eric Pearson, Jac Schaeffer, Ned Benson",
        movies_stars: "Scarlett Johansson, Florence Pugh, David Harbour",
        movies_video: "https://www.youtube.com/embed/Fp9pNPdNwjI",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/9/9b/Black_Widow_%282021_film%29_poster.jpg"
    },
    {
        movies_id: 19,
        movies_name: "Venom: Let There Be Carnage",
        movies_year: "2021",
        movies_durations: "01:37",
        movies_imdb: "6.2",
        movies_genre: "Action, Adventure, Sci-Fi",
        movies_director: "Andy Serkis",
        movies_writers: "Tom Hardy, Kelly Marcel, Kelly Marcel",
        movies_stars: "Tom Hardy, Woody Harrelson, Michelle Williams",
        movies_video: "https://www.youtube.com/embed/-ezfi6FQ8Ds",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/3/34/Venom_Let_There_Be_Carnage_poster.jpg"
    },
    {
        movies_id: 20,
        movies_name: "Jungle Cruise",
        movies_year: "2021",
        movies_durations: "02:07",
        movies_imdb: "6.7",
        movies_genre: "Action, Adventure, Comedy",
        movies_director: "Jaume Collet-Serra",
        movies_writers: "Glenn Ficarra, John Requa, Michael Green",
        movies_stars: "Dwayne Johnson, Emily Blunt, Edgar Ramirez",
        movies_video: "https://www.youtube.com/embed/f_HvoipFcA8",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/6/62/Jungle_Cruise_poster.jpeg"
    }
]

export const webSeriesData = [
    {
        webShow_id: 1,
        webShow_name: "Breaking Bad",
        webShow_year: "2008–2013",
        webShow_durations: "00:49 (per episode)",
        webShow_imdb: "9.4",
        webShow_genre: "Crime, Drama, Thriller",
        webShow_director: "Vince Gilligan",
        webShow_writers: "Vince Gilligan",
        webShow_stars: "Bryan Cranston, Aaron Paul, Anna Gunn",
        webShow_video: "https://www.youtube.com/embed/HhesaQXLuRY",
        webShow_image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Breaking_Bad_title_card.png/250px-Breaking_Bad_title_card.png"
    },
    {
        webShow_id: 2,
        webShow_name: "The Crown",
        webShow_year: "2016–2022",
        webShow_durations: "00:58 (per episode)",
        webShow_imdb: "8.6",
        webShow_genre: "Biography, Drama, History",
        webShow_director: "Various",
        webShow_writers: "Peter Morgan",
        webShow_stars: "Claire Foy, Olivia Colman, Tobias Menzies",
        webShow_video: "https://www.youtube.com/embed/jWqyfbcKv5Q",
        webShow_image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/The_Crown_Intertitle.png/250px-The_Crown_Intertitle.png"
    },
    {
        webShow_id: 3,
        webShow_name: "Stranger Things",
        webShow_year: "2016–present",
        webShow_durations: "00:51 (per episode)",
        webShow_imdb: "8.7",
        webShow_genre: "Drama, Fantasy, Horror",
        webShow_director: "The Duffer Brothers",
        webShow_writers: "The Duffer Brothers",
        webShow_stars: "Millie Bobby Brown, Finn Wolfhard, Winona Ryder",
        webShow_video: "https://www.youtube.com/embed/XcnHOQ-cHa0",
        webShow_image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Stranger_Things_title_card.png/250px-Stranger_Things_title_card.png"
    },
    {
        webShow_id: 4,
        webShow_name: "The Witcher",
        webShow_year: "2019–present",
        webShow_durations: "00:59 (per episode)",
        webShow_imdb: "8.2",
        webShow_genre: "Action, Adventure, Drama",
        webShow_director: "Various",
        webShow_writers: "Lauren Schmidt Hissrich",
        webShow_stars: "Henry Cavill, Anya Chalotra, Freya Allan",
        webShow_video: "https://www.youtube.com/embed/ndl1W4ltcmg",
        webShow_image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/The_Witcher_title_card.png/250px-The_Witcher_title_card.png"
    },
    {
        webShow_id: 5,
        webShow_name: "The Mandalorian",
        webShow_year: "2019–present",
        webShow_durations: "00:38 (per episode)",
        webShow_imdb: "8.8",
        webShow_genre: "Action, Adventure, Fantasy",
        webShow_director: "Various",
        webShow_writers: "Jon Favreau",
        webShow_stars: "Pedro Pascal, Gina Carano, Giancarlo Esposito",
        webShow_video: "https://www.youtube.com/embed/XmI7WKrAtqs",
        webShow_image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/The_Mandalorian_logo.svg/250px-The_Mandalorian_logo.svg.png"
    },
    {
        webShow_id: 6,
        webShow_name: "Mindhunter",
        webShow_year: "2017–2019",
        webShow_durations: "00:60 (per episode)",
        webShow_imdb: "8.6",
        webShow_genre: "Crime, Drama, Thriller",
        webShow_director: "Various",
        webShow_writers: "Joe Penhall",
        webShow_stars: "Jonathan Groff, Holt McCallany, Anna Torv",
        webShow_video: "https://www.youtube.com/embed/LR3G1lWbcww",
        webShow_image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Mindhunter_title_card.png/250px-Mindhunter_title_card.png"
    },
    {
        webShow_id: 7,
        webShow_name: "Dark",
        webShow_year: "2017–2020",
        webShow_durations: "00:60 (per episode)",
        webShow_imdb: "8.8",
        webShow_genre: "Crime, Drama, Mystery",
        webShow_director: "Baran bo Odar",
        webShow_writers: "Jantje Friese",
        webShow_stars: "Louis Hofmann, Karoline Eichhorn, Lisa Vicari",
        webShow_video: "https://www.youtube.com/embed/zy0b9e40tK8",
        webShow_image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/DarkNetflix.jpg/250px-DarkNetflix.jpg"
    },
    {
        webShow_id: 8,
        webShow_name: "Narcos",
        webShow_year: "2015–2017",
        webShow_durations: "00:49 (per episode)",
        webShow_imdb: "8.8",
        webShow_genre: "Biography, Crime, Drama",
        webShow_director: "Various",
        webShow_writers: "Chris Brancato, Carlo Bernard, Doug Miro",
        webShow_stars: "Pedro Pascal, Wagner Moura, Boyd Holbrook",
        webShow_video: "https://www.youtube.com/embed/U7elNhHwgBU",
        webShow_image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Narcos_season_3.jpg/250px-Narcos_season_3.jpg"
    },
    {
        webShow_id: 9,
        webShow_name: "Peaky Blinders",
        webShow_year: "2013–2019",
        webShow_durations: "00:60 (per episode)",
        webShow_imdb: "8.8",
        webShow_genre: "Crime, Drama",
        webShow_director: "Various",
        webShow_writers: "Steven Knight",
        webShow_stars: "Cillian Murphy, Paul Anderson, Helen McCrory",
        webShow_video: "https://www.youtube.com/embed/oVzVdvGIC7U",
        webShow_image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Peaky_Blinders_title_card.png/250px-Peaky_Blinders_title_card.png"
    },
    {
        webShow_id: 10,
        webShow_name: "The Boys",
        webShow_year: "2019–present",
        webShow_durations: "00:60 (per episode)",
        webShow_imdb: "8.7",
        webShow_genre: "Action, Comedy, Crime",
        webShow_director: "Various",
        webShow_writers: "Eric Kripke",
        webShow_stars: "Karl Urban, Jack Quaid, Antony Starr",
        webShow_video: "https://www.youtube.com/embed/06rueu_fh30",
        webShow_image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/The_Boys_title_card.jpg/250px-The_Boys_title_card.jpg"
    }
]
