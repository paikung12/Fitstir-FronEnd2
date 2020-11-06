import axios from "@/plugins/axios"
import {
    make
} from "vuex-pathify"

const state = {

}

const getters = {



}

const mutations = make.mutations(state)


const actions = {
    async getMyPlaylist(context,id){
        let request = await axios.get('/backend/userplaylist/'+id)
            .then((r)=>{
                return r.data;
            })
            .catch((e)=>{
                return e.response.data;
            })
        return request;
    },
    async postMyPlaylist(context,params){
        let request = await axios.post('/api/playlist/',params)
            .then((r)=>{
                return r.data;
            })
            .catch((e)=>{
                return e.response.data;
            })
        return request;
    },
    async deleteMyPlaylist(context,id){
        let request = await axios.delete('/backend/playlist/'+ id)
            .then((r)=>{
                return r.data;
            })
            .catch((e)=>{
                return e.response.data;
            })
        return request;
    }

}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}