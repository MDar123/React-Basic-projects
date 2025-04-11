import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      period: "October 2022 - Present",
      degree: "BS Information Engineering Technology",
      institution: "University of Lahore"
    },
    {
      period: "2020 - 2022",
      degree: "Intermediate In Computer Science",
      institution: "Crescent College Shadman Campus, Lahore"
    },
    {
      period: "2018 - 2020",
      degree: "Matriculation",
      institution: "The Smart School, Lahore"
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
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] p-6"
            >
              <span className="text-green-500 text-lg">{edu.period}</span>
              <h2 className="text-xl text-white mt-4">{edu.degree}</h2>
              <p className="text-lg text-gray-200 mt-2">{edu.institution}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;