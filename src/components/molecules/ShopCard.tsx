import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const ShopCard = () => {
  const useStyles = makeStyles(theme => ({
    card: {
      display: 'flex',
      flexDirection: 'column'
    },
    cardMedia: {
      paddingTop: '190px'
    },
    cardContent: {
      flexGrow: 1
    },
    shopName: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }));
  const classes = useStyles();
  return (
    <Link to="/shops/1">
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://firebasestorage.googleapis.com/v0/b/membershipshoppingsite.appspot.com/o/shops%2FPDRsO7bfoMTEj03fCKJX%2Fe8a0de44-369c-4de9-a1e6-8c37feb8639f.jpeg?alt=media&token=c1237b74-a3cf-4c17-afbf-712723e0c34c"
          title="shop image"
        />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.shopName} variant="h6" component="h5">
            牛たん とろろ 麦めし ねぎし デリキッチン西新宿店
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ShopCard;
