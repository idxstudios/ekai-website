import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ekai: Making knowledge sharing effortless",
  description: "Ekai: Making knowledge sharing effortless",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ekai: Making knowledge sharing effortless</title>
        <link rel="icon" type="image/icon" href="./favicon.ico"></link>
      </head>
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar />

        <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
