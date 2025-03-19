import { motion } from "motion/react";

export default function AboutMe() {
  return (
    <motion.div
      className="flex 
      justify-center"
      id="about"
      initial={{ opacity: 0, translateZ: "-160px", rotateY: "87deg"  }}
      whileInView={{ opacity: 1, translateZ: 0, rotateY: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.0 },
      }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl grow px-5">
        <h2 className="text-4xl font-serif py-6">About Me</h2>
        <div className="flex flex-col gap-5">
          <p>
            Hi, I’m Joel, and I help businesses of all sizes build professional, user-friendly applications with Microsoft technologies.
            With years of experience in <strong>web development, database management, and digital solutions</strong>, I specialize in creating modern, efficient, and easy-to-manage web applications using React, ASP.NET, and SQL Server. From custom web applications to robust database solutions, I design and develop scalable, high-performance systems that meet your unique business needs. Whether you need a new application, an upgrade to your existing system, or database optimization, I ensure seamless functionality, security, and long-term maintainability.
          </p>
          <a href="mailto:me@joelj.ca" className="font-bold">📩 Ready to get started? Let’s talk!</a>
        </div>
      </div>
    </motion.div>
  );
}