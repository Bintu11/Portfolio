import about_img from "../assets/about_img.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About Me</h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 2, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={about_img} alt="about" />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 2, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              I am a passionate and detail-oriented Full-Stack Developer specializing in Java, JavaScript, with hands-on experience in building robust and user-friendly web applications. Currently pursuing a Master of Computer Application (MCA) at BPUT (2023–2025), I hold a Bachelor of Computer Application (BCA) from Utkal University (2020–2023).
              <br />
              <br />
              I have successfully developed and implemented diverse projects, including Quick Serve (E-Commerce Web App), an Event Registration System, and a Customer Registration System with real-time push notifications. My expertise spans React.js, Node.js, Express.js, and databases like MySQL, SQL, and Oracle, leveraging modern tools such as Git, Firebase, and Postman to deliver scalable solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
