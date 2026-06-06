import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "MISSOES";

export async function buscarMissoes() {
  const dados = await AsyncStorage.getItem(KEY);

  return dados ? JSON.parse(dados) : [];
}

export async function salvarMissao(missao: any) {
  const lista = await buscarMissoes();

  lista.push(missao);

  await AsyncStorage.setItem(
    KEY,
    JSON.stringify(lista)
  );
}

export async function removerMissao(id: number) {
  const lista = await buscarMissoes();

  const novaLista = lista.filter(
    (item: any) => item.id !== id
  );

  await AsyncStorage.setItem(
    KEY,
    JSON.stringify(novaLista)
  );
}
export async function atualizarStatusMissao(
  id: number,
  novoStatus: string
) {

  const lista = await buscarMissoes();

  const novaLista = lista.map(
    (item: any) => {

      if (item.id === id) {

        return {
          ...item,
          status: novoStatus,
        };

      }

      return item;

    }
  );

  await AsyncStorage.setItem(
    KEY,
    JSON.stringify(novaLista)
  );

}