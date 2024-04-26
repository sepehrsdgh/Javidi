import { Provider } from "react-redux";
import Layout from "../components/layout/Layout";
import store from "../context/configStore";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </Provider>
  );
}

export default MyApp;
