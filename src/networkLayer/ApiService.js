import API from "./Api";

/**
 * 
 * @param {*} endPoint 
 * @param {*} service 
 * @param {*} headers 
 */
export function callGetAPICall(endPoint, service, headers) {
  return new Promise((resolve, reject) => {
    API(endPoint, headers)
      .get(service)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {

        // ToDo: Improve error handling once we have more clarity for apis
        if (error && error.response) {
          console.log("Error received in API");
        }
      });
  });
}

/**
 * 
 * @param {*} endPoint 
 * @param {*} service 
 * @param {*} requestPayload 
 * @param {*} headers 
 */
export function callPostFactoryAPICall(
    endPoint,
    service,
    requestPayload,
    headers
  ) {
    return new Promise((resolve, reject) => {
      API(endPoint, headers)
        .post(service, requestPayload)
        .then((response) => {
          if (response.status === 200) {
              resolve(response.data);
          }
        })
        .catch((error) => {
           // ToDo: Improve error handling once we have more clarity for apis
        if (error && error.response) {
            console.log("Error received in API");
          }
        });
    });
  }
