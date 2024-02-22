import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/context/authContext";
const inter = Inter({ subsets: ["latin"] });
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: "Music platform",
  description: "Listen your favorite music online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800 `}>
        <AuthProvider>
          <Navbar />
          <ToastContainer/>
          {children}
        </AuthProvider>
        <div className="mb-0 ">
        <Footer/>
        </div>
      </body>
    </html>
  );
}
