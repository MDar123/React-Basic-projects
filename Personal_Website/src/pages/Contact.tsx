import { motion } from 'framer-motion';
import { MessageCircle, Github, Linkedin, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>();

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://formspree.io/f/xyzwrrwds', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        reset();
      } else {
        toast.error('Failed to send message. Try again.');
      }
    } catch {
      toast.error('Something went wrong!');
    }
  };

  return (
    <section className="container mx-auto px-4 py-14 lg:py-0">
      <Toaster position="bottom-center" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-md mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Contact Me</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-200 font-bold mb-2 text-lg">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Mujtaba"
                {...register('name')}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#1a1443] border border-violet-500 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-200 font-bold mb-2 text-lg">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Example@gmail.com"
                {...register('email')}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#1a1443] border border-violet-500 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-200 font-bold mb-2 text-lg">
                Message:
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                rows={4}
                {...register('message')}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#1a1443] border border-violet-500 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-t from-[#ADD4FA] to-[#4091f1] rounded-xl p-6 lg:p-8"
        >
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
                <p className="font-semibold text-xl text-white">Let's Have a Chat</p>
              </div>
              <p className="text-white">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-6 h-6 text-white" />
                <p className="font-semibold text-xl text-white">Email Me</p>
              </div>
              <p className="text-white">mujtabadar98@gmail.com</p>
            </div>

            <div>
              <p className="text-xl font-bold text-white mb-4">Connect with me</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/MDar123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-violet-200 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mujtaba-sohail-dar-27937b280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-violet-200 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
