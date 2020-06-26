import axios from 'axios';

export function cadastrar(nome, email) {
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/',
        {
            fullName: nome,
            email: email
        }
    )
}