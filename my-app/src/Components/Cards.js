import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';


function ActionAreaCard({personagem}) {
  
  return (
    <Card className="lista"sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          margin="20"
         image={personagem.image}
         alt="green iguana"
        />  
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <li key={personagem.id}>
              {`Nome: ${personagem.name}`}
            </li>
            <li>
              {`Specie: ${personagem.species}`}
            </li>
            <li>
            {`Status: ${personagem.status}`}
            </li>

          </Typography>
          <Typography variant="body2" color="text.secondary">
           {personagem.type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ActionAreaCard