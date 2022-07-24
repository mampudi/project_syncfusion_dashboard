import { JsonAdaptor } from "@syncfusion/ej2/data";

const headers = {
    "Accept": "application/json",
    "Content-type": "application/json",
    "Ocp-Apim-Subscription-Key":"092e8bf645a147bfa3ce052fc51b6c5e"
}


class Service {
    constructor(){
        this.domain = "https://dytelligence.azure-api.net/v1/";

    }

    request(url, method="Post", data=null){
        url = this.domain + url;
        const options = {
            headers,
            method,
        }
        if(data) {
            options.body = JSON.stringify(data)
        }
        //standard javascript fetch which returns promises
        return fetch(url,options)
    }

    post(url, data) {
        const method = 'POST';
        return this.request(url,method,data).then(res => res.json());
    }

    get(url, id) {
        const method = 'GET';
        return this.request(url, method).then(res => res.json());
    }

    delete(url, id) {
        const method = 'DELETE';

        if(id) {
            //delete single record
            url = url + '/' + id;
        }
        return this.request(url, method).then(res => res.json());
    }

    put() {
        const method = 'PUT';
        return this.request(url,method,data).then(res => res.json());
    }
}

export default Service;