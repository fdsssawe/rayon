import Image from "next/image";


export default function Home() {
  return (
    <div className="h-[90vh] w-full flex text-text">
      <div className="h-full w-full border-2 border-red-600 flex justify-center items-center flex-col">
        <div className="">
        <h1 className="text-[4.8rem] font-[700] leading-[4rem]">Trade Skills <br/>Build <p className="bg-gradient-to-r from-primary via-accent to-secondary inline-block text-transparent bg-clip-text leading-[7rem]">Community</p></h1>
        <h2 className=" leading-[2rem]">Connect with your community and share your skills.<br/> HandyNeighbor is your local hub for skill swapping and building connections.</h2>
        <div className="flex justify-center items-center w-fit border-2">
          <button className="bg-secondary/30 p-[0.8rem] px-6 rounded-[.41rem] my-2">Get Started</button>
          <button className="bg-primary px-6 p-[0.8rem] rounded-[.41rem] m-2">Learn More</button>
        </div>
        </div>
      </div>
      <div className="h-full w-full border-2 border-blue-600">

      </div>
    </div>
  );
}
