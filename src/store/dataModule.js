import apiHelper from "../services/apiHelper";


const state = {
    username:'Nir-Elk',
    folders: [],
    teammates: [],
    projects: [],
    selectedFolder: null,
};

const getters = {
    getUsername: (state) => state.username,
    getFolders: (state) => state.folders,
    getTeammates: (state) => state.teammates,
    getSelectedFolder: (state) => state.selectedFolder,
    getProjects: (state) => state.projects,
};

const actions = {
    async fetchFolders({ rootState, commit, dispatch }) {
        const response = await apiHelper.fetchFolders(rootState.dataModule.username);
        commit('setFolders', response.data);
        dispatch('setSelectedFolder',response.data[0]);
    },
    async fetchTeammates({ rootState, commit }) {
        const response = await apiHelper.fetchTeammates(rootState.dataModule.username);
        commit('setTeammates', response.data);
    },
    async fetchProjects({ rootState, commit }) {
        const response = await apiHelper.fetchProjects(rootState.dataModule.username, rootState.dataModule.selectedFolder.id);
        commit('setProjects', response.data);
    },
    setSelectedFolder({ commit, dispatch },folder) {
        commit('setSelectedFolder', folder);
        dispatch('fetchProjects');
    },
};

const mutations = {
    setFolders: (state, folders) => {
        state.folders = [...folders];
    },
    setTeammates: (state, teammates) => {
        state.teammates = [...teammates];
    },
    setProjects: (state, projects) => {
        state.projects = [...projects];
    },
    setSelectedFolder: (state, selectedFolder) => {
        state.selectedFolder = selectedFolder;

    }
};

export default {
    state,
    getters,
    actions,
    mutations
}