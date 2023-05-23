import { Container, Button } from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../components";

export const HomePage: React.FC<{}> = () => {
    return (
    <Container maxWidth="xl">
        <HeaderComponent 
        title="Aromaterapia" 
        description="Descubre el mágico mundo de las esencias"
        element={<Button fullWidth variant="contained">Velas</Button>}
        />
    </Container>
    );
};