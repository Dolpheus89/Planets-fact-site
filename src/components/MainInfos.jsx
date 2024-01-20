import PropTypes from "prop-types";
import {useState} from "react"
import planetData from "../../data.json";

function MainInfos ({selectedPlanet}) {
    const [imgsPLanet, setImgsPlanet] = useState("planet")
    const planetInfo = planetData.find((planet) => planet.name === selectedPlanet);
    const imgPlanet = planetInfo.images[imgsPLanet];
    let infos = planetInfo.overview

    if (imgsPLanet === "planet") {
        infos = planetInfo.overview
    } else if (imgsPLanet === "internal") {
        infos = planetInfo.structure
    }else if (imgsPLanet === "geology") {
        infos = planetInfo.geology
    }


    imgPlanet === "planet"

    return (
        <main>
            <img src={imgPlanet} alt="" />
            {imgsPLanet === "geology" && ( 
                <img src={planetInfo.images.planet} alt={planetInfo.name} />
            )}
            <h1>{planetInfo.name}</h1>
            <p id="content">{infos.content}</p>
            <p id="source">{infos.source}</p>
            <label htmlFor="overview">
                <input type="radio" name="planet" id="overview" onChange={() => setImgsPlanet("planet")} defaultChecked />
                <span>01</span><p>overview</p>
            </label>
            <label htmlFor="internal">
                <input type="radio" name="planet" id="internal" onChange={() => setImgsPlanet("internal")} />
                <span>02</span><p>internal structure</p>
            </label>
            <label htmlFor="geology">
                <input type="radio" name="planet" id="geology" onChange={() => setImgsPlanet("geology")}/>
                <span>03</span><p>surface geology</p>
            </label>

        </main>
    )
}

MainInfos.propTypes = {
    selectedPlanet: PropTypes.string.isRequired,
};

export default MainInfos