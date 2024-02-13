import { View, Text, StyleSheet, Platform, Image } from "react-native";
function PokemonCard({ props }) {
  return (
    <View style={styles.card}>
      <View>
        <Text>{props.name}</Text>
        <Text>{props.hp}</Text>
      </View>
      <Image
        source={props.image}
        accessibilityLabel={`${props.name} pokemon`}
      />

      <View>
        <Text>{props.type}</Text>
      </View>
      <View>
        <Text>
          {props.moves.map((move, index) => (
            <Text key={index}> {move}</Text>
          ))}
        </Text>
      </View>

      <View>
        <Text>
          {props.weaknesses.map((weaknes, index) => (
            <Text key={index}> {weaknes}</Text>
          ))}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default PokemonCard;
