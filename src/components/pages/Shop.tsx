import React, { FC } from 'react';
import { Container, Grid, Box, makeStyles } from '@material-ui/core';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { useParams } from 'react-router';
import MenuCard from '../molecules/MenuCard';
import ConfirmDialog from '../organisms/ConfirmDialog';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));
type ParamTypes = {
  shop: string;
};
const cards = [1, 2, 3, 4];
const Shop: FC = props => {
  const classes = useStyles();
  let { shop } = useParams<ParamTypes>();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Header />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12}>
                <ConfirmDialog open={open} setOpen={setOpen} />
                <Box
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <MenuCard />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Shop;
