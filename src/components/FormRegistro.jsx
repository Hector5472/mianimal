import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'

function FormRegistro() {
    const [data, setDatos] = useState({ name: '', breed: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChangeName = (e) => {
        setDatos({
            ...data,
            name: e.target.value
        })
    }

    const handleChangeBreed = (e) => {
        setDatos({
            ...data,
            breed: e.target.value
        })
    }

    return (
        <Container>
            <Paper elevation={24} square={false} sx={{ textAlign: 'center' }}>
                <Typography variant='h6' color='secondary' sx={{ mt: 2, mb: 2 }}>
                    Registra tu mascota
                </Typography>

                <Box component='form' onSubmit={handleSubmit}>
                    <Grid container spacing={0}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                required
                                label='Nombre de mascota'
                                variant='outlined'
                                fullWidth
                                value={data.name}
                                onChange={handleChangeName}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                label='Raza'
                                variant='outlined'
                                fullWidth
                                value={data.breed}
                                onChange={handleChangeBreed}
                            />
                        </Grid>

                        <Grid size={12}>
                            <Button type='submit' variant='outlined' fullWidth>
                                Registrar
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    )
}

export default FormRegistro
