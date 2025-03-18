import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Hero from "~/components/hero";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex justify-center">
        <div className="max-w-6xl grow flex gap-10 grid grid-cols-4">
          <div className="flex flex-col items-center py-6">
            <div className="w-20 text-teal-500">
              <CheckCircleIcon />
            </div>
            <span className="text-teal-500 font-bold">React</span>
          </div>
          <div className="flex flex-col items-center py-6">
            <div className="w-20 text-teal-500">
              <CheckCircleIcon />
            </div>
            <span className="text-teal-500 font-bold">ASP.NET Web API</span>
          </div>
          <div className="flex flex-col items-center py-6">
            <div className="w-20 text-teal-500">
              <CheckCircleIcon />
            </div>
            <span className="text-teal-500 font-bold">SQL Server</span>
          </div>
          <div className="flex flex-col items-center py-6">
            <div className="w-20 text-teal-500">
              <CheckCircleIcon />
            </div>
            <span className="text-teal-500 font-bold">CRM</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4">
        
      </div>
    </>
  );
}
