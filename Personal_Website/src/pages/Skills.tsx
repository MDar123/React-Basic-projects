import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: 'https://mughis.vercel.app/_next/static/media/html.ed6aaa50.svg' },
    { name: 'CSS', icon: 'https://mughis.vercel.app/_next/static/media/css.e5e99f36.svg' },
    { name: 'JavaScript', icon: 'https://mughis.vercel.app/_next/static/media/javascript.b472cbc1.svg' },
    { name: 'TypeScript', icon: 'https://mughis.vercel.app/_next/static/media/typescript.97711300.svg' },
    { name: 'Angular', icon: 'https://th.bing.com/th/id/OIP.Klh1l7wkoG6PDPb9A5oCHQHaHa?rs=1&pid=ImgDetMain' },
    { name: 'React', icon: 'https://mughis.vercel.app/_next/static/media/react.512a3a7e.svg' },
    { name: 'Firebase', icon: 'https://mughis.vercel.app/_next/static/media/firebase.20c6dcf8.svg' },
    { name: 'Django', icon: 'https://dl.dropboxusercontent.com/scl/fi/lyyqag6bvaa1b1m860if4/django-icon.png?rlkey=pdhlcwyzh3qf9e5375kciljrq&st=bjpfrerx&dl=0' },
    { name: 'Tailwindcss', icon: 'https://mughis.vercel.app/_next/static/media/tailwind.c0bbaf6f.svg' },
    { name: 'MaterialUI', icon: 'https://mughis.vercel.app/_next/static/media/materialui.2900e517.svg' },
    { name: 'Bootstrap', icon: 'https://mughis.vercel.app/_next/static/media/bootstrap.9e6ddba8.svg' },
    { name: 'Git', icon: 'https://mughis.vercel.app/_next/static/media/git.21d80414.svg' }
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {skills.map((skill, index) => (
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