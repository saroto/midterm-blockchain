import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h2"
              sx={{
                color: "black",
                fontWeight: "lighter",
                fontFamily: "Arial",
              }}
            >
              Amplify your
            </Typography>
            <Image src="/dumal.png" alt="Block" width={100} height={100} />
          </Box>
          <Typography
            variant="h2"
            sx={{ color: "black", fontWeight: "lighter", fontFamily: "Arial" }}
          >
            Duma blockchain team
          </Typography>
          <Box sx={{ paddingTop: "10px" }}>
            <Typography
              variant="h5"
              sx={{
                color: "black",
                fontWeight: "lighter",
                fontFamily: "Arial",
                paddingBlock: "20px",
              }}
            >
              Mobile, Blockchain Duma Development
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
              <Link href="/wallet">
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    fontSize: "16px",
                    backgroundColor: "black",
                    "&:hover": {
                      backgroundColor: "grey",
                    },
                  }}
                >
                  Create Wallet
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box>
          <Image src="/block3.png" alt="Block" width={700} height={700} />
        </Box>
      </Box>
    </>
  );
}
