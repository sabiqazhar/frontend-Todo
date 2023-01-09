import Axios from "axios";

export const deleteTodo =async (id:string): Promise<void> => {
    try {
        await Axios({
            method: 'DELETE',
            url: `http://localhost:8000/app/todo/${id}`
        })
    } catch (error) {
        throw new Error(error)
    }
}