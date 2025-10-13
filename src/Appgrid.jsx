import React from 'react';
import { Grid, Button } from '@mui/material';

function Appgrid() {
    return (

        <Grid container spacing={1}>

            <Grid item xs={12} sm={12} md={4}>
                <Button variant="contained" fullWidth>
                    1
                </Button>
            </Grid>


            <Grid item xs={12} sm={12} md={4}>
                <Button variant="contained" fullWidth>
                    2
                </Button>
            </Grid>


            <Grid item xs={12} sm={12} md={4}>
                <Button variant="contained" fullWidth>
                    3
                </Button>
            </Grid>
        </Grid>


    )
}

export default Appgrid;
