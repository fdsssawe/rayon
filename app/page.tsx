import Image from "next/image";
import hero from "../assets/hero.svg";
import MapContainer from "@/components/MapContainer";

export default function Home() {
  return (
    <div className="h-full w-full flex text-text flex-col items-center">
      <div className="w-full flex flex-row">
      <div className="h-full w-full flex justify-center items-center flex-col">
        <div className="lg:ml-10">
        <h1 className="text-[4.8rem] font-[700] leading-[4rem]">Trade Skills <br/>Build <p className="bg-gradient-to-r from-primary via-accent to-secondary inline-block text-transparent bg-clip-text leading-[7rem]">Community</p></h1>
        <h2 className=" leading-[2rem]">Connect with your community and share your skills.<br/> Neighbor Helped is your local hub for skill swapping and building connections.</h2>
        <div className="flex justify-center items-center w-fit ">
          <button className="bg-secondary/30 p-[0.8rem] px-6 rounded-[.41rem] my-2">Get Started</button>
          <button className="bg-primary px-6 p-[0.8rem] rounded-[.41rem] m-2">Learn More</button>
        </div>
        </div>
      </div>
      <div className="h-full w-full items-start lg:mt-10 flex">
        <Image src={hero} alt="Hero Image" className="" />
      </div>
      </div>
      <MapContainer/>
    </div>
  );
}
