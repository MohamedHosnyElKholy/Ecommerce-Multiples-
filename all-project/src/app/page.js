import Arrival from "./_components/arrival/Arrival";
import Header from "./_components/Header/Header";
import Best from "./_components/BestSaler/page";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Offers from "./_components/Offers/Offers";


export default function Home() {
  return (
    <div >
      <Header/>

      <Best/>


      <Offers/>

      <Arrival/>


    </div>
  );
}
