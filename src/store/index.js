import Vue from 'vue';
import Vuex from 'vuex';
import dataModule from "@/store/dataModule";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        dataModule
    }
})