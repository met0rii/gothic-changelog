// internal
import RepositoryActions from "../repository/module-components/RepositoryActions";
import RepositoryState from "../repository/module-components/RepositoryState";
import RepositoryMutations from "../repository/module-components/RepositoryMutations";
import RepositoryModule from "../repository/RepositoryModule"


export default new RepositoryModule(new RepositoryState("./mock.json"), new RepositoryActions(), new RepositoryMutations());