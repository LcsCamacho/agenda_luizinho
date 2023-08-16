import { Dados } from "..";
import { db } from "../../../config/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { replaceDados } from "../useCases/replaceDados";
import { horarios } from "../../../constants/horarios";

export const dayServices = {
  setDayDefault: async (data: string) => {
    const docRef = doc(db, "horarios", data);
    const dados = horarios.map((h) => {
      return {
        nome: "",
        contato: "",
        valor: "",
        data,
        horario: h.value,
      };
    });
    try {
      await setDoc(docRef, { dados });
    } catch (error) {
      console.log(error);
    }
  },
  setDay: async (dados: Dados[]) => {
    const date = dados[0].data;
    const docRef = doc(db, "horarios", date);
    try {
      await setDoc(docRef, { dados });
      console.log("Documento salvo com sucesso:", date);
    } catch (error) {
      console.log(error);
    }
  },
  getDay: async (data: string) => {
    const docRef = doc(db, "horarios", data);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("Nao tem documento salvo nesta data:", data);
        return undefined;
      }
    } catch (error) {
      console.log(error);
      return undefined;
    }
  },
};
