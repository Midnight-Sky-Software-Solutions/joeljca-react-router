import { motion } from "motion/react";

export default function Portfolio() {
  return (
    <motion.div 
      className="flex justify-center" 
      id="portfolio"
      initial={{ opacity: 0, translateZ: "-160px", rotateY: "87deg"  }}
      whileInView={{ opacity: 1, translateZ: 0, rotateY: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.0 },
      }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl grow mt-6 px-5">
        <h2 className="text-4xl font-serif py-6">Portfolio</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-[url(/strength-journal.png)] bg-cover bg-center h-100">
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-serif">Strength Journal</h3>
            <p>
              A strength logging app built with React Router, ASP.NET Web API and SQL Server.
            </p>
            <div>
              {/* <a href="https://demo.joelj.ca" target="_blank">
                <button className="border-2 p-2 border-teal-500 text-teal-500 rounded-3xl cursor-pointer">Demo</button>
              </a> */}
              <a href="https://github.com/Midnight-Sky-Software-Solutions/strength_journal_poc2" target="_blank">
                <button className="border-2 p-2 border-teal-500 text-teal-500 rounded-3xl ml-2 cursor-pointer">Source</button>
              </a>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-[url(/ahpc.png)] bg-cover bg-center h-100 rounded-2xl">
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-serif">The Association of Home Pizza Cooks</h3>
            <p>
              An association website built with Next.js and Wild Apricot.
            </p>
            <div>
              <a href="https://demo.joelj.ca" target="_blank">
                <button className="border-2 p-2 border-teal-500 text-teal-500 rounded-3xl cursor-pointer">Demo</button>
              </a>
              <a href="https://github.com/Midnight-Sky-Software-Solutions/ahpc_poc7" target="_blank">
                <button className="border-2 p-2 border-teal-500 text-teal-500 rounded-3xl ml-2 cursor-pointer">Source</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}