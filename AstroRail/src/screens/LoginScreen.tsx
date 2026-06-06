import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import styles from "../styles/login.styles";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function entrar() {
  if (
    email === "fiap@teste.com" &&
    senha === "123456"
  ) {
    setErro("");
    setEmail("");
    setSenha("");
    navigation.navigate("Home");
  } else {
    setErro("Usuário ou senha inválidos!");
  }
}

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        AstroRail
      </Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setErro("");
      }}
/>

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={(text) => {
          setSenha(text);
          setErro("");
        }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={entrar}
      >
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>

      {
        erro !== "" && (
        <Text style={styles.erro}>
        {erro}
        </Text>
        )
      }

    </View>
  );
}

