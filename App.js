import { Platform, SafeAreaView, StyleSheet } from "react-native";
import PokemonCard from "./components/PokemonCard";


const charmanderData = {
  name: "Charmander",
  image: require("./assets/charmander.png"),
  type: "Fire",
  hp: 39,
  moves: ["Scratch", "Ember", "Leer"],
  weaknesses: ["Water", "Rocker"],
};

export default function App() {
 
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard props={charmanderData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
