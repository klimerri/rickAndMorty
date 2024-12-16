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
    },

    getCharacterById(id) {
        return instance.get(`/character/${id}`)
    }
}

export const episodes = {
    getAllEpisodes() {
        return instance.get('/episode');
    }
}

export const locations = {
    getAllLocations() {
        return instance.get('/location');
    }
}
