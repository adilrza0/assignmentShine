import Image from "next/image";
import Sidebar from "./Components/Sidebar";
import Themes from "./Components/Themes";

export default function Home() {
  return (
    <div className='flex'>
        <Sidebar/>
        <Themes/>

    </div>
  );
}
