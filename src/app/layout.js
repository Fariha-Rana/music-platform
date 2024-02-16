import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import AuthProvider from "@/context/authContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music platform",
  description: "Listen your favorite music online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
