import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { horarios } from "../../../../constants/horarios";
import { InputsAgendaProps } from "../../types";
import { s } from "./styles";
import MaskInput from "react-native-mask-input";
import { Dados } from "../..";
export const InputsAgenda = ({
  item,
  index,
  setDados,
  data,
  dados,
}: InputsAgendaProps) => {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [valor, setValor] = useState("");

  useEffect(() => {
    if (dados) {
      setNome(dados.nome);
      setContato(dados.contato);
      setValor(dados.valor);
    }
  }, [dados]);

  useEffect(() => {
    if (nome.length < 2 || contato.length < 10 || valor.length < 1) return;
    setDados((state) => {
      const newState = state;
      newState[index] = {
        data: data.dateString,
        nome,
        contato,
        valor,
        horario: item.value,
      };
      return newState;
    });
  }, [nome, contato, valor]);

  return (
    <View style={horarios.length - 1 === index ? s.lastItem : s.item}>
      <Text style={s.hora}>{item.label}</Text>

      <MaskInput
        style={s.inputNome}
        value={nome}
        placeholder="Nome"
        onChangeText={(masked: string, unmasked: string) => {
          setNome(masked);
        }}
      />
      <MaskInput
        style={s.inputContato}
        value={contato}
        placeholder="Contato"
        onChangeText={(masked: string, unmasked: string) => {
          setContato(masked);
        }}
        mask={[
          /\d/,
          /\d/,
          " ",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ]}
      />
      <MaskInput
        style={s.input}
        value={valor}
        onChangeText={(masked: string, unmasked: string) => {
          setValor(masked);
        }}
        placeholder="Valor"
        mask={["R$: ", /\d/, /\d/]}
      />
    </View>
  );
};
