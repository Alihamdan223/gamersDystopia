import { motion } from "framer-motion"; 
import { useState } from "react"; 

const Slider = ({upcomingGames}) => {

    const [index, setIndex] = useState(0); 
    const [checkIt, setCheckIt] = useState(false); 

    function handleSlider() {
        setIndex((prevIndex) => (prevIndex + 1) % upcomingGames.length); 
        setCheckIt(true); 
    }

    const displayIt = upcomingGames[index]; 

    const transitionVariants = {
        initial: {
            y: -50, 
            opacity: 0 
        }, 
        animate: {
            y: 0,
            opacity: 1 
        },
        transition: {
            type: 'spring',
            duration: 3
        }
    }

    return (
        <div className="coming-games">
            <h1>upcoming games</h1>
            <button onClick={handleSlider}>Toggle Through</button> 
        <div className="newGames-coming"> 
        {displayIt.map((game) => {
            return <motion.ul className="newGames-list"
            key={game.id}
            variants={checkIt && transitionVariants}
            initial="initial"
            animate="animate">  
                <li><h2>{game.title}</h2></li>
                <li><img src={game.cover} alt="upcomingGames" /></li>
                <li><h3>Release Date</h3></li>
                <li>{game.releaseDate}</li>
                <div className="platform-list">
                <li><h3>Platform/s</h3></li>
                <li>
                {game.platforms.map((platform) => {
                 return <span>{platform}</span>})}
                </li>
                </div>
            </motion.ul>
        })}
        </div> 
        </div>
    )
}

export default Slider; 