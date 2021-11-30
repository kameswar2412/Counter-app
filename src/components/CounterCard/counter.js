import React,{useState} from 'react';
import {Grid,Card,Button} from '@mui/material';
import Typography from '@mui/material/Typography';

const CounterCard = () => {
    const [Count, setCount] = useState(0);
  const Increment=()=>{
    const num=Count
    setCount(num+3)
  }
  const Decrement=()=>{
    const num=Count
    setCount(num-3)
  }
    return ( 
        <>
        
        <Grid container sx={{justifyContent:'center',paddingTop:10}} >
         <Typography variant="h3" component="h2">
          Counter
          </Typography>
        <Card sx={{display:'flex',margin:'auto',padding:10}}>
          <Button variant="contained" sx={{margin:2}} onClick={Decrement} > - </Button>
          <p>{Count}</p>
          <Button variant="contained" sx={{margin:2}} onClick={Increment}> + </Button>

        </Card>
      </Grid>
      
        </>
     );
}
 
export default CounterCard;