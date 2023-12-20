import {FaPlaystation, FaXbox, FaMicrosoft} from "react-icons/fa"; 

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
            <h3>Welcome To Gamer's Dystopia</h3>
            <ul className="footer-icons">
                <li><FaPlaystation /></li>
                <li><FaXbox /></li>
                <li><FaMicrosoft /></li>
            </ul> 
            </div>
        </footer>
    )
}

export default Footer; 