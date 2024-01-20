import { useState } from "react";
import PropTypes from "prop-types";
import "../css/Navbar.css"


function Navbar ({ onSelectPlanet }) {

    const [burgerClicked,setBurgerClicked] = useState(false)

    const handleBurgerClick = () => {
        setBurgerClicked(!burgerClicked)
    }

    const handleSelecPlanet = (event) => {
        const selectedPlanet = event.target.innerHTML;
        onSelectPlanet(selectedPlanet);
        setBurgerClicked(false);
    };

    return (
        <nav>
            <div id="logo">THE PLANETS</div>
            <ul id="deskMenu">
                <li className="mercury" onClick={ handleSelecPlanet }>Mercury</li>
                <li className="venus" onClick={ handleSelecPlanet }>Venus</li>
                <li className="earth" onClick={ handleSelecPlanet }>Earth</li>
                <li className="mars" onClick={ handleSelecPlanet }>Mars</li>
                <li className="jupiter" onClick={ handleSelecPlanet }>Jupiter</li>
                <li className="saturn" onClick={ handleSelecPlanet }>Saturn</li>
                <li className="uranus" onClick={ handleSelecPlanet }>Uranus</li>
                <li className="neptune" onClick={ handleSelecPlanet }>Neptune</li>
            </ul>
            <svg onClick={handleBurgerClick} xmlns="http://www.w3.org/2000/svg" width="24" height="17" id="burger"><g fill="#FFF" fillRule="evenodd" ><path  d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
            <div id="burgerContainer" className={burgerClicked ? "on" : ""}>
            <ul>
                <li className="mercury" onClick={ handleSelecPlanet }>Mercury</li>
                <li className="venus" onClick={ handleSelecPlanet }>Venus</li>
                <li className="earth" onClick={ handleSelecPlanet }>Earth</li>
                <li className="mars" onClick={ handleSelecPlanet }>Mars</li>
                <li className="jupiter" onClick={ handleSelecPlanet }>Jupiter</li>
                <li className="saturn" onClick={ handleSelecPlanet }>Saturn</li>
                <li className="uranus" onClick={ handleSelecPlanet }>Uranus</li>
                <li className="neptune" onClick={ handleSelecPlanet }>Neptune</li>
                <img src="../assets/images/" alt="" />
            </ul>
            </div>
        </nav>
    )

}

Navbar.propTypes = {
    onSelectPlanet: PropTypes.func.isRequired,
};

export default Navbar