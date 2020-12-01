// repository
import RepositoryActions from "../repository/module-components/RepositoryActions";
import RepositoryModule from "../repository/RepositoryModule"

// overwrites
import ChangelogMutations from "./mutations";
import ChangelogState from "./state";


export default new RepositoryModule(new ChangelogState("./mock.json"), new RepositoryActions(), new ChangelogMutations());