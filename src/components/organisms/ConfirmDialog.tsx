import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, Paper, Slide } from '@material-ui/core/';
import { TransitionProps } from '@material-ui/core/transitions';

const useStyles = makeStyles(theme => ({
  selectedImage: {
    width: '100%'
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmDialog = ({
  open,
  setOpen
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          まじんぶーの丼を購入しますか？
        </DialogTitle>
        <DialogContent>
          <Paper variant="outlined">
            <img
              className={classes.selectedImage}
              src="https://firebasestorage.googleapis.com/v0/b/membershipshoppingsite.appspot.com/o/shops%2FPDRsO7bfoMTEj03fCKJX%2FYcgt6yoysuBSwxCJfsGo%2Fd77973c6-13c7-4df2-b1be-db26c50b06ab.jpeg?alt=media&token=a252f3d9-20db-49dc-b245-b4f66ddf7fbe"
              alt="選択した商品の画像"
            />
          </Paper>
          <DialogContentText id="alert-dialog-slide-description">
            ここになんらかの説明がなされます。ここになんらかの説明がなされます。ここになんらかの説明がなされます。ここになんらかの説明がなされます。ここになんらかの説明がなされます。ここになんらかの説明がなされます。ここになんらかの説明がなされます。ここになんらかの説明がなされます。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            戻る
          </Button>
          <Button onClick={handleClose} color="primary">
            購入する（購入とは少し違う）
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmDialog;
