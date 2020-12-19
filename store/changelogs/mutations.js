import RepositoryMutations from "../repository/module-components/RepositoryMutations";

export default class ChangelogsMutations extends RepositoryMutations {
  selectChangelog = (state, changelogId) => {
    if (state.selected) {
      state.selectedChangelog = state.selected.changes.find((el) => el.updateId == changelogId);

    }
  }
}