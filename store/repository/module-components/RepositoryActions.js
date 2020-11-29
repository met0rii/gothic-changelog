// external
import axios from "axios"

export default class RepositoryActions {

  getCollection = (context, id = null) => {
    context.commit("setLoading", true);
    return axios.get(context.state.url).then((res) => {
      context.commit("setLoading", false);
      context.commit("setCollection", res.data);

      if (id) {
        context.commit("selectSingle", id);
      }
    }).catch((e) => {
      context.commit("setLoading", false);
      context.commit("setError", e.message);
    })
  }
} 