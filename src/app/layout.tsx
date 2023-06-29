import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import LayoutProvider from "./layoutProvider";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "UOLEDTech",
  description: "UOLEDTech test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sourceCodePro.className}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
