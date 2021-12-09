import Vue from 'vue'
import Vuex from 'vuex'
import TokenService from '../services/token'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: TokenService.getToken || null,
		batch: 1
	},
	getters: {
		getToken: (state) => state.token,
		getBatch: (state) => state.batch
	},
	mutations: {
		setToken: (state, payload) => state.token = payload,
		setBatch: (state, payload) => state.batch = payload,
	},
	actions: {
		handleLogIn({ commit }, token) {
			if (token) {
				commit('setToken', token)
				TokenService.setToken(token)
			}
		},
		handleLogOut({ commit }) {
			commit('setToken', null)
			TokenService.removeToken()
		},
		saveBatch({ commit }, batchId) {
			commit('setBatch', batchId)
		}
	},
	modules: {
	}
})
