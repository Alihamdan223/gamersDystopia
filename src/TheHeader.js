const TheHeader = ({data, dataIndex}) => {
    
    return (
        
        <header className="header" style={{backgroundImage: `url(${data[dataIndex]})`}}>
            <nav className="header-nav">
                <ul className="nav-bar">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Upcoming Games</a></li>
                    <li><a href="#">Indies</a></li>
                    <li><a href="#">Retro</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default TheHeader; 