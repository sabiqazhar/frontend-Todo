import Axios, {AxiosResponse} from "axios";

import { GetTodoResult } from "types/todos.type";

export const getTodoById =async (id:string):Promise<AxiosResponse<GetTodoResult>> => {
    try {
        const res = await Axios({
            method: 'GET',
            url: `http://localhost:8000/app/todo/${id}`
        })

        return res.data
    } catch (error) {
        throw new Error(error)        
    }
}