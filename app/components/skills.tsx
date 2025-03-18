import { CheckCircleIcon } from "@heroicons/react/16/solid";

export default function Skills() {
  return (
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
  );
}