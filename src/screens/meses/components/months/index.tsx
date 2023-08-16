import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

interface MonthProps {
  months: string[];
  onMonthPress: (month: string) => void;
}

const MonthCalendar = ({ months, onMonthPress }: MonthProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {months.map((month) => (
          <TouchableOpacity
            key={month}
            style={styles.monthButton}
            onPress={() => onMonthPress(month)}
          >
            <Text style={styles.monthText}>{month.substring(0, 3)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  content: {
    marginVertical: 'auto',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  monthButton: {
    backgroundColor: "#00000052",
    flexBasis: "25%",
    minHeight: 100,
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 5,
    padding: 10,
  },
  monthText: {
    fontSize: 18,
    color: "white",

  },
});

export default MonthCalendar;
