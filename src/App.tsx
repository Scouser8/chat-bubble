import Home from "./components/Home";
import Layout from "./components/Layout";
import useLocalizeDocumentAttributes from "./i18n/useLocalizeDocumentAttributes";

function App() {
  useLocalizeDocumentAttributes();
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
