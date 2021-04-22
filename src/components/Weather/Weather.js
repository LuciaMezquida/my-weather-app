import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";

const Weather = ({ weatherData }) => {
  return (
    <Card role="listbox">
      <Card.Content>
        <Card.Header className="header">City: {weatherData.name}</Card.Header>
        <p>Temprature: {weatherData.main.temp}</p>
        <p>Sunrise: {weatherData.sys.sunrise}</p>
        <p>Sunset: {weatherData.sys.sunset}</p>
        <p>Description: {weatherData.weather[0].description}</p>
      </Card.Content>
    </Card>
  );
};
Weather.propTypes = {
  weatherData: PropTypes.object,
};
export default Weather;
