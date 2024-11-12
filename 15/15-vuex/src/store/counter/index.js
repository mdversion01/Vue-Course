import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
    namespaced: true, // This is a module
    state() {
      // Treated as a local state in a module
      return {
        counter: 0,
      };
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters,
  };