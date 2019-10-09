class AuthenticationService{

    StoreSession(username){
        console.log("in store");
        sessionStorage.setItem("user",username);
    }
    RemoveSession(){
        console.log("in remove");
        sessionStorage.removeItem("user");
    }

    IsUserLoggedIn(){
        console.log("in check");
        let temp=sessionStorage.getItem("user");
        if(temp==null) return false;
        else return true;
    }
}

export default new AuthenticationService();