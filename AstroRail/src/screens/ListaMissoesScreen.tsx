import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "../styles/listaMissoes.styles";

import { useEffect, useState } from "react";

import {
  buscarMissoes,
  removerMissao,
} from "../storage/missoesStorage";

export default function ListaMissoesScreen({
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
async function excluir(id: number) {

  await removerMissao(id);

  carregar();

}

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        🚀 Centro de Operações AstroRail
      </Text>

    <Text style={styles.texto}>

      Missões cadastradas: {missoes.length}
    </Text>

    {
      missoes.length === 0 && (

      <Text style={styles.vazio}>

        Nenhuma missão cadastrada.

      </Text>

    )
  }
    {

    missoes.map((missao) => (

    <View
      key={missao.id}
      style={styles.card}
    >

      <Text style={styles.info}>

        📍 Região: {missao.regiao}

      </Text>

      <Text style={styles.info}>

        📦 Carga: {missao.carga}

      </Text>

      <Text style={styles.info}>

        🚨 Prioridade: {missao.prioridade}

      </Text>

      <Text style={styles.info}>

        📡 Status: {missao.status}

      </Text>
      <TouchableOpacity
        style={styles.excluir}
        onPress={() => excluir(missao.id)}
      >

        <Text style={styles.textoExcluir}>

          🗑 Excluir Missão

        </Text>
      </TouchableOpacity>

    </View>

  ))

  }
  <TouchableOpacity
  style={styles.home}
  onPress={() => navigation.navigate("Home")}
>

  <Text style={styles.textoHome}>

    🏠 Voltar para Home

  </Text>

  </TouchableOpacity>

</View>
    );
}

