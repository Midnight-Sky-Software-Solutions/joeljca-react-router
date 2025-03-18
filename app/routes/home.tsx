import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Hero from "~/components/hero";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Skills from "~/components/skills";
import AboutMe from "~/components/about-me";
import Portfolio from "~/components/portfolio";
import Footer from "~/components/footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Joel Alexander Johnston | Home" },
    { name: "description", content: "Developer - React | ASP.NET Web API | SQL Server | CRM" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}
