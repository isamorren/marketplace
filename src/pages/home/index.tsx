import React from "react";
import { Box, Button, CircularProgress, Container, Grid } from "@mui/material";
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";

export const HomePage: React.FC<{}> = () => {
  const [allCharacters, setAllCharacters] = React.useState<
    TypeCharacter[] | null
  >(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page: 1 })
      .then((r) => {
        setAllCharacters(r.data.results);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="Aromaterapia"
        description="Descubre el mágico mundo de las esencias"
        element={
          <Button fullWidth variant="contained">
            Velas
          </Button>
        }
      />
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <div>
          {allCharacters!.length !== 0 ? (
            <Grid sx={{ my: 2 }} container spacing={2} direction="row">
              {allCharacters!.map((character) => (
                <Grid item xs={3}>
                  <CardComponent
                    key={character.id}
                    image={character.image}
                    name={character.name}
                    species={character.species}
                    status={character.status}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            "No data"
          )}
        </div>
      )}
    </Container>
  );
};
