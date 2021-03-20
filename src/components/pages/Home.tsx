import React from 'react';
import ShopCard from '../molecules/ShopCard';
import { Container, Grid, makeStyles, useTheme } from '@material-ui/core';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));
const cards = [1, 2, 3, 4];

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);

  return (
    <>
      <Header />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <ShopCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Home;
