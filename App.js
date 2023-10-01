// import { SafeAreaView } from "react-native";
import Home from "./src/screens/home";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={{ flex: 1 }}>
        <Home />
      </Layout>
    </ApplicationProvider>
  );
}
