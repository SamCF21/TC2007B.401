import { Card, CardContent, CardHeader } from "@mui/material";
import "./reportes.css";
const React = require('react');

const cardStyle = {
  background: "#FFFFFF",
  border: "none",
  borderRadius: "2px",
  boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
};

const Reportes = () => (
  <div className="grid-container">
    <Card className="grid-item">
      <CardHeader title="Reporte 1" />
      <CardContent>
        <iframe
          style={cardStyle}
          width="640"
          height="480"
          src="https://charts.mongodb.com/charts-project-0-brvqf/embed/charts?id=652872ba-1da9-4114-82f8-8d74ffb12809&maxDataAge=3600&theme=light&autoRefresh=true"
          frameBorder="0"
        ></iframe>
      </CardContent>
    </Card>
    
    
    <Card className="grid-item">
      <CardHeader title="Reporte 2" />
      <CardContent>
        <iframe
          style={cardStyle}
          width="640"
          height="480"
          src="https://charts.mongodb.com/charts-project-0-brvqf/embed/charts?id=65287313-670d-40d3-8d8f-d326be5d77b2&maxDataAge=3600&theme=light&autoRefresh=true"
          frameBorder="0"
        ></iframe>
      </CardContent>
    </Card>
    
    
    <Card className="grid-item">
      <CardHeader title="Reporte 3" />
      <CardContent>
        <iframe
          style={cardStyle}
          width="640"
          height="480"
          src="https://charts.mongodb.com/charts-project-0-brvqf/embed/charts?id=65287396-1da9-4ff1-839d-8d74ffb22356&maxDataAge=3600&theme=light&autoRefresh=true"
          frameBorder="0"
        ></iframe>
      </CardContent>
    </Card>

    <Card className="grid-item">
      <CardHeader title="Reporte 4" />
      <CardContent>
        <iframe
          style={cardStyle}
          width="640"
          height="480"
          src="https://charts.mongodb.com/charts-project-0-brvqf/embed/charts?id=652873f0-d04e-452e-80f6-980f18b25a12&maxDataAge=3600&theme=light&autoRefresh=true"
          frameBorder="0"
        ></iframe>
      </CardContent>
    </Card>
  </div>
);

export default Reportes;

