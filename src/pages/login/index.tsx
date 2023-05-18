import {
  Container,
  Button,
  Grid,
  Box,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import React from "react";

export const LoginPage: React.FC<{}> = () => {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography variant="h5">Iniciar sesión</Typography>
            <Box component="form">
              <TextField
                fullWidth
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                required
              />
              <TextField fullWidth label="Password" sx={{ mt: 1.5, mb: 1.5 }} />
              <Button fullWidth type="submit">
                Iniciar sesión
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
