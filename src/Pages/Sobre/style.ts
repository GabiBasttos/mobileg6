import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container_top: {
    height: 330,
  },

  container_bottom: {
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    height: 950,
  },

  seta: {
    width: 36,
    height: 36,
    top: 40,
    left: 14,
  },

  heart: {
    position: "absolute",
    width: 36,
    height: 36,
    top: 5,
    right: 14,
  },

  nome: {
    fontFamily: "Inter_700Bold",
    fontSize: 32,
    textAlign: "left",
    left: 200,
    bottom: 80,
    color: "#fff",
  },

  number: {
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    textAlign: "left",
    left: 200,
    bottom: 85,
    color: "#747476",
  },

  pokemon: {
    width: 180,
    height: 180,
    top: 40,
    left: 25,
  },

  tipo: {
    fontFamily: "Inter_700Bold",
    fontSize: 15,
    textAlign: "left",
    left: 200,
    bottom: 90,
  },

  sobrePokemon: {
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    textAlign: "left",
    left: 111,
    bottom: 35,
    color: "#fff",
  },

  topicos: {
    fontFamily: "Inter_700Bold",
    fontSize: 18,
    textAlign: "left",
    left: 30,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    top: 10,
  },

  text: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    left: 30,
    top: 3,
    bottom: 60,
    marginLeft: 10,
    color: "#000",
  },

  evolucao_container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    bottom: 30,
  },

  evolucao_img: {
    width: 220,
    height: 220,
    left: 100,
  },
});
