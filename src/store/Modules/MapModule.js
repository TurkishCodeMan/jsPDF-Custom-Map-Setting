import GoogleMapsApiLoader from "google-maps-api-loader";
import store from "@/store"
const state = {
    google: null,
}
const getters = {
    getGoogle(state) {
        return state.google;
    }
}
const mutations = {
    SET_GOOGLE(state, value) {
        state.google = value;
    }
}
const actions = {
    async initGoogle({ commit }) {
        const googleMapApi = await GoogleMapsApiLoader({
            apiKey: "YOUR_KEY"
        })
        commit('SET_GOOGLE', googleMapApi);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}