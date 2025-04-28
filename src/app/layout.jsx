import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./page.css"
import Navbaar from "@/Component/Navbaar";
import { Provider } from "./Context";
import Footer from "@/Component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "This is Portfolio of Mohit Khudia",
  icons : {
    icon : '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Provider>
        <Navbaar/>
        {children}
        <Footer/>
        </Provider>
      </body>
    </html>
  );
}
