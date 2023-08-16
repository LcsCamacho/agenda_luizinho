import { TouchableNativeFeedback, View, Text } from "react-native";


export const DayComponent = ({ date, state, navigation }: any) => {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple("blue", false)}
      onPress={() => {
        navigation.navigate("Horários", { date });
      }}
      style={{
        width: 40,
        height: 50,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          width: 40,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
          }}
        >
          {date?.day}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};
