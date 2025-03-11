import profile_img from "../assets/profile_img.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-white pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Prajnyamit Das
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-white bg-gradient-to-r from-pink-300 via-slate to-purple-500 bg-clip-text text-4xl tracking-tight"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-xl py-6 font-light tracking-tighter text-white"
            >
              I am a Full-Stack Developer specializing in Java and JavaScript, with experience in building dynamic and user-friendly web applications. Skilled in React.js, Node.js, and Express.js, I enjoy creating efficient and scalable solutions. Currently pursuing a Master of Computer Application (MCA) at BPUT (2023–2025), I am passionate about learning new technologies and delivering high-quality software.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              src={profile_img}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              alt="Prajnyamit Das"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
