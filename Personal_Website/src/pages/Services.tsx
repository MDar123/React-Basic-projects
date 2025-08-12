import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your unique business requirements and scale with your growth."
    },
    {
      title: "Website and App Development", 
      description: "Modern, responsive websites and mobile applications designed for optimal user experience and performance."
    },
    {
      title: "SAAS Development",
      description: "Scalable Software-as-a-Service platforms with robust architecture and seamless user management."
    },
    {
      title: "Figma to Code",
      description: "Pixel-perfect conversion of your Figma designs into clean, maintainable, and responsive code."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12 lg:py-0">
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="border-2 border-[rgba(75,30,133,0.5)] 
              rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] p-6"
            >
              <h2 className="text-xl text-white mt-4">{service.title}</h2>
              <p className="text-lg text-gray-200 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;