import RepositoryState from "../repository/module-components/RepositoryState";

export default class ChangelogState extends RepositoryState {
  constructor(props) {
    super(props);
    this.selectedChangelog = null;
  }
}