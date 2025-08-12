import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/')
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <section className="container mx-auto px-4 py-12
     lg:py-0 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid sm:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl w-full"
      >
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-6 text-center"
        >
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4 }}
            className="border-2 border-[rgba(75,30,133,0.5)] 
            rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] p-6"
          >
            <motion.h1 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
              className="text-6xl font-bold text-white mt-4"
            >
              404
            </motion.h1>
            <h2 className="text-xl text-white mt-4">Page Not Found</h2>
            <p className="text-lg text-gray-200 mt-2">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5 }}
            className="border-2 border-[rgba(75,30,133,0.5)] 
            rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] p-6"
          >
            <h3 className="text-lg text-white mt-4 mb-6">What would you like to do?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGoHome}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg 
                hover:from-purple-700 hover:to-purple-900 transition-all duration-300 font-medium"
              >
                Go Home
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGoBack}
                className="px-6 py-3 border-2 border-purple-600 text-purple-300 rounded-lg 
                hover:bg-purple-600 hover:text-white transition-all duration-300 font-medium"
              >
                Go Back
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NotFound;