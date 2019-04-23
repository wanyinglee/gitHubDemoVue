import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
    {
        state: {
            repos: [],
            selectedRepo: [],
            readMe: []
        },
        mutations: {
            setRepos (state, repos) {
                state.repos = repos
            },
            setSelectedRepo (state, repo) {
                state.selectedRepo = repo
            },
            setReadMe (state, readMe) {
                state.readMe = readMe
            }
        }
    }
)