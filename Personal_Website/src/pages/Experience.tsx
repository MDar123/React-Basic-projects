import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      period: "June 2024 - September 2024",
      title: "Intern as an Angular Developer",
      company: "Premier Solutions"
    },
    {
      period: "October 2022 - Present",
      title: "Self Employed",
      description: "Code and build something in everyday"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8"
      > 
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] p-6"
            >
              <span className="text-green-500 text-lg">{exp.period}</span>
              <h2 className="text-2xl text-white mt-4">{exp.title}</h2>
              <p className="text-lg text-gray-200 mt-2">{exp.company || exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;