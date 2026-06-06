import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0B1026",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  titulo: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },

  input: {
    width: 350,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  botao: {
    width: 350,
    backgroundColor: "#2E5BFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  home: {
    width: 350,
    backgroundColor: "#444",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },

  textoBotao: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  erro: {
  color: "#ff4444",
  marginTop: 10,
  marginBottom: 10,
  fontWeight: "bold",
},

});
export default styles;