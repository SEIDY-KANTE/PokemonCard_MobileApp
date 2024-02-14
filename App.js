import { SafeAreaView, ScrollView, View, Text } from "react-native";
import PokemonCard from "./components/PokemonCard";
import { pokemonData } from "./data/data";
import { styles } from "./Styles";

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView>
        {pokemonData.map((data, i) => {
          return <PokemonCard key={data.name} props={data} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
