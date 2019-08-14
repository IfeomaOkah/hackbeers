import axios from "axios";
import qs from "querystring";

export default class Auth {
    constructor(domain) {
        this.domain = domain || process.env.REACT_APP_API;
        this.login = this.login.bind(this);
    }

    login(username, password) {
        console.log(username, password)
        return axios({
            method: "POST",
            url: "/auth/login",
            baseURL: this.domain,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({username, password}),
        })
        .then((response)=> {
            console.log(response)
            this.setUser(response.data)
        })
        .catch(error =>{
            console.log(error);
        })
    }

    signup({username, password, firstname, lastname, email}) {
        return axios({
            method: "POST",
            url: "/auth/signup",
            baseURL: this.domain,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({username, firstname, lastname, password, email}),
        })
        .then((response)=> {
            console.log(response)
            this.setUser(response.data);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    loggedIn(){
        const user = this.getUser()
        return !!user; 
    }

    setUser(user){
        localStorage.setItem('user', JSON.stringify(user));
    }

    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    }
    
    logout(){
       return axios({
            baseURL: this.domain,
            url: "https://ih-beers-api.herokuapp.com/auth/logout"
        })
        .then((res)=> {
            localStorage.removeItem('user');
        })
    }   
}