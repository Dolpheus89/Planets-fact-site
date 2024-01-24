import { useState } from "react";
import Navbar from "../components/NavBar"
import MainInfos from "../components/MainInfos"
import Data from "../components/Data";
import Animations from "../components/Animations";

function Planets () {
    const [selectedPlanet, setSelectedPlanet] = useState("Mercury");

    const handleSelectPlanet = (planet) => {
    setSelectedPlanet(planet);
    };


    return (
        <>
            <Navbar onSelectPlanet={handleSelectPlanet}/>
            <main>
                <MainInfos selectedPlanet={selectedPlanet}/>
            </main>
                <Data selectedPlanet={selectedPlanet}/>
                <Animations/>
        </>
    )
}

export default Planets