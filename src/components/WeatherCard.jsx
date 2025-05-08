import { Card, CardContent, Typography, Box } from '@mui/material';

function WeatherCard({ data }) {
  const { location, current } = data;

  return (
    <Card sx={{ maxWidth: 400, margin: '0 auto' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {location.name}, {location.region}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary">
          {location.country}
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
          <img src={current.condition.icon} alt={current.condition.text} />
          <Typography variant="h3" ml={2}>
            {current.temp_c}°C
          </Typography>
        </Box>

        <Typography variant="h6" mt={2}>
          {current.condition.text}
        </Typography>

        <Box mt={2}>
          <Typography variant="body2">Sensação térmica: {current.feelslike_c}°C</Typography>
          <Typography variant="body2">Umidade: {current.humidity}%</Typography>
          <Typography variant="body2">Vento: {current.wind_kph} km/h</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default WeatherCard;
