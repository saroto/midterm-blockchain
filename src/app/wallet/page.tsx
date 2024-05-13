"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import WalletTable from "../components/WalletTable";
import React, { useState, useEffect } from "react";
import { CreateWallet } from "../api/wallet";
import useSWR, { mutate } from "swr";
import ICreateWallet from "../interface/wallet";
import AddTransaction from "../components/AddTransaction";
import { getBalance } from "../api/transaction";
import { toast } from "react-toastify";
import { IBalance } from "../interface/transaction";
export default function WalletPage() {
  const { data, error } = useSWR("wallets", CreateWallet);
  const { data: balanceData, error: balanceError } = useSWR(
    "balances",
    getBalance
  );

  const [walletData, setWalletData] = useState<ICreateWallet | null>(null);
  const [myBalance, setMyBalance] = useState<IBalance | null>(null);
  const [balance, setBalance] = useState<number | null>(null);

  const handleBalanceChange = (newBalance: number | null) => {
    setBalance(newBalance);
  };

  useEffect(() => {
    const storedWalletData = localStorage.getItem("walletData");
    if (storedWalletData) {
      setWalletData(JSON.parse(storedWalletData));
    }
  }, []);

  useEffect(() => {
    if (walletData) {
      localStorage.setItem("walletData", JSON.stringify(walletData));
    }
  }, [walletData]);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const balances = await getBalance(walletData?.public_key ?? "");
        setMyBalance(balances.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (walletData?.public_key) {
      fetchBalance();
    }
  }, [walletData, balance]);
  const handleClick = async () => {
    try {
      const newWallet = await CreateWallet();
      console.log("new wallet", newWallet.data);
      setWalletData(newWallet.data);
      toast.success("Wallet created successfully");
    } catch (error) {
      console.error(error);
      toast.error(`Failed to create wallet`);
    }
  };

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;
  if (!balanceData) return <div>Loading...</div>;
  console.log("balance dafta", balanceData);
  console.log("add", walletData?.public_key);
  return (
    <Box
      sx={{
        paddingBlock: "30px",
        paddingInline: "30px",
      }}
    >
      {!walletData && (
        <Button
          variant="contained"
          startIcon={<AddCircleIcon />}
          onClick={handleClick}
          sx={{
            color: "white",
            fontSize: "16px",
            paddingInline: "20px",
            backgroundColor: "black",
            marginInline: "10px",
            "&:hover": {
              backgroundColor: "grey",
            },
          }}
        >
          Create Wallet
        </Button>
      )}
      <Box
        sx={{ display: "flex", paddingInline: "10px", paddingBlock: "10px" }}
      >
        <Typography variant="h3">My Balance : </Typography>
        <Typography variant="h3" sx={{ paddingInline: "10px" }}>
          {myBalance?.balance || 0}
        </Typography>
      </Box>
      <Box sx={{ paddingTop: "20px", paddingInline: "10px" }}>
        {" "}
        <WalletTable rows={walletData} />
      </Box>
      <Box sx={{ paddingTop: "20px", paddingInline: "10px" }}>
        {walletData ? (
          <AddTransaction
            walletData={walletData}
            onBalanceChange={handleBalanceChange}
          />
        ) : null}
      </Box>
    </Box>
  );
}
