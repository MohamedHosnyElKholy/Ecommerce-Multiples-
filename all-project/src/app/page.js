import Image from "next/image";
import Header from "./_components/Header/Header";
import Best from "./_components/BestSaler/page";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div >
      <Header/>
      <Best/>
    </div>
  );
}
