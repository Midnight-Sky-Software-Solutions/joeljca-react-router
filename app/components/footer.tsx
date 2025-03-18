import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="flex justify-center bg-blue-grey-800 mt-16 py-8">
      <div className="max-w-6xl grow grid grid-cols-4">
        <div className="col-span-2 text-white flex flex-col gap-3">
          <div className="font-bold">Midnight Sky Software Solutions Ltd.</div>
          <div>I was born to run~</div>
        </div>
        <div className="text-white flex flex-col gap-3">
          <Link to="https://www.linkedin.com/in/joel-alexander-johnston/" target="blank" className="font-bold">LinkedIn</Link>
          <Link to="https://www.upwork.com/freelancers/~011f757c30fa5d1800" target="blank" className="font-bold">UpWork</Link>
        </div>
        <div className="text-white flex flex-col gap-3">
          <div className="font-bold">Contact</div>
          <Link to="mailto:me@joelj.ca" className="font-bold text-teal-500">me@joelj.ca</Link>
        </div>
      </div>
    </div>
  );
}