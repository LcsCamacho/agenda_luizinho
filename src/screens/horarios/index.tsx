import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { IDataCalendar } from "../../../types";
import { InputsAgenda } from "./components/input-agenda";
import { horarios } from "../../constants/horarios";
import { dayServices } from "./services/dayServices";
import { s } from "./styles";

export interface Dados {
  nome: string;
  contato: string;
  valor: string;
  horario: string;
  data: string;
}

export const HorariosScreen = ({ route, navigation }: any) => {
  const date: IDataCalendar = route.params.date;

  const [dados, setDados] = React.useState<Dados[]>([]);
  const [loading, setLoading] = React.useState(true);

  const submit = async () => {
    await dayServices.setDay(dados);
  };

  const getDay = async () => {
    return await dayServices.getDay(date.dateString);
  };

  const setDayDefault = async () => {
    return await dayServices.setDayDefault(date.dateString);
  }

  React.useEffect(() => {
    (async () => {
      //faz a requisicao e se tiver dados seta no state
      const day = await getDay();
      day && setDados(day.dados as Dados[]);
      //se nao tiver dados seta os dados padrao e faz a requisicao novamente
      if(!day) {
        await setDayDefault();
        const day = await getDay();
        day && setDados(day.dados as Dados[]);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <View style={s.container}>
      <View style={s.content}>
        <View style={s.list}>
          <View style={s.headerList}>
            <Text style={s.th}>Horario</Text>
            <Text style={s.th}>Nome</Text>
            <Text style={s.th}>Contato</Text>
            <Text style={s.th}>Valor</Text>
          </View>
            <FlatList
              data={horarios}
              renderItem={({ item, index }) => {
                
                if (loading)
                  return (
                    <View style={{ width: 200, marginVertical: 20 }}>
                      <Text style={{ color: "#000" }}>Carregando...</Text>
                    </View>
                  );
                return (
                  <InputsAgenda
                    dados={dados[index]}
                    data={date}
                    setDados={setDados}
                    item={item}
                    index={index}
                  />
                );
              }}
              keyExtractor={(item) => item.value}
              style={s.flatList}
            />
        </View>
        <View style={s.viewSubmit}>
          {!loading && (
            <TouchableOpacity
              activeOpacity={0.4}
              style={s.btnSubmit}
              onPress={submit}
            >
              <Text style={{ color: "white" }}>Salvar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
