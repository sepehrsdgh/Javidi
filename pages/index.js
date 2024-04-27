import Image from "next/image";
import FotterInfo from "../components/text/FotterInfo";
import BlackCardRoyal from "../components/cards/BlackCardRoyal";
import TopSection from "../components/MainPage/TopSection";
import GreenBesideBlack from "../components/text/GreenBesideBlack";
import { allDetail, allP } from "../utils/officeData";
import StepCard from "../components/cards/StepCard";
import FourSteps from "../components/MainPage/FourSteps";
import AboutUsSec from "../components/MainPage/AboutUsSec";
import FinalProjectCard from "../components/cards/FinalProjectCard/FinalProjectCard";
import AllProjects from "../components/MainPage/AllProjects";
import BlackStatictsCard from "../components/cards/BlackStatictsCard";
import Statics from "../components/MainPage/Statics";
import WhyUsCard from "../components/cards/WhyUsCard";
import WhyUsCards from "../components/MainPage/WhyUs/WhyUsCards";
import FinalWhyUs from "../components/MainPage/WhyUs/FinalWhyUs";
import ProjectCard from "../components/cards/FinalProjectCard/ProjectCard";
import BlogCard from "../components/cards/BlogCard";
import ImageAbove from "../components/layout/ImageAbove";
import AllBlog from "../components/MainPage/AllBlog";
import Icon from "../components/shapes/Icon";
import Footer from "../components/layout/Footer";
import { BoxRemove, CloseCircle } from "iconsax-react";
import Link from "next/link";
import BetaHead from "../components/layout/BetaHead";

export default function Home() {
  return (
    <>
      <BetaHead title="صفحه اصلی " />
      <div className="flex flex-col gap-8">
        <TopSection />
        <FourSteps />
        <AboutUsSec />
        <AllProjects />
        <Statics />
        <FinalWhyUs />
        <AllBlog />
        <Footer />
      </div>
    </>
  );
}
