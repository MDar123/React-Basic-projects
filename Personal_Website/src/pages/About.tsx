import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
      >
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
          className="sm:order-2 lg:order-1"
        >
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Who I am?</p>
          <p className="text-gray-200 sm:text-sm lg:text-lg">
          Aspiring Frontend Developer with 3 months of internship experience in Angular-based development. Skilled in building responsive web applications, API integration, and state management. Seeking to leverage technical expertise in HTML, CSS, and JavaScript frameworks to contribute to innovative projects. 
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center sm:order-1 lg:order-2"
        >
          <img
            alt="Profile"
            loading="lazy"
            width="280"
            height="280"
            className="rounded-lg transition-all duration-1000 hover:scale-110 cursor-pointer"
            src="https://dl.dropboxusercontent.com/scl/fi/9bhv3n0zw928878pd5ms1/pic002.jpg?rlkey=1gzlc15vc8h0mkns8g7ddhbu1&st=of81t2r8&dl=0"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;