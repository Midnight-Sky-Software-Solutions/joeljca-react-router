import { CheckCircleIcon } from "@heroicons/react/16/solid";
import type { ReactNode } from "react";

export default function Skills() {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl grow grid sm:grid-cols-2 md:grid-cols-4">
        <Skill>React</Skill>
        <Skill>ASP.NET Web API</Skill>
        <Skill>SQL Server</Skill>
        <Skill>CRM</Skill>
      </div>
    </div>
  );
}

function Skill({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center py-6">
      <div className="w-20 text-teal-500">
        <CheckCircleIcon />
      </div>
      <span className="text-teal-500 font-bold py-2">{children}</span>
    </div>
  )
}