import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles
} from '@material-ui/core';

const MenuCard = () => {
  const useStyles = makeStyles(theme => ({
    card: {
      display: 'flex',
      flexDirection: 'row'
    },
    cardMedia: {
      width: '40%',
      paddingTop: '190px'
    },
    cardContent: {
      maxWidth: '60%',
      flexGrow: 1
    },
    menuName: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    menuDescription: {}
  }));
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="https://firebasestorage.googleapis.com/v0/b/membershipshoppingsite.appspot.com/o/shops%2FPDRsO7bfoMTEj03fCKJX%2FYcgt6yoysuBSwxCJfsGo%2Fd77973c6-13c7-4df2-b1be-db26c50b06ab.jpeg?alt=media&token=a252f3d9-20db-49dc-b245-b4f66ddf7fbe"
        title="shop image"
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.menuName} variant="h6" component="h5">
          牛たん とろろ 麦めし ねぎし デリキッチン西新宿店
        </Typography>
        <Typography className={classes.menuDescription}>
          牛たん とろろ 麦めし ねぎし デリキッチン西新宿店牛たん とろろ 麦めし
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
