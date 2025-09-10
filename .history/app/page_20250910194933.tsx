import EwayPayButton from "@/components/EwayPayButton";
// import { Link } from "@heroui/link";
import { Navbar } from "@heroui/navbar";


export default function Home() {
  return (
    // <main lang="en">
      <Navbar />
      <div className="flex">
        {/* <h1 className="text-2xl font-bold">eWAY Sandbox Test</h1> */}
        <EwayPayButton />
      </div>


    </main>
  );
}

