import { Container, Button } from "@mui/material";
import React from "react";

export const HomePage: React.FC<{}> = () => {
    return (
        <Container sx={{mt: 9}}maxWidth="xl">
        <Button fullWidth variant="contained">
            Estamos en home
            </Button>
      </Container>
    );
};