import PropTypes from 'prop-types';


function MessageBar({ meteo }) {
  return (
    <div className='message'>
      Currently the weather in {meteo.location.name} ({meteo.location.country}) is :
    </div>
  );
}

MessageBar.propTypes = {
  meteo: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default MessageBar;
