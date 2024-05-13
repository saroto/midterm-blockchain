import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { getEachTransaction } from "../api/transaction";
import { Response } from "../interface/transaction";
import { Box } from "@mui/material";

export default function TransactionDialog({
  onOpen,
  onClose,
  hash,
}: {
  onOpen: boolean;
  hash: string;
  onClose: () => void;
}) {
  const [transaction, setTransaction] = React.useState<Response>();

  React.useEffect(() => {
    if (hash) {
      getEachTransaction(hash).then((data) => {
        console.log(data);
        setTransaction(data);
      });
    }
  }, [hash]);
  console.log("transaction key", transaction?.data.tx.pub_key);
  return (
    <div>
      {/* <Button variant="contained" onClick={handleClickOpen}>
        Open dialog
      </Button> */}

      <Dialog open={onOpen} onClose={onClose} maxWidth="lg">
        <DialogTitle>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Transaction</Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Amount:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#4f9bd9",
                fontWeight: "normal",
                paddingInline: "10px",
              }}
            >
              {transaction?.data.tx.amount}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Sender:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#4f9bd9",
                fontWeight: "normal",
                paddingInline: "10px",
              }}
            >
              {transaction?.data.tx.from_address}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Hash:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#4f9bd9",
                fontWeight: "normal",
                paddingInline: "10px",
              }}
            >
              {transaction?.data.tx.msg}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              PubKey:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#4f9bd9",
                fontWeight: "normal",
                paddingInline: "10px",
              }}
            >
              {transaction?.data.tx.pub_key}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Signature:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#4f9bd9",
                fontWeight: "normal",
                paddingInline: "10px",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                width: "100%", // Add this line
                overflow: "auto", // Add this line
              }}
            >
              {transaction?.data.tx.signature}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Status:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#4f9bd9",
                fontWeight: "normal",
                paddingInline: "10px",
              }}
            >
              {transaction?.data.tx.status}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Reciver:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#4f9bd9",
                fontWeight: "normal",
                paddingInline: "10px",
              }}
            >
              {transaction?.data.tx.to_address}
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
