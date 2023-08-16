import React from "react";
import { View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { DayComponent } from "./components/day";
import { months } from "../../constants/months";
import { s } from "./styles";

export const DaysScreen = ({ route, navigation }: any) => {
  // Configurações de localização para o português (Brasil)
  LocaleConfig.locales["pt-br"] = {
    monthNames: months.map(m => m.name),
    monthNamesShort: [
      "Jan.",
      "Fev.",
      "Mar.",
      "Abr.",
      "Mai.",
      "Jun.",
      "Jul.",
      "Ago.",
      "Set.",
      "Out.",
      "Nov.",
      "Dez.",
    ],
    dayNames: [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ],
    dayNamesShort: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb."],
    today: "Hoje",
  };
  LocaleConfig.defaultLocale = "pt-br";
  const month = route.params.selectedMonth;

  return (
    <View style={s.container}>
      <View style={s.container}>
        <Calendar
          initialDate={`2023-${month}-01`}
          hideExtraDays={true}
          enableSwipeMonths={false}
          hideArrows={true}
          accessibilityLanguage="pt-br"
          dayComponent={({ date, state }) =>
            DayComponent({ date, state, navigation })
          }
          style={s.calendar}
        />
      </View>
    </View>
  );
};

