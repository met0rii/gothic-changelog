export default class RepositoryState {
  constructor(url) {
    this.mods = [];
    this.selected = null;
    this.error = false;
    this.isLoading = false;
    this.url = url
  }
}