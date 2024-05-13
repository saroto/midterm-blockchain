"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { toast } from "react-toastify";
import { Validation } from "../api/vaildation";
import { useEffect } from "react";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Wallet", "Blocks", "Transaction"];

const handleValidation = async () => {
  const data = await Validation().then((data) => data);
  if (data) {
    toast.success("Blockchain is valid");
  }
};

export default function DrawerAppBar(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex", zIndex: 0 }}>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: "white", zIndex: 0 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "black",
            }}
          >
            DUMA - BLOCKCHAIN
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, color: "black" }}>
            {navItems.map((item) => (
              <Link href={`/${item.toLowerCase()}`} key={item}>
                <Button
                  variant="contained"
                  key={item}
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
                  {item}
                </Button>
              </Link>
            ))}

            <Button
              variant="contained"
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
              onClick={handleValidation}
            >
              Verfication
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
