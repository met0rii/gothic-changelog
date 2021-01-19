export default class RepositoryState {
  constructor(url) {
    this.collection = [];
    this.selected = null;
    this.error = false;
    this.isLoading = false;
    this.url = url
  }
}