// external
import axios from "axios"

export default class RepositoryActions {

  getCollection = (context, data = null) => {
    let url = `${context.state.url}${data && data.paramId ? '/' + data.paramId + ".json" : ''}`;
    if(process.server) {
      url = `http://0.0.0.0:3000` + url;
    }
    else {
      url = 'https://test-heroku-nuxt.herokuapp.com' + url;
    }
    console.log(url);
    context.commit("setLoading", true);
    return axios.get(url).then((res) => {
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
