import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
}

const WhatsAppButton = ({
  phoneNumber = "1234567890", // Replace with your actual WhatsApp number
  message = "Hello! I'm interested in working with you.",
}: WhatsAppButtonProps) => {
  // Create WhatsApp URL with phone number and pre-filled message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 md:bottom-8 md:right-8 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <motion.div
        className="absolute w-full h-full rounded-full bg-green-500 opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />
      <MessageCircle size={28} className="relative z-10" />
    </motion.a>
  )
}

export default WhatsAppButton
