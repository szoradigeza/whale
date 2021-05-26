import { authService } from './auth.service';
import configData from '../config.json';
import { toast } from 'react-toastify';

export class ApiService {
   static myInstance = null;
   apiUrl = null;

   constructor() {
      this.isNumberOfServersEqOne()
         ? this.setDefaultApiUrl()
         : (this.apiUrl = null);
   }

   async postReq(url, body) {
      return await this.request(this.apiUrl + url, 'POST', body);
   }

   async putReq(url, body) {
      return await this.request(url, 'PUT', body);
   }

   async deleteReq(url) {
      return await this.request(url, 'DELETE');
   }

   async getReq(url) {
      return await this.request(this.apiUrl + url, 'GET');
   }

   async request(url, method, body = null) {
      const requestOptions = {
         method: method,
         headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authService.getJWT()}`,
         }),
      };

      if (body != null) {
         requestOptions.body = {
            body: JSON.stringify(body),
         };
      }
      return fetch(url, requestOptions).then(this.handleResponse);
   }

   handleResponse(response) {
      return response.text().then((text) => {
         console.log(text);
         const data = text && JSON.parse(text);
         console.log(data);
         if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
               // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
               authService.logout();
               window.location.reload();
            }

            const error = (data && data.message) || response.statusText;
            console.log(response);
            toast.error(data.msg);
            return Promise.reject(error);
         }
         data.msg && toast.success(data.msg);
         console.log(data);
         return data;
      });
   }
 
   async uploadFile(url, fd) {
      await fetch(this.apiUrl + url, {
         method: 'POST',
         body: fd,
      })
         .then(this.handleResponse)
         .catch((err) => {
            console.log(err);
            //TODO notification
         });
   }

   setApiUrl(apiUrl) {
      this.apiUrl = apiUrl;
   }

   isNumberOfServersEqOne() {
      return configData.SERVERS.length === 1 ? true : false;
   }

   setDefaultApiUrl() {
      this.apiUrl = configData.SERVERS[0].URL;
   }

   static getInstance() {
      if (ApiService.myInstance == null) {
         ApiService.myInstance = new ApiService();
      }
      return this.myInstance;
   }
}
