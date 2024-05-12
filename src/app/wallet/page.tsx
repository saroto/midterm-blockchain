"use client";
import { Box, Button, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import WalletTable from "../components/WalletTable";
import React, { useState, useEffect } from "react";
import { CreateWallet } from "../api/wallet";
import useSWR, { mutate } from "swr";
import ICreateWallet from "../interface/wallet";
import AddTransaction from "../components/AddTransaction";
import { toast } from "react-toastify";
export default function WalletPage() {
  const { data, error } = useSWR("wallets", CreateWallet);

  const [walletData, setWalletData] = useState<ICreateWallet | null>(null);

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
  return (
    <Box
      sx={{
        paddingBlock: "30px",
        paddingInline: "30px",
      }}
    >
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
      <Box sx={{ paddingTop: "20px", paddingInline: "10px" }}>
        {" "}
        <WalletTable rows={walletData} />
      </Box>
      <Box sx={{ paddingTop: "20px", paddingInline: "10px" }}>
        {walletData ? <AddTransaction walletData={walletData} /> : null}
      </Box>
    </Box>
  );
}
