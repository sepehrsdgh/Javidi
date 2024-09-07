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
      <div className="bg-gray-900 text-white min-h-screen">
        {/* Header Section */}
        <header className="flex justify-between items-center p-6">
          <div className="text-xl font-bold">FermiDirac</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#what-we-do" className="hover:text-gray-400">
                  What we do
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-400">
                  Proj
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-gray-400">
                  About us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button className="bg-white text-gray-900 px-4 py-2 rounded-full">
            Explore
          </button>
        </header>

        {/* Main Section */}
        <main className="text-center my-20">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to FermiDirac
          </h1>
          <p className="mt-4 text-lg">
            Discover our civil engineering services and projects.
          </p>
          <button className="mt-8 bg-white text-gray-900 px-6 py-3 rounded-full">
            View jobs
          </button>
        </main>

        {/* Values Section */}
        <section className="my-20">
          <div className="text-center mb-10">
            <Image
              src="/path-to-your-image.png"
              alt="Logo"
              width={128}
              height={128}
              className="mx-auto"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-around text-center space-y-6 md:space-y-0">
            <div>
              <h3 className="text-2xl font-semibold">Innovation-driven</h3>
              <p className="mt-2">
                We prioritize innovation and sustainability in every project.
                Join us in shaping the future.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Community-focused</h3>
              <p className="mt-2">
                At CivilEngage, work remotely and efficiently. Spend more time
                with loved ones.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Sustainable solutions</h3>
              <p className="mt-2">
                We believe in continuous learning and personal growth for all
                team members.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="my-20 text-center">
          <h2 className="text-3xl font-semibold">About CivilEngage</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            We aim to revolutionize civil engineering through innovative
            solutions and client-centric services.
          </p>
        </section>

        {/* Current Openings Section */}
        <section className="my-20">
          <h2 className="text-3xl font-semibold text-center">
            Current Openings
          </h2>
          <div className="flex justify-center mt-8 space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full">
              All
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-full">
              Engineering
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-full">
              Design
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-full">
              Architecture
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-full">
              Management
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Architectural Designer</h3>
              <p className="mt-2">Design services</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Project Coordinator</h3>
              <p className="mt-2">Project management</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Junior Architect</h3>
              <p className="mt-2">Architecture services</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Technical Specialist</h3>
              <p className="mt-2">Innovative Solutions</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Data Analyst</h3>
              <p className="mt-2">Financial planning</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Project Manager</h3>
              <p className="mt-2">Sales and operations</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">UX Designer</h3>
              <p className="mt-2">Marketing strategies</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">HR Specialist</h3>
              <p className="mt-2">Operational</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="my-20 text-center">
          <h2 className="text-3xl font-semibold">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div>
              <Image
                src="/team-1.jpg"
                alt="Evan Reed"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">Evan Reed</h3>
              <p className="mt-2">CEO</p>
            </div>
            <div>
              <Image
                src="/team-2.jpg"
                alt="Nina Patel"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">Nina Patel</h3>
              <p className="mt-2">UX/UI Designer</p>
            </div>
            <div>
              <Image
                src="/team-3.jpg"
                alt="Oscar Rivera"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">Oscar Rivera</h3>
              <p className="mt-2">Project Manager</p>
            </div>
            <div>
              <Image
                src="/team-4.jpg"
                alt="Maya Singh"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">Maya Singh</h3>
              <p className="mt-2">Data Analyst</p>
            </div>
            <div>
              <Image
                src="/team-5.jpg"
                alt="Liam Cooper"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">Liam Cooper</h3>
              <p className="mt-2">CTO</p>
            </div>
            <div>
              <Image
                src="/team-6.jpg"
                alt="Sophie Lewis"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">Sophie Lewis</h3>
              <p className="mt-2">Software Developer</p>
            </div>
            <div>
              <Image
                src="/team-7.jpg"
                alt="Ella Carter"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">Ella Carter</h3>
              <p className="mt-2">Front End Developer</p>
            </div>
            <div>
              <Image
                src="/team-8.jpg"
                alt="Max Wright"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">Max Wright</h3>
              <p className="mt-2">COO</p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800 p-6 text-center">
          <p className="text-lg font-semibold">CivilEngage</p>
          <p className="mt-2">Building Digital Solutions for Civil</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#" className="hover:text-gray-400">
              Office Branch
            </a>
            <a href="#" className="hover:text-gray-400">
              Careers
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact Us
            </a>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-400">
              Copyright Information
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
