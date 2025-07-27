import Card from "@mui/material/Card";
import "./infoBox.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import Typography from "@mui/material/Typography";

export default function InfoBox({ Info = {} }) {  // Default empty object to avoid errors
  const INIT_URL =
    "https://images.unsplash.com/photo-1733164845914-5facd00128f4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://media.istockphoto.com/id/1006684880/photo/bright-sun.jpg?s=612x612&w=0&k=20&c=9lqwSzu46U1E0B7WM6PLr3o1Vp_dnFZjJ4t43gu82No=";
  const COLD_URL =
"https://www.fourstateshomepage.com/wp-content/uploads/sites/36/2024/01/Horz-Cold-Weather.jpg?strip=1" ;
 const Rain_URL =
    "https://media.istockphoto.com/id/1321878632/photo/cloudy-sky-over-beautiful-flood-plain-landscape.jpg?s=612x612&w=0&k=20&c=5IxhgWG1AaG5froZIyYy2XUuNCJlUDDt6g1fRiXP_g0=";

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            Info?.humidity > 80 ? Rain_URL : Info?.temp > 15 ? HOT_URL : COLD_URL
          }
          title="Weather Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Info?.city} &nbsp;
            {/* ✅ Corrected Icon Usage */}
            {Info?.humidity > 80 ? <ThunderstormIcon /> : Info?.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temperature = {Info?.temp} &deg;C</p>
            <p>Humidity = {Info?.humidity}</p>
            <p>Min Temp = {Info?.tempMin}&deg;C</p>
            <p>Max Temp = {Info?.tempMax}&deg;C</p>
            <p>The weather feels like = {Info?.feelslike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
