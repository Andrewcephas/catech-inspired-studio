import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import catechLogo from "@/assets/catech-logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const words = ["Your", "Tech", "Partner", "For", "Success"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Create typing sound using Web Audio API
  const playTypingSound = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.value = 800 + Math.random() * 200;
    oscillator.type = 'square';
    
    // Medium volume
    gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.05);
  };

  useEffect(() => {
    if (currentWordIndex < words.length) {
      playTypingSound();
      const timer = setTimeout(() => {
        setCurrentWordIndex(prev => prev + 1);
      }, 200); // Fast typing speed
      return () => clearTimeout(timer);
    } else {
      // All words typed, wait a moment then complete
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 800);
      }, 500);
      return () => clearTimeout(completeTimer);
    }
  }, [currentWordIndex, words.length, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary to-[#017020]"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <img 
              src={catechLogo} 
              alt="Catech Solutions & Graphics" 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
            />
          </motion.div>

          {/* Typing Text */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
            {words.slice(0, currentWordIndex + 1).map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
              >
                {word}
              </motion.span>
            ))}
            {currentWordIndex < words.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-accent"
              >
                |
              </motion.span>
            )}
          </div>

          {/* Loading dots */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex gap-2"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                className="w-2 h-2 rounded-full bg-accent"
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
