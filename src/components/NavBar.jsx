import "../css/Navbar.css"

function Navbar () {
    return (
        <nav>
            <div id="logo">THE PLANETS</div>
            <ul>
                <li className="mercury">MERCURY</li>
                <li className="venus">VENUS</li>
                <li className="earth">EARTH</li>
                <li className="mars">MARS</li>
                <li className="jupiter">JUPITER</li>
                <li className="saturn">SATURN</li>
                <li className="uranus">URANUS</li>
                <li className="neptune">NEPTUNE</li>
            </ul>
        </nav>
    )

}

export default Navbar