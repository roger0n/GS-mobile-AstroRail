import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "../styles/monitoramento.styles";

import { useEffect, useState } from "react";

import {
  buscarMissoes,
  atualizarStatusMissao,
} from "../storage/missoesStorage";

export default function MonitoramentoScreen({
  navigation,
}: any) {

  const [missoes, setMissoes] = useState<any[]>([]);

  useEffect(() => {

    carregar();

  }, []);

  async function carregar() {

    const lista = await buscarMissoes();

    setMissoes(lista);

  }
  async function atualizarStatus(
  missao: any
) {

  let novoStatus = "";

  if (
    missao.status === "Pendente"
  ) {

    novoStatus =
      "Em Transporte";

  }

  else if (
    missao.status ===
    "Em Transporte"
  ) {

    novoStatus =
      "Entregue";

  }

  else {

    novoStatus =
      "Pendente";

  }

  await atualizarStatusMissao(
    missao.id,
    novoStatus
  );

  carregar();

}

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>

        🚀 Centro de Monitoramento AstroRail

      </Text>

      <Text style={styles.texto}>

        Missões monitoradas: {missoes.length}

      </Text>
      {
      missoes.map((missao) => (
      <View
      key={missao.id}
      style={styles.card}
      >
      <Text style={styles.info}>

        📍 {missao.regiao}

      </Text>

      <Text style={styles.info}>

        📡 {missao.status}

      </Text>

      <TouchableOpacity

  style={styles.botao}

  onPress={() =>
    atualizarStatus(
      missao
    )
  }

>

  <Text
    style={
      styles.textoBotao
    }
  >

    🔄 Atualizar Status

  </Text>

</TouchableOpacity>


</View>

  ))
}
<TouchableOpacity
  style={styles.home}
  onPress={() =>
    navigation.navigate("Home")
  }
>

  <Text style={styles.textoHome}>

    🏠 Voltar para Home

  </Text>

</TouchableOpacity>

    </View>

  );

}
