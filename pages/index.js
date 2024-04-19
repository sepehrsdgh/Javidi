import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SmallRec from "../components/shapes/SmallRec";
import CircleBorder from "../components/shapes/CircleBorder";
import BlackCardRoyal from "../components/cards/BlackCardRoyal";
import { ArrowDown, Calendar1, Instagram } from "iconsax-react";
import ArrowLink from "../components/shapes/ArrowLink";
import ProjectCard from "../components/cards/ProjectCard";
import BlackStatictsCard from "../components/cards/BlackStatictsCard";
import WhyUsCard from "../components/cards/WhyUsCard";
import CircleWithArrow from "../components/shapes/CircleWithArrow";
import BlogCard from "../components/cards/BlogCard";
import Link from "next/link";
import Icon from "../components/shapes/Icon";
import FotterInfo from "../components/text/FotterInfo";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <FotterInfo />
    </div>
  );
}
