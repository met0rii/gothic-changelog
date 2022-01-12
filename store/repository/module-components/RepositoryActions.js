// external
import axios from "axios"

export default class RepositoryActions {

  getCollection = (context, data = null) => {
    context.commit("setLoading", true);
    return axios.get(`${context.rootState.baseUrl}${context.state.url}${data && data.paramId ? '/' + data.paramId + ".json" : ''}`).then((res) => {
      context.commit("setLoading", false);
      context.commit("setCollection", res.data);

      if (data && data.itemId) {
        context.commit("selectSingle", data.itemId);
      }
    }).catch((e) => {
      context.commit("setLoading", false);
      context.commit("setError", e.message);
    })
  }
}
