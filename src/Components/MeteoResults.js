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
      <Card sx={{ minWidth: 300, display: 'inline-block' }} className="card">
        <CardMedia
          component="img"
          image={meteo.current.weather_icons}
          alt="Meteo image"
        />
        <CardContent>
          <Typography sx={{ fontSize: 30, textTransform: 'uppercase'}}>
            {meteo.location.name}
          </Typography>
          <Typography sx={{ fontSize: 15 }} color="text.secondary">({meteo.location.region}, {meteo.location.country})</Typography>
          <Typography sx={{ fontSize: 35 }} >
            {meteo.current.temperature}°c
          </Typography>
          <Typography sx={{ fontSize: 20 }}>
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
    PropTypes.string,
  ]).isRequired,
};

export default MeteoResults;