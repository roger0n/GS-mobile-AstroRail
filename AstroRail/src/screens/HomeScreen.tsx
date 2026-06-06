import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "../styles/home.styles";

import {
  useEffect,
  useState,
} from "react";

import {
  buscarMissoes,
} from "../storage/missoesStorage";

export default function HomeScreen({
  navigation,
}: any) {
  const [missoes, setMissoes] =
useState<any[]>([]);

const pendentes =
missoes.filter(
  item =>
  item.status !==
  "Entregue"
).length;

const entregues =
missoes.filter(
  item =>
  item.status ===
  "Entregue"
).length;
  useEffect(() => {

  carregar();

}, []);

async function carregar() {

  const lista =
    await buscarMissoes();

  setMissoes(lista);

}
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>
        🚀 AstroRail
      </Text>

      <Text style={styles.subtitulo}>
        Central de Controle Logístico
      </Text>

<Text style={styles.subtitulo}>

</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          📦 Missões Cadastradas
        </Text>

        <Text style={styles.numero}>
          {missoes.length}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          📡 Missões Pendentes
        </Text>

        <Text style={styles.numero}>
          {pendentes}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          ✅ Missões Entregues
        </Text>

        <Text style={styles.numero}>
          {entregues}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("NovaMissao")
        }
      >
        <Text style={styles.buttonText}>
          Nova Missão
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("ListaMissoes")
        }
      >
        <Text style={styles.buttonText}>
          Lista de Missões
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Monitoramento")
        }
      >
        <Text style={styles.buttonText}>
          Monitoramento
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.sair}
        onPress={() =>
          navigation.navigate("Login")
        }
      >
        <Text style={styles.buttonText}>
          Sair
        </Text>
      </TouchableOpacity>

    </View>
  );
}

