import Link from "next/link";
import HomeSlider from "../app/components/extrafiel/homeSlider";
import HomeSliderB from "../app/components/extrafiel/HomeSliderB";
import { IoGameController } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import Head from 'next/head';
export const metadata = {title:'PC Games Market', description: 'This is the home page of the pc games market store'};

export default function Home() {
  return (
    <div style={{overflowX:'hidden',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',}}>
      <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}><HomeSlider/></div>
      <div style={{width:'100%',overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center'}}><HomeSliderB/></div>
      
      <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Link href="/product"><button className="homeHTAGB" style={{background:'#00055',}}><IoGameController />Games Page</button></Link>
      <Link href="/contactA"><button className="homeHTAGB" style={{background:'#00055',}}><IoCall />contact us</button></Link>
      </div>
      <Head>
    <title>متجر الألعاب PC Games Market - شراء أفضل الألعاب</title>
    <meta name="PC Games Market" content="تسوق من متجر الألعاب واحصل على أفضل الألعاب بأفضل الأسعار."  />
</Head>
    </div>
  );
}


