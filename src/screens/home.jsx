import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  Button,
  Linking,
  Dimensions,
  ScrollView,
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEllipsisVertical,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Home() {
  const [NoHp, SetNoHp] = useState("");

  const UrlWa = `https://api.whatsapp.com/send/?phone=%2B62${NoHp}`;

  const SendButton = () => {
    if (NoHp != null) {
      Linking.openURL(UrlWa);
    }
    window.localStorage.setItem("history", NoHp);
  };

  const windowDimensions = Dimensions.get("window");
  const screenDimensions = Dimensions.get("screen");
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={"green"} />
      <View style={styles.header}>
        <Text style={styles.title}>WaCepat</Text>
        <FontAwesomeIcon icon={faEllipsisVertical} color="white" />
      </View>
      <View
        style={{
          justifyContent: "center",
          height: windowDimensions.height,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TextInput
            style={{
              borderStyle: "solid",
              flex: 1,
              borderColor: "grey",
              opacity: 3,
              marginRight: 10,
              padding: 5,
              borderRadius: 6,
              borderWidth: 1,
            }}
            keyboardAppearance="default"
            inputMode="numeric"
            placeholder="Masukkan Nomor Handphone"
            onChangeText={(value) => SetNoHp(value)}
            defaultValue={NoHp}
          />
          <Button title="Kirim" onPress={SendButton} color={"green"} />
        </View>
        <Text style={{ marginTop: 30, fontSize: 16, fontWeight: "bold" }}>
          Tatacara Penggunaan Aplikasi
        </Text>
        <View style={{ marginTop: 5 }}>
          <Text>1. Masukkan no handphone didalam kolom </Text>
          <Text>
            2. Tekan tombol kirim maka aplikasi Watsapp akan terbuka otomatis
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
