import { Dados } from "..";

export const replaceDados = (dados: Dados[], data:string) => {
    const newDados = dados.map((dado) => {
        if(!dado || dado === undefined || dado === null) {
            return {
                nome: "",
                contato: "",
                valor: "",
                data
            }
        }
        return dado
    })
    return newDados
};