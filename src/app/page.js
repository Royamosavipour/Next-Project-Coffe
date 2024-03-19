import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Articles from "@/components/templates/index/articles/Articles";
import Banner from "@/components/templates/index/baner/Banner";
import Lates from "@/components/templates/index/latest/Latest";
import Promote from "@/components/templates/index/promote/Promote";


export default function Home() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Lates/>
      <Promote/>
      <Articles/>
      <Footer/>
    
    
    </>
  )
}
