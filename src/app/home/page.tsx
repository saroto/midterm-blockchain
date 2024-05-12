import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px",
          gap: "300px",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{ color: "black", fontWeight: "lighter", fontFamily: "Arial" }}
          >
            Amplify your
          </Typography>
          <Typography
            variant="h2"
            sx={{ color: "black", fontWeight: "lighter", fontFamily: "Arial" }}
          >
            blockchain team
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontWeight: "lighter",
              fontFamily: "Arial",
              paddingBlock: "20px",
            }}
          >
            Mobile, Blockchain SSKH Development
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography sx={{ marginRight: "20px" }}>
              Click here to Continue
            </Typography>
            <Button
              variant="contained"
              sx={{ color: "white", backgroundColor: "black" }}
            >
              Wallet
            </Button>
          </Box>
        </Box>
        <Box>
          <Image src="/block3.png" alt="Block" width={700} height={700} />
        </Box>
      </Box>
    </>
  );
}
