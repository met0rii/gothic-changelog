// external
import axios from "axios"

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
export default class RepositoryActions {

  getCollection = (context, data = null) => {
    let url = `${context.state.url}${data && data.paramId ? '/mods/' + data.paramId + ".json" : ''}`;
    url = process.env.appUrl + url;
    context.commit("setLoading", true);
    return axios.get(url).then((res) => {
      context.commit("setLoading", false);
      if(data && data.asSingle) {
        context.commit("setSingle", res.data);
        return;
      }

      context.commit("setCollection", res.data);

      if (data && data.itemId) {
        context.commit("selectSingle", data.itemId);
      }
    }).catch((e) => {
      console.log(e);
      context.commit("setLoading", false);
      context.commit("setError", e.message);
    })
  }
}
