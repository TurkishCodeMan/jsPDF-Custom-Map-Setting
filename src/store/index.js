import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import MapModule from "./Modules/MapModule"

const store=new Vuex.Store({
    modules:{MapModule}
})

export default store;