import axios from "axios";
import Api from "../config/api_config";

export default class DashboardService {

  static loadTotalMembers(callback){
    const id = localStorage.getItem("userOrgId");
    axios
      .get(Api.DEV_BASE_URL + "/api/members/admin/"+id)
      .then(function (response) {
        console.log({ response})
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  static loadTotalMembersAwarded(callback){
    const id = localStorage.getItem("userOrgId");
    axios
      .get(Api.DEV_BASE_URL + "/api/members/admin/"+id)
      .then(function (response) {
        console.log({ response})
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  
}
