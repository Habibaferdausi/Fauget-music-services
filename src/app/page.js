import Categories from "@/components/Home/Categories";
import WithoutLogin from "@/components/Home/WithoutLogin";
import SideNav from "@/components/Shared/SideNav";


export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto">
     
     <SideNav>
      <div className="">
   <WithoutLogin/>
    <Categories/>
      </div>
    </SideNav>

  
    </main>
  );
}
