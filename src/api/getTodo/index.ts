import Axios from "axios";

import { Todos } from "types/todos.type";

export const getTodo = async (): Promise<Todos> => {
    try{
        const res = await Axios.get('http://localhost:8000/app/todo')

        return res.data
    } catch (error){
        throw new Error(error)
    }
}