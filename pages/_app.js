import { Provider } from "react-redux";
import Layout from "../components/layout/Layout";
import store from "../context/configStore";
import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  const getLayout = Component.getLayout || ((page) => page);

  const variants = {
    in: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.05,
        delay: 0,
      },
    },
    out: {
      opacity: 0,
      scale: 1,
      y: 40,
      transition: {
        duration: 0.05,
      },
    },
  };

  return (
    <Provider store={store}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </motion.div>
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
