import axios from "axios";
import Api from "../config/api_config";

export default class SignUpService {
  static register = (orgData, adminData) => {

    axios
      .post(Api.DEV_BASE_URL + "/api/register", orgData)
      .then(function (response) {
        console.log(response)
        adminData.orgId = response.data.id;
        axios
          .post(Api.DEV_BASE_URL + "/api/organization/super_admin", adminData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });

    // axios
    //   .post(
    //     "https://httpbin.org/post",
    //     { x: 1 },
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   )
    //   .then(({ data }) => console.log(data));
  };
}
