import "./globals.css";
import ReduxProvider from "./feature/ReduxProvider";
import { Inter } from "next/font/google";
import MyNavbar from "./_components/MyNavbar.jsx";
import MyFotter from "./_components/MyFotter.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <MyNavbar />
          {children}
          <MyFotter />
        </ReduxProvider>
      </body>
    </html>
  );
}
