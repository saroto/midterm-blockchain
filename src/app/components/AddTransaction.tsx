import { TextField, Box, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ICreateTransaction from "../interface/transaction";
import ICreateWallet from "../interface/wallet";
import { Wallet } from "@mui/icons-material";
import useSWR, { mutate } from "swr";
import { createTransaction } from "../api/transaction";
import TransactionTable from "./TransactionTable";
import { useState } from "react";
import { ITransaction } from "../interface/transaction";
import { toast } from "react-toastify";
import TransactionCard from "./TransactionCard";
interface AddTransactionProps {
  transactions?: ICreateTransaction;
  walletData: ICreateWallet | null;
  onBalanceChange: (balance: number | null) => void;
}
export default function AddTransaction({
  walletData,
  transactions,
  onBalanceChange,
}: //   balance,
//   setBalance,
AddTransactionProps) {
  const secret_key = walletData?.secret_key;
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactionData, setTransactionData] = useState<ITransaction | null>(
    null
  );
  onBalanceChange(transactionData?.amount ?? null);
  console.log("transaction", transactionData);
  if (walletData === null) {
    return;
  }
  const handleClick = async () => {
    try {
      const transaction = await createTransaction({
        to_address: toAddress,
        secret_key: secret_key ?? "",
        amount: amount ?? 0,
      });
      setTransactionData(transaction.data.tx);
      mutate("balances");
      console.log("Transaction created", transaction);
      toast.success("Transaction created Successfully");
    } catch (error) {
      console.error("Failed to create transaction", error);
      toast.error("Failed to create transaction");
    }
  };
  console.log("transc wall", walletData);
  const validateAddress = walletData?.public_key;
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box>
          <TextField
            required
            id="public-key"
            label="To Address"
            variant="outlined"
            fullWidth
            value={toAddress}
            // onChange={(e) => {
            //   const value = e.target.value;
            //   if (value == validateAddress) {
            //     toast.error("To address cannot be your address");
            //     return;
            //   } else toast.success("To address is validated");
            //   setToAddress(value);
            // }}
            onChange={(e) => {
              const value = e.target.value;
              setToAddress(value);
            }}
          />
        </Box>
        <Box>
          <TextField
            required
            id="amount"
            label="Amount"
            variant="outlined"
            type="number"
            fullWidth
            value={amount}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value > 100) {
                toast.error("Amount cannot be more than 100");
                return;
              }
              if (value === 0) {
                toast.error("Amount cannot be 0");
                return;
              }
              setAmount(value);
            }}
            inputProps={{ min: 0, max: 100 }}
          />
        </Box>
      </Box>{" "}
      <Box sx={{ paddingBlock: "20px" }}>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            color: "white",
            fontSize: "16px",
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "grey",
            },
          }}
        >
          Create Transaction
        </Button>
      </Box>
      <Box>
        {/* <TransactionTable transactions={transactionData} /> */}
        {transactionData ? (
          <TransactionCard transactions={transactionData} />
        ) : null}
      </Box>
    </>
  );
}
