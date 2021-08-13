// repository
import RepositoryActions from "../repository/module-components/RepositoryActions";
import RepositoryModule from "../repository/RepositoryModule"
import RepositoryState from "../repository/module-components/RepositoryState";
import RepositoryMutations from "../repository/module-components/RepositoryMutations";


export default new RepositoryModule(new RepositoryState("./news.json", true), new RepositoryActions(), new RepositoryMutations());