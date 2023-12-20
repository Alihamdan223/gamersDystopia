const SubHeader = ({controllers}) => {
    
    return (
        <nav className="controllers-nav">
            <h2>Gamer's Dystopia</h2>
            {controllers.map((controller) => {
                return <ul className="controller-subheader">
                    <li><img src={controller} /></li>
                </ul>
            })}
        </nav>
    )
}

export default SubHeader; 