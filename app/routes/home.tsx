import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Hero from "~/components/hero";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Skills from "~/components/skills";
import AboutMe from "~/components/about-me";
import Portfolio from "~/components/portfolio";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <AboutMe />
      <Portfolio />
    </>
  );
}
