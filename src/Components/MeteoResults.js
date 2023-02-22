import PropTypes from 'prop-types';
import MessageBar from './MessageBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function MeteoResults({ meteo }) {
  return (
    <div>
      <MessageBar meteo={meteo} />
      <Card centered className="card">
        <CardMedia
          src={meteo.current.weather_icons}
          wrapped
          ui={false}
          alt="Meteo image"
        />
        <CardContent>
          <Typography className="city-name">
            {meteo.location.name}
          </Typography>
          <Typography>({meteo.location.region}, {meteo.location.country})</Typography>
          <Typography className="temperature">
            {meteo.current.temperature}°c
          </Typography>
          <Typography className="weather-description">
            {meteo.current.weather_descriptions}
          </Typography>
        </CardContent>
      </Card>

      
    </div>
  );
}

MeteoResults.propTypes = {
  meteo: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default MeteoResults;