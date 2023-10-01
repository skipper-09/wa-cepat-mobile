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
import phonecode from "../data/phonecode.json";
import {
  faEllipsisVertical,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

export default function Home() {
  const [NoHp, SetNoHp] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(phonecode);
  const [code, setCode] = useState("");
  const UrlWa = `https://api.whatsapp.com/send/?phone=%${value}${NoHp}`;

  const SendButton = () => {
    if (NoHp != null) {
      Linking.openURL(UrlWa);
    }
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
            marginBottom: 10,
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <DropDownPicker
            key={phonecode.map((i) => i.name)}
            schema={{
              label: "dial_code",
              value: "dial_code",
            }}
            style={{ width: 150 }}
            containerStyle={{ width: 150 }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            searchable={true}
            placeholder="Kode Negara"
          />
          <TextInput
            style={{
              borderStyle: "solid",
              flex: 1,
              borderColor: "grey",
              opacity: 3,
              padding: 5,
              borderRadius: 6,
              borderWidth: 1,
            }}
            maxLength={12}
            keyboardAppearance="default"
            inputMode="numeric"
            placeholder="Masukkan Nomor Handphone"
            onChangeText={(value) => SetNoHp(value)}
            defaultValue={NoHp}
          />
        </View>
        <Button title="Kirim" onPress={SendButton} color={"green"} />
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
