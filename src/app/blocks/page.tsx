"use client";
import { Box } from "@mui/material";
import BlockTable from "../components/BlockTable";
import { BASE_URL } from "../../../url";
import { useEffect, useState } from "react";
import { GetBlock } from "../api/blocks";
import useSWR from "swr";
export default function BlocksPage() {
  const { data, error } = useSWR("blocks", GetBlock);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);
  const dataBlock = data.data;
  console.log("block", data);
  return (
    <>
      <Box sx={{ padding: "30px" }}>
        <BlockTable rows={dataBlock} />
      </Box>
    </>
  );
}
