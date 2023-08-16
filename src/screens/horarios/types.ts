import { IDataCalendar } from "../../../types"
import { IHorarios } from "../../constants/horarios"
import { Dados } from "../horarios"

export interface InputsAgendaProps {
    item: IHorarios
    index:number 
    setDados: React.Dispatch<React.SetStateAction<Dados[]>>
    data:IDataCalendar
    dados: Dados
}