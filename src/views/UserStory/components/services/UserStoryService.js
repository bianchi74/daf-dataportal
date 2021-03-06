import { serviceurl } from '../../../../config/serviceurl.js'

export default class UserStoryService {
    

    urlIframe = serviceurl.apiURLDatiGov + "/dashboard/iframes?apikey=test";
    baseUrl = serviceurl.apiURLDatiGov  + "/user-stories";

    constructor() {

    }

    async get(id) {
        const response = await fetch( this.baseUrl + "/" + id );
        return response.json();
    }

    async list() {
        const response = await fetch( this.baseUrl );
        //mock
        //const response = await fetch( this.baseUrl + "/list");
        return response.json();
    }

    async save(story) {

        const response = await fetch( this.baseUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(story)
        })
        
        return response.json();
    }
    
    async remove(id) {

        const response = await fetch( this.baseUrl + "/" + id , {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        
        return response.json();
    }
} 