import PropTypes from "prop-types";
import {useState} from "react"
import getPlanetInfo  from "./Findplanet";
import "../css/MainInfos.css"

function MainInfos ({selectedPlanet}) {
    const [imgsPLanet, setImgsPlanet] = useState("planet")
    const planetInfo = getPlanetInfo(selectedPlanet);
    const imgPlanet = planetInfo.images[imgsPLanet];
    let infos = planetInfo.overview

    if (imgsPLanet === "planet") {
        infos = planetInfo.overview
    } else if (imgsPLanet === "internal") {
        infos = planetInfo.structure
    }else if (imgsPLanet === "geology") {
        infos = planetInfo.geology
    }

    return (
        <section id="InfosContainer">
            <div id="imgContainer">
            {imgsPLanet ==="planet" || imgsPLanet ==="internal" ? (
                <img src={imgPlanet} alt={planetInfo.name} id="planet"/>
            ) : imgsPLanet === "geology" && ( 
                <>
                <img src={planetInfo.images.planet} alt={planetInfo.name} id="planet" />
                <img src={imgPlanet} alt="surface" id="surface"/>
                </>
            )}
            </div>
            <article id="globalInfos">   
                <div id="textInfos">            
                    <h1>{planetInfo.name}</h1>
                    <p id="content">{infos.content}</p>
                    <p id="source">Source : <a href={infos.source} target="-blank" rel="noopener noreferrer">Wikipedia</a><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity=".5"/></svg></p>
                </div> 
                <div id="choiceContainer">
                    <label htmlFor="overview" className={imgsPLanet === "planet" ? planetInfo.name : ""}>
                        <input type="radio" name="planet" id="overview" onChange={() => setImgsPlanet("planet")} defaultChecked />
                        <span>01</span><p>overview</p>
                    </label>
                    <label htmlFor="internal" className={imgsPLanet === "internal" ? planetInfo.name : ""}>
                        <input type="radio" name="planet" id="internal" onChange={() => setImgsPlanet("internal")} />
                        <span>02</span><p>internal structure</p>
                    </label>
                    <label htmlFor="geology" className={imgsPLanet === "geology" ? planetInfo.name : ""}>
                        <input type="radio" name="planet" id="geology" onChange={() => setImgsPlanet("geology")}/>
                        <span>03</span><p>surface geology</p>
                    </label>
                </div>
            </article>
        </section>
    )
}

MainInfos.propTypes = {
    selectedPlanet: PropTypes.string.isRequired,
};

export default MainInfos