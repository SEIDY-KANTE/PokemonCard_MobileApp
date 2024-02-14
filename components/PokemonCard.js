import { View, Text, Image, Pressable } from "react-native";
import { styles } from "../Styles";

import { getTypeDetails } from "../data/data";

function PokemonCard({ props }) {
  const { borderColor, emoji } = getTypeDetails(props.type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.hp}> 💖{props.hp}</Text>
      </View>
      <Image
        style={styles.image}
        source={props.image}
        accessibilityLabel={`${props.name} pokemon`}
        resizeMode="contain"
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{props.type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>
          Moves: <Text> </Text>
          <Text style={styles.elements}>
            {props.moves.join(", ")}
            {/* {props.moves.map((move, index) => (
            <Text key={index}> {move}</Text>
          ))} */}
          </Text>
        </Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text>
          <Text style={styles.weaknessText}>
            Weakness: <Text> </Text>
            <Text style={styles.elements}>
              {props.weaknesses.join(", ")}
              {/* {props.weaknesses.map((weaknes, index) => (
            <Text key={index}> {weaknes}</Text>
          ))} */}
            </Text>
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default PokemonCard;
