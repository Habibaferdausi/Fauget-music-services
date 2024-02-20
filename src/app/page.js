import LoggedBanner from "@/components/Home/loggedBanner";
import SideNav from "@/components/Shared/SideNav";


export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto">
     
     <SideNav>
      <div className="text-center">
    <LoggedBanner/>
      </div>
    </SideNav>

  
    </main>
  );
}
