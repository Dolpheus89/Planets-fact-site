import { useState } from "react";
import Navbar from "../components/NavBar"
import MainInfos from "../components/MainInfos"

function Planets () {
    const [selectedPlanet, setSelectedPlanet] = useState("Mercury");

    const handleSelectPlanet = (planet) => {
    setSelectedPlanet(planet);
    };
    return (
        <>
            <Navbar onSelectPlanet={handleSelectPlanet}/>
            <MainInfos selectedPlanet={selectedPlanet}/>
        </>
    )
}

export default Planets