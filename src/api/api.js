import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

export const characters = {
    getAllCharacters() {
        return instance.get('/character')
    },

    getCharactersByPage(page) {
        return instance.get(`/character?page=${page}`)
    }
}
