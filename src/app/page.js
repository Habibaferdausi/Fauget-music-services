import BannerLayout from "@/components/Home/BannerLayout";
import Categories from "@/components/Home/Categories";
import LoggedBanner from "@/components/Home/LoggedBanner";

import SideNav from "@/components/Shared/SideNav";


export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto">
     
     <SideNav>
  <BannerLayout/>
    <Categories/>
      
    </SideNav>

  
    </main>
  );
}
