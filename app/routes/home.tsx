import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Hero from "~/components/hero";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

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
      <div className="flex justify-center">
        <div className="max-w-6xl grow">
          <h2 className="text-4xl font-serif py-6">About Me</h2>
          <div className="flex flex-col gap-5">
            <p>
              Hi, I’m Joel, and I help businesses of all sizes build professional, user-friendly applications with Microsoft technologies.
              With years of experience in <strong>web development, database management, and digital solutions</strong>, I specialize in creating modern, efficient, and easy-to-manage web applications using React, ASP.NET, and SQL Server. From custom web applications to robust database solutions, I design and develop scalable, high-performance systems that meet your unique business needs. Whether you need a new application, an upgrade to your existing system, or database optimization, I ensure seamless functionality, security, and long-term maintainability.
            </p>
            <a href="mailto:me@joelj.ca" className="font-bold">📩 Ready to get started? Let’s talk!</a>
          </div>
        </div>
      </div>
    </>
  );
}
