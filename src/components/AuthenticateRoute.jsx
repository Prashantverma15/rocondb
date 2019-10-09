import React,{Component} from 'react';
import AuthenticationService from './AuthenticationService';
import {Route,Redirect} from 'react-router-dom';

export default class AuthenticationRoute extends Component{

    render(){
        if(AuthenticationService.IsUserLoggedIn()){
            console.log("Inside ");
            return <Route {...this.props} />
        }
        else {
            console.log("Inside ");
            return <Redirect to ="/" />
    }
}
}