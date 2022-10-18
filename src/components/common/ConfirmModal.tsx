import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

type PropTypes = {
  title: string;
  open: boolean;
  confirmTitle: string;
  handleClose: (reason?: string) => void;
};

export const ConfirmModal: React.FC<PropTypes> = ({ title, open, handleClose, children, confirmTitle }) => {
  return (
    <Dialog
      open={open}
      onClose={(e, reason) => handleClose(reason)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>취소</Button>
        <Button onClick={() => handleClose('confirm')} autoFocus>
          {confirmTitle}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
