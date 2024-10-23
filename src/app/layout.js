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
  favicon: "./favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Ekai: Making knowledge sharing effortless"
          data-rh="true"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap"
          rel="stylesheet"
        />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="DYrgJTb9PsmmkKONu3nzbaoInNcmWLfUyC9d_WYQ1l4"
        />
        <meta
          property="og:title"
          content="Ekai: Making knowledge sharing effortless"
        />
        <meta
          property="og:description"
          content="Ekai streamlines hybrid work tasks through secure AI technology, enabling your team to concentrate on their core responsibilities as AI manages documentation, coordination, and scheduling efficiently."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourekai.com" />
        <meta property="og:image" content="%PUBLIC_URL%/ekai-og-bg.png" />
        {/* <meta property="og:image" content="%app%/ekai-og-bg.png" /> */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:site_name" content="Ekai" />
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
        {/* <link rel='image' href="./ekai-og-bg.png" type="image" /> */}
        <title>{metadata.title}</title>
      </head>
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
