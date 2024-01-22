import getPlanetInfo from "./Findplanet";
import "../css/Data.css"

// eslint-disable-next-line react/prop-types
function Data ({selectedPlanet}) {
    const planetInfo = getPlanetInfo(selectedPlanet);

    return (
        <div id="datasContainer">
            <div className="datas">
                <h4>ROTATION TIME</h4>
                <h2>{planetInfo.rotation}</h2>
            </div>
            <div className="datas">
                <h4>REVOLUTION TIME</h4>
                <h2>{planetInfo.revolution}</h2>
            </div>
            <div className="datas">
                <h4>RADIUS</h4>
                <h2>{planetInfo.radius}</h2>
            </div>
            <div className="datas">
                <h4>AVERAGE TEMP.</h4>
                <h2>{planetInfo.temperature}</h2>
            </div>
        </div>
    )

}

export default Data