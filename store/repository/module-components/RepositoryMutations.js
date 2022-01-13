export default class RepositoryMutations {
  setCollection = (state, payload) => {
    state.collection = payload;
  }
  setLoading = (state, isLoading) => {
    state.isLoading = isLoading;
  }
  setError = (state, error) => {
    state.error = error
  }
  selectSingle = (state, id) => {
    state.selected = state.collection.find((el) => el.id === id);
  }
  setSingle = (state, value) => {
    state.selected  = value;
  }
}
