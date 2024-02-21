import Categories from "@/components/Home/Categories";
import LoggedBanner from "@/components/Home/LoggedBanner";

import SideNav from "@/components/Shared/SideNav";


export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto">
     
     <SideNav>
      <div className="">
   <LoggedBanner/>
    <Categories/>
      </div>
    </SideNav>

  
    </main>
  );
}
