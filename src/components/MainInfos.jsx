import PropTypes from "prop-types";
import planetData from "../../data.json";

function MainInfos ({selectedPlanet}) {
    const planetInfo = planetData.find((planet) => planet.name === selectedPlanet);

    return (
        <main>
            <h1>{planetInfo.name}</h1>
        </main>
    )
}

MainInfos.propTypes = {
    selectedPlanet: PropTypes.string.isRequired,
};

export default MainInfos