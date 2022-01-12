import RepositoryMutations from "../repository/module-components/RepositoryMutations";

export default class ChangelogsMutations extends RepositoryMutations {
  selectChangelog = (state, changelogId) => {
    if (state.selected) {
      if (state.selected.changes) {
        state.selectedChangelog = state.selected.changes.find(
          (el) => el.updateId == changelogId
        );
      } else {
        state.selectChangelog = [];
      }
    }
  };
}
