import { Provider } from "react-redux";
import Home from "./components/Home";
import Layout from "./components/Layout";
import useLocalizeDocumentAttributes from "./i18n/useLocalizeDocumentAttributes";
import store from "./store";

function App() {
  useLocalizeDocumentAttributes();
  return (
    <Layout>
      <Provider store={store}>
        <Home />
      </Provider>
    </Layout>
  );
}

export default App;
