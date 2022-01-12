export default class RepositoryState {
  constructor(url, isObjectCollection = false) {
    this.collection = isObjectCollection ? {} : [];
    this.selected = null;
    this.error = false;
    this.isLoading = false;
    this.url = url
  }
}