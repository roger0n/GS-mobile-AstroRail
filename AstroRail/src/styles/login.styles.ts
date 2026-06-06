import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  logo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    width: 350,
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },

  button: {
    width: 350,
    backgroundColor: "#2E5BFF",
    padding: 15,
    borderRadius: 8,
},

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },

  info: {
    marginTop: 20,
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 10,
    width: 350,
  },
  erro: {
  color: "red",
  textAlign: "center",
  marginTop: 10,
},
});
export default styles;