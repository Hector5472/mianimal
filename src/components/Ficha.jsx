import { useState } from 'react'
import snakeImg from '../assets/snakeImg.jpg'
import '../App.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Appgrid from '../Appgrid';


function Ficha() {
  const [petCount, setCount] = useState(0)

  return (
    <>

      <Stack
        direction="column"
        spacing={{xs: 1, sm: 2, md: 4}}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant='h1'>Sssoy una fokin serpiente 7~7</Typography>

        <a>
          <Avatar sx={{ width: 150, height: 150 }} src={snakeImg} className="avatar" alt="imagen" />
        </a>

        <br></br>

        <Button variant='contained' size='medium' color='secondary' sx={{ color: 'yellow' }} onClick={() => setCount((count) => count + 1)}>
          me has hecho {petCount} rascaditas
        </Button>
        <Appgrid></Appgrid>
        
        

      </Stack>
    </>

  )
}

export default Ficha
