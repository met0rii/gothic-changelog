export default class RepositoryModule {
  constructor(state, actions, mutations) {
    this.namespaced = true;
    this.state = {
      ...state,
    }
    this.actions = {
      ...actions
    }
    this.mutations = {
      ...mutations,
    }
  }
}

