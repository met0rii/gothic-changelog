import RepositoryMutations from "../repository/module-components/RepositoryMutations";

export default class ChangelogsMutations extends RepositoryMutations {
  selectChangelog = (state, changelogId) => {
    state.selectedChangelog = state.selected.changes.find((el) => el.id == changelogId);
  }
}