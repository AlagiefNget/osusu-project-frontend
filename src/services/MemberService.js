import axios from "axios";
import Api from "../config/api_config";

export default class MemberService {

  static login(credentials, callback) {
    axios
      .post(Api.DEV_BASE_URL + "/api/members/login", credentials)
      .then(function (response) {
        localStorage.setItem("userEmail", response.data.email);
        localStorage.setItem("userOrgId", response.data.orgId );
        localStorage.setItem("memberId", response.data.memberId )
        callback();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  static addMember(memberData, callback) {
    memberData.orgId = localStorage.getItem("userOrgId");
    if(memberData.isAdmin === 1){
      memberData.isAdmin = true;
    }
    
    axios
      .post(Api.DEV_BASE_URL + "/api/members/add", memberData)
      .then(function (response) {
        callback();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  static loadAllMembers(callback){
    const id = localStorage.getItem("userOrgId");
    axios
      .get(Api.DEV_BASE_URL + "/api/members/"+id)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  static loadAllMembersAdmins(callback){
    const id = localStorage.getItem("userOrgId");
    axios
      .get(Api.DEV_BASE_URL + "/api/members/admin/"+id)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  static loadMemberDetails(id, callback){
    axios
      .get(Api.DEV_BASE_URL + "/api/members/member/"+id)
      .then(function (response) {
        console.log({ response})
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  
}
