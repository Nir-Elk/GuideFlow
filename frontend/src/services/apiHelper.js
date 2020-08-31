import axios from 'axios';

const ROOT_URL = 'https://guide-flow.herokuapp.com/api';



export default {
    fetchFolders(username){
        return axios.get(`${ROOT_URL}/folders`,
            {
                headers: {
                    'Authentication': username
                }
            });
    },
    fetchTeammates(username){
        return axios.get(`${ROOT_URL}/teammates`,
            {
                headers: {
                    'Authentication': username
                }
            });
    },
    fetchProjects(username,folderId){
        return axios.get(`${ROOT_URL}/folders/${folderId}`,
            {
                headers: {
                    'Authentication': username
                }
            });
    },
}