import planetData from "../../data.json";

const getPlanetInfo = (selectedPlanet) => {
  return planetData.find((planet) => planet.name === selectedPlanet);
};

export default getPlanetInfo;
