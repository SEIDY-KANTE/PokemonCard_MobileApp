import { SafeAreaView, ScrollView, View, Text, FlatList } from "react-native";
import PokemonCard from "./components/PokemonCard";
import { pokemonData } from "./data/data";
import { styles } from "./Styles";

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      {/* <View
        style={[
          styles.card,
          {
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Pokemon Card 🃏
        </Text>
      </View> */}
      {/* <ScrollView>
        {pokemonData.map((data, i) => {
          return <PokemonCard key={data.name} props={data} />;
        })}
      </ScrollView> */}

      <FlatList
        data={pokemonData}
        renderItem={({ item }) => <PokemonCard props={item} />}
        keyExtractor={(item) => item.name}
        ListEmptyComponent={
          <Text
            style={{
              marginTop: 22,
              marginRight: "auto",
              marginLeft: "auto",
              fontSize: 28,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No card found!
          </Text>
        }
        ListHeaderComponent={
          <View
            style={[
              styles.card,
              {
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Pokemon Card 🃏
            </Text>
          </View>
        }
        ListFooterComponent={
          <Text
            style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}
          >
            End 🔚
          </Text>
        }
      />
    </SafeAreaView>
  );
}
