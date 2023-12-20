import { useState } from "react"; 
import { motion } from "framer-motion";
import Slider from "./Slider";
import Footer from "./Footer"; 

const newGames = [
    [
    {
        "id": 1, 
        "title": "Star Wars Outlaws",
        "cover": "https://pbs.twimg.com/media/F1EBklMXsAAzhsI?format=jpg&name=4096x4096",
        "releaseDate": "2024",
        "platforms": ["PS5", "Xbox Series X/S", "PC"]
    },
    {
        "id": 2,
        "title": "Dragon's Dogma 2",
        "cover": "https://www.dragonsdogma.com/assets/images/games_dd2_thumb.jpg",
        "releaseDate": "March 22, 2024",
        "platforms": ["PS5", "Xbox Series X/S", "PC"]
    },
    {
        "id": 3,
        "title": "Avowed",
        "releaseDate": "2024",
        "cover": "https://cdna.artstation.com/p/assets/images/images/028/868/538/large/mandar-joshi-avowed.jpg?1595774514",
        "platforms": ["Xbox Series X/S", "PC"] 
    },
    {
        "id": 4,
        "title": "Little Nightmares 3",
        "cover": "https://assets-prd.ignimgs.com/2023/08/24/nightmares3-1692881952367.jpg", 
        "releaseDate": "2024",
        "platforms": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC", "Nintendo Switch"]
    },
    ],
    [
    {
        "id": 5,
        "title": "Alone In The Dark",
        "cover": "https://m.media-amazon.com/images/M/MV5BMDEyMTkyODctOWRiYy00NzkxLWEzMTAtMWZiMjRjMWRmZjE0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        "releaseDate": "March 20, 2024",
        "platforms": ["PS5", "Xbox Series X/S", "PC"]
    },
    {
        "id": 6,
        "title": "Paper Mario: The Thousand-Year Door Remake", 
        "cover": "https://assets-prd.ignimgs.com/2021/12/20/papermario100year-1640028954193.jpg",
        "releaseDate": "2024",
        "platforms": ["Nintendo Switch"]
    },
    {
        "id": 7,
        "title": "Tekken 8",
        "cover": "https://image.api.playstation.com/vulcan/ap/rnd/202212/2009/04S9doVJzhHa0OE8o8wax88S.png", 
        "releaseDate": "January 26, 2024",
        "platforms": ["PS5", "Xbox Series X/S", "PC"]
    },
    {
        "id": 8,
        "title": "Vampire: The Masquerade - Bloodlines 2", 
        "cover": "https://www.gamespot.com/a/uploads/scale_medium/1593/15930215/3533548-screen%20shot%202019-05-13%20at%202.26.04%20pm.png",
        "releaseDate": "2024", 
        "platforms": ["PS4", "PS5", "Xbox One", "Xbox Series X/S", "PC"]
    },
    ],
    [
    {
        "id": 9, 
        "title": "Suicide Squad: Kill The Justice League",
        "cover": "https://i5.walmartimages.com/seo/DC-Comics-Suicide-Squad-Kill-The-Justice-League-Key-Art-Wall-Poster-14-725-x-22-375_890ccc78-d318-4659-a0b0-101d1f58359e.103e2e145413892269ca999983c9e48c.jpeg",
        "releaseDate": "January 30, 2024",
        "platforms": ["PS5", "Xbox Series X/S", "PC"] 
    },
    {
        "id": 10,
        "title": "Stalker: Heart Of Chernobyl",
        "cover": "https://www.igroshop.com/images/detailed/9/stalker_2_art.jpg",
        "releaseDate": "2024",
        "platforms": ["Xbox Series X/S", "PC"]
    },
    {
        "id": 11,
        "title": "Black Myth: Wukong",
        "cover": "https://m.media-amazon.com/images/M/MV5BZDBiNDJmZDMtOTYxNy00NjcyLWE0ODYtNTkzNmQ1MWIwZGY2XkEyXkFqcGdeQXVyOTc3NzE0NjM@._V1_FMjpg_UX1000_.jpg",
        "releaseDate": "August 20, 2024",
        "platforms": ["PS4", "PS5", "Xbox Series X/S", "Xbox One", "PC"]
    },
    {
        "id": 12, 
        "title": "Homeworld 3", 
        "cover": "https://i.gadgets360cdn.com/products/large/EGS-Homeworld3-BlackbirdInteractive-S2-1200x1600-2080e2e3662c285b1c9efcb13f3a8d07-1000x1333-1672227372.jpeg",
        "releaseDate": "February 2024",
        "platforms": ["PC"]
    }
]
];

const MainMenu = () => {

    const [upcomingGames] = useState(newGames); 

    return (
        <main>
        <div className="main-menu">
        <div className="sub-main-menu">
        <div className="sub-div1">
        <h1>Gamer's Dystopia??</h1>
        <p>Gamer's Dystopia is a unique gaming platform which offers you the latest news and even analysis about your favorite video games.</p>
        <p>Our services are limited to the best we can offer and it's our responsibility to let you know whatever is going on in the Gaming Industry and in the Gaming World as a whole!</p>
        </div>
        <div className="sub-div2">
            <img src="https://img.freepik.com/premium-photo/call-duty-colorful-gaming-wallpaper-4k_669273-269.jpg" alt="gamers dystopia" />
        </div>
        </div>
        </div> 
        <Slider upcomingGames={upcomingGames} />
        <div className="subscribe-div">
            <motion.h3
            initial={{x: -100, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{type: 'spring', duration: 0.7}}>Don't Miss Anything Going On In The Gaming World With Our Daily Newsletter</motion.h3>
            <button>Subscribe</button>
        </div>
        <Footer />
        </main>
    )
}

export default MainMenu; 