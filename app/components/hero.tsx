export default function Hero() {
  return (
    <div className="flex justify-center bg-blue-grey-800">
      <div className="max-w-6xl grow flex gap-6 flex-wrap sm:flex-nowrap animate-fade-in">
        <div className="w-full flex flex-col justify-center gap-8 my-5 px-5">
          <h2 className="text-white text-4xl font-serif">Hi, I'm <span className="text-teal-300">Joel</span></h2>
          <p className="text-white text-lg">
            I’m a <span className="text-teal-300 font-bold">Full Stack Software Developer</span> with a passion for building robust business applications with React, ASP.NET Web API and SQL Server.
          </p>
        </div>
        <div className="w-full bg-[url(/its-me-2.webp)] h-120 bg-cover bg-center">

        </div>
      </div>
    </div>
  );
}