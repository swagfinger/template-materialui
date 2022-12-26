import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Button,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width='300px'>
      <Card>
        <CardMedia
          component='img'
          height='140'
          image='https://source.unsplash.com/random'
          alt='unsplash image'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            React
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            odio provident maiores aperiam reprehenderit iusto cupiditate autem
            magni tenetur id sapiente laboriosam at fuga sint amet, assumenda
            blanditiis ab? In!
          </Typography>
        </CardContent>

        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
