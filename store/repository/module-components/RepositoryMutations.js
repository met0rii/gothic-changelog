export default class RepositoryMutations {
  setCollection = (state, payload) => {
    state.mods = payload;
  }
  setLoading = (state, isLoading) => {
    state.isLoading = isLoading;
  }
  setError = (state, error) => {
    state.error = error
  }
  selectSingle = (state, id) => {
    state.selected = state.mods.find((el) => el.id === id);
  }
}