export default function Hero() {
  return (
    <div className="flex justify-center bg-gray-600">
      <div className="max-w-6xl grow flex gap-6">
        <div className="w-full flex flex-col justify-center gap-8">
          <h2 className="text-white text-4xl font-serif">Hi, I'm Joel</h2>
          <p className="text-white text-lg">
            I’m a Full Stack Software Developer with a passion for building robust business applications with React, ASP.NET Web API and SQL Server.
          </p>
        </div>
        <div className="w-full bg-[url(/its-me-2.webp)] h-120 bg-cover bg-center">

        </div>
      </div>
    </div>
  );
}