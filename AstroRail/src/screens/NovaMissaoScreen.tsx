import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import styles from "../styles/novaMissao.styles";

import { salvarMissao } from "../storage/missoesStorage";

export default function NovaMissaoScreen({
  navigation,
}: any) {

  const [regiao, setRegiao] = useState("");
  const [carga, setCarga] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [erro, setErro] = useState("");

  async function salvar() {
     if (
    !regiao ||
    !carga ||
    !prioridade
    ) {

    setErro("Preencha todos os campos!");

    return;
  }

  setErro("");

    const missao = {

      id: Date.now(),

      regiao,

      carga,

      prioridade,

      status: "Pendente",

    };

    await salvarMissao(missao);

    setRegiao("");
    setCarga("");
    setPrioridade("");

    navigation.navigate("ListaMissoes");
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        🚀 Planejamento de Nova Missão
      </Text>

      <TextInput
        placeholder="Região de Destino"
        style={styles.input}
        value={regiao}
        onChangeText={(text) => {
          setRegiao(text);
          setErro("");
        }}
      />

      <TextInput
        placeholder="Tipo de Suprimento"
        style={styles.input}
        value={carga}
        onChangeText={(text) => {
          setCarga(text);
          setErro("");
        }}
      />

      <TextInput
        placeholder="Nível de Prioridade"
        style={styles.input}
        value={prioridade}
        onChangeText={(text) => {
          setPrioridade(text);
          setErro("");
        }}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={salvar}
      >
        <Text style={styles.textoBotao}>
          Salvar Missão
        </Text>
      </TouchableOpacity>

      {
      erro !== "" && (
      <Text style={styles.erro}>
      {erro}
      </Text>
    )}

      <TouchableOpacity
        style={styles.home}
        onPress={() =>
          navigation.navigate("Home")
        }
      >
        <Text style={styles.textoBotao}>
          🏠 Voltar
        </Text>
      </TouchableOpacity>

    </View>

  );
}

