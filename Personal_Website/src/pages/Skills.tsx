import { motion } from 'framer-motion';
import {skills}  from "../utils/Constants.ts";
import { Skill } from '../types/index.js';
const Skills = () => {
  return (
    <section className="container mx-auto px-4 py-14">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {skills.map((skill:Skill, index:number) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center justify-center transition-all duration-500 rounded-lg border border-[#1f223c] group hover:scale-[1.15] cursor-pointer hover:border-violet-500 p-4"
          >
            <div className="h-8 sm:h-10 mb-3">
              <img
                alt={skill.name}
                loading="lazy"
                width="40"
                height="40"
                className="h-full w-auto rounded-lg"
                src={skill.icon}
              />
            </div>
            <p className="text-white text-sm sm:text-base">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;