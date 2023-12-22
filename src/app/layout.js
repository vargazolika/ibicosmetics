import { Inter } from "next/font/google";
import "../../style/index.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ibi kozmetika",
  description: "kozmetika",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
