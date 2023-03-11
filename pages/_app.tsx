import { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";
import "@fontsource/poppins";
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
