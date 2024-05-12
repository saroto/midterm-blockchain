import { Providers } from "./providers";
import DrawerAppBar from "./components/Appbar";
import { Box } from "@mui/material";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex">
        <Providers>
          <DrawerAppBar />
          <Box sx={{ marginTop: "60px" }}>{children}</Box>
        </Providers>
      </body>
    </html>
  );
}
