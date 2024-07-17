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
        movies_id: 1,
        movies_name: "Pathaan",
        movies_duration: "02:26",
        movies_imdb: "7.0",
        movies_year: "2023",
        movies_video: "https://www.youtube.com/watch?v=zsn_Uu8nAuA",
        movies_director: "Siddharth Anand",
        movies_writers: "Siddharth Anand, Shridhar Raghavan",
        movies_stars: "Shah Rukh Khan, Deepika Padukone, John Abraham",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/f/f5/Pathaan_film_poster.jpg",
        movies_genre: "Action, Thriller"
    },
    {
        movies_id: 2,
        movies_name: "Jawan",
        movies_duration: "02:45",
        movies_imdb: "7.5",
        movies_year: "2023",
        movies_video: "https://www.youtube.com/watch?v=lkOanWf8XWs",
        movies_director: "Atlee",
        movies_writers: "Atlee, S. Ramanagirivasan",
        movies_stars: "Shah Rukh Khan, Nayanthara, Vijay Sethupathi",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/f/fd/Jawan_2023_film_poster.jpg",
        movies_genre: "Action, Thriller"
    },
    {
        movies_id: 3,
        movies_name: "RRR",
        movies_duration: "03:05",
        movies_imdb: "8.0",
        movies_year: "2022",
        movies_video: "https://www.youtube.com/watch?v=NgBoMJy386M",
        movies_director: "S. S. Rajamouli",
        movies_writers: "V. Vijayendra Prasad (story), S. S. Rajamouli (screenplay)",
        movies_stars: "N. T. Rama Rao Jr., Ram Charan, Alia Bhatt",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/f/fd/RRR_Poster.jpg",
        movies_genre: "Action, Drama"
    },
    {
        movies_id: 4,
        movies_name: "Brahmastra: Part One - Shiva",
        movies_duration: "02:45",
        movies_imdb: "6.8",
        movies_year: "2022",
        movies_video: "https://www.youtube.com/watch?v=BUjXzrgntgU",
        movies_director: "Ayan Mukerji",
        movies_writers: "Ayan Mukerji",
        movies_stars: "Ranbir Kapoor, Alia Bhatt, Amitabh Bachchan",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/9/98/Brahmastra_Teaser_Poster.jpg",
        movies_genre: "Action, Adventure, Fantasy"
    },
    {
        movies_id: 5,
        movies_name: "Sooryavanshi",
        movies_duration: "02:25",
        movies_imdb: "6.5",
        movies_year: "2021",
        movies_video: "https://www.youtube.com/watch?v=u6Ziy4o9sAs",
        movies_director: "Rohit Shetty",
        movies_writers: "Yunus Sajawal, Rohit Shetty",
        movies_stars: "Akshay Kumar, Katrina Kaif, Ajay Devgn",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/f/fe/Sooryavanshi_poster.jpg",
        movies_genre: "Action, Crime, Thriller"
    },
    {
        movies_id: 6,
        movies_name: "The Dark Knight",
        movies_duration: "02:32",
        movies_imdb: "9.0",
        movies_year: "2008",
        movies_video: "https://www.youtube.com/embed/EXeTwQWrcwY",
        movies_director: "Christopher Nolan",
        movies_writers: "Jonathan Nolan (screenplay), Christopher Nolan (screenplay)",
        movies_stars: "Christian Bale, Heath Ledger, Aaron Eckhart",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
        movies_genre: "Action, Crime, Drama"
    },
    {
        movies_id: 7,
        movies_name: "Spider-Man: No Way Home",
        movies_duration: "02:28",
        movies_imdb: "8.3",
        movies_year: "2021",
        movies_video: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
        movies_director: "Jon Watts",
        movies_writers: "Chris McKenna, Erik Sommers",
        movies_stars: "Tom Holland, Zendaya, Benedict Cumberbatch",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
        movies_genre: "Action, Adventure, Fantasy"
    },
    {
        movies_id: 8,
        movies_name: "Top Gun: Maverick",
        movies_duration: "02:10",
        movies_imdb: "8.4",
        movies_year: "2022",
        movies_video: "https://www.youtube.com/watch?v=giXco2jaZ_4",
        movies_director: "Joseph Kosinski",
        movies_writers: "Ehren Kruger, Eric Warren Singer, Christopher McQuarrie",
        movies_stars: "Tom Cruise, Jennifer Connelly, Miles Teller",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/4/41/Top_Gun_Maverick_Poster.jpg",
        movies_genre: "Action, Drama"
    },
    {
        movies_id: 9,
        movies_name: "Dune",
        movies_duration: "02:35",
        movies_imdb: "8.1",
        movies_year: "2021",
        movies_video: "https://www.youtube.com/watch?v=8g18jFHCLXk",
        movies_director: "Denis Villeneuve",
        movies_writers: "Jon Spaihts, Denis Villeneuve, Eric Roth",
        movies_stars: "Timothée Chalamet, Rebecca Ferguson, Zendaya",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
        movies_genre: "Action, Adventure, Drama"
    },
    {
        movies_id: 10,
        movies_name: "The Batman",
        movies_duration: "02:55",
        movies_imdb: "7.9",
        movies_year: "2022",
        movies_video: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
        movies_director: "Matt Reeves",
        movies_writers: "Matt Reeves, Peter Craig",
        movies_stars: "Robert Pattinson, Zoë Kravitz, Jeffrey Wright",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/8/87/The_Batman_%28film%29_poster.jpg",
        movies_genre: "Action, Crime, Drama"
    },
    {
        movies_id: 11,
        movies_name: "RRR",
        movies_duration: "03:05",
        movies_imdb: "8.0",
        movies_year: "2022",
        movies_video: "https://www.youtube.com/watch?v=NgBoMJy386M",
        movies_director: "S. S. Rajamouli",
        movies_writers: "V. Vijayendra Prasad (story), S. S. Rajamouli (screenplay)",
        movies_stars: "N. T. Rama Rao Jr., Ram Charan, Alia Bhatt",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/f/fd/RRR_Poster.jpg",
        movies_genre: "Action, Drama"
    },
    {
        movies_id: 12,
        movies_name: "Pushpa: The Rise",
        movies_duration: "02:59",
        movies_imdb: "7.6",
        movies_year: "2021",
        movies_video: "https://www.youtube.com/watch?v=Q1NKMPhP8PY",
        movies_director: "Sukumar",
        movies_writers: "Sukumar",
        movies_stars: "Allu Arjun, Fahadh Faasil, Rashmika Mandanna",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/8/8f/Pushpa_Poster.jpg",
        movies_genre: "Action, Crime, Drama"
    },
    {
        movies_id: 13,
        movies_name: "Radhe Shyam",
        movies_duration: "02:38",
        movies_imdb: "6.2",
        movies_year: "2022",
        movies_video: "https://www.youtube.com/watch?v=9nv6Zf6fjHI",
        movies_director: "Radha Krishna Kumar",
        movies_writers: "Radha Krishna Kumar",
        movies_stars: "Prabhas, Pooja Hegde, Bhagyashree",
        movies_image: "https://upload.wikimedia.org/wikipedia/en/1/11/Radhe_Shyam_Poster.jpg",
        movies_genre: "Drama, Romance"
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


export const carouselList = [
    {
        id: '1',
        name: 'Showtime',
        year: '2024',
        info: `An epic saga of legacy and ambition, get a glimpse behind the multimillion-dollar industry of Bollywood, nepotism and power struggles at the top.`,
        genre: 'Drama,Celebration,Celebrities',
        image: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6458/1720718526458-i',
        video: 'https://www.youtube.com/watch?v=tAXew1iKCnw',
        posterImg: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/346/1720718500346-t',
        play: true
    },
    {
        id: '2',
        name: 'Salaar',
        year: '2023',
        info: `In the crime-infested Khansaar, Prince Varadha sets to ascend the throne. But a coup d'état is planned! And there’s only one man to help reclaim power: Deva.`,
        genre: 'Action,Thriller',
        image: 'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8730/1707996958730-i',
        video: 'https://www.youtube.com/watch?v=Pr2jBvbiy04',
        posterImg: 'https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/8973/1707996938973-t',
        play: true
    },
    {
        id: '3',
        name: 'Brahmastra Part One :Shiva',
        year: '2022',
        info: `A journey of fantasy, action and romance comes to life as Shiva enters the Astraverse! He discovers true love and also, the power of fire within him.`,
        genre: 'Fantasy,Adventure,Action',
        image: 'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/6312/1714673666312-i',
        video: 'https://www.youtube.com/watch?v=BUjXzrgntcY',
        posterImg: 'https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/6761/1714673646761-t',
        play: true
    },
]
// {
//     id: '4',
//     name: 'Do aur do pyar',
//     year: '2024',
//     genre: 'Romance,Comedy',
//     image: 'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/3474/1720172613474-i',
//     video: 'https://www.youtube.com/watch?v=d9Xckupgjsw',
//     posterImg: 'https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/4077/1720172484077-t',
//     play: true
// },
// {
//     id: '5',
//     name: 'Sita Ram',
//     year: '2022',
//     genre: 'Romance,Drama,Couples',
//     image: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3410/1623410-i-5fe8c00b81e1',
//     video: 'https://www.youtube.com/watch?v=3UKsbXQUwqw',
//     posterImg: 'https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/3408/1623408-t-9ec4d70dcf2b',
//     play: true
// },


export const CarouselListData = [
    {
        id: '1',
        name: 'Meter',
        year: '2023',
        image: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9165/1708610579165-v',
        video: 'https://www.youtube.com/watch?v=oSFjaxnTn90',
        posterImg: 'https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/4923/1708610594923-t',
        play: true,
    },
    {
        id: '2',
        name: 'Ride On',
        year: '2023',
        image: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4593/1708725754593-v',
        video: 'https://www.youtube.com/watch?v=A1tnlU2HBTM',
        posterImg: 'https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/7072/1708725847072-t',
        play: true,
    },
    {
        id: '3',
        name: 'Laxmii',
        year: '2020',
        image: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7803/1712209007803-v',
        video: 'https://www.youtube.com/watch?v=AzTYIiRYmv0',
        posterImg: 'https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/843/1650843-t-18c273d0239e',
        play: true,
    },
    {
        id: '4',
        name: 'kaala',
        year: '2018',
        image: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/7977/1000217977/1000217977-v',
        video: 'https://www.youtube.com/watch?v=pSnMt6h6zk0',
        posterImg: 'https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/3645/1373645-t-6d1f32e5b5d6',
        play: true,
    },
    {
        id: '5',
        name: 'Hungama 2',
        year: '2021',
        image: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9962/1710936549962-v',
        video: 'https://www.youtube.com/watch?v=RC8dHEENNHQ',
        posterImg: 'https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/7223/1707126007223-t',
        play: true,
    },
    {
        id: '6',
        name: 'Aiyaary',
        year: '2018',
        image: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/457/30457-v',
        video: 'https://www.youtube.com/watch?v=KcWXKmnZZVo',
        posterImg: 'https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/5386/1375386-t-a7680d810a1b',
        play: true,
    },
    {
        id: '7',
        name: 'A Thursday',
        year: '2023',
        image: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5416/1713534275416-v',
        video: 'https://www.youtube.com/watch?v=7O_96yftBRc',
        posterImg: 'https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/8737/1608737-t-add76c4c5774',
        play: true
    },
]

const randomFontSize = ['Bradley Hand, cursive', 'URW Chancery L, cursive', 'Chalkduster, fantasy', 'Apple Chancery, cursive']


export const randomNumberGenerator = (max: number) => {
    return Math.random() * (max - 0)
}