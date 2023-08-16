import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import MonthCalendar from "./components/months";
import { months } from "../../constants/months";
import { s } from "./styles";

export const MonthsScreen = ({ route, navigation }: any) => {
  const newMonths = months.map((month) => month.name);

  const handleMonthPress = (month: string) => {
    const monthPressed = months.find((m) => m.name === month);
    navigation.navigate("Dias", {
      selectedMonth: monthPressed?.value as number,
    });
  };

  return (
    <View style={s.container}>
      <MonthCalendar months={newMonths} onMonthPress={handleMonthPress} />
    </View>
  );
};
