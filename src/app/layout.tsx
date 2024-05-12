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
      <body className="flex flex-col">
        <Providers>
          <DrawerAppBar />
          <Box sx={{ flexGrow: 1 }}>{children}</Box>
        </Providers>
      </body>
    </html>
  );
}
