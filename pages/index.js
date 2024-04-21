import Image from "next/image";
import FotterInfo from "../components/text/FotterInfo";
import BlackCardRoyal from "../components/cards/BlackCardRoyal";
import TopSection from "../components/MainPage/TopSection";
import GreenBesideBlack from "../components/text/GreenBesideBlack";
import { allDetail, allP } from "../utils/officeData";
import StepCard from "../components/cards/StepCard";
import FourSteps from "../components/MainPage/FourSteps";
import AboutUsSec from "../components/MainPage/AboutUsSec";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <TopSection />
      <FourSteps />
      <AboutUsSec />
    </div>
  );
}
