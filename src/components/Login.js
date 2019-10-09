import React,{Component} from 'react';
import "./Login.css";
import {Redirect,withRouter} from 'react-router-dom';
class NewComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        this.handlelogin = this.handlelogin.bind(this);
    }

    handlelogin(e){
        e.preventDefault();
        if(this.state.username === 'sahil' && this.state.password=== 'sahil'){
            this.props.history.push("/admin/dashboard");
        }
    }

    handlechange(e){
        let target = e.target;
        let value = target.type === 'checkbox'? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value,
        })
    }

    render(){
      return (
        <div>
          {/*[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]*/}
          {/*[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]*/}
          {/*[if IE 8]>         <html class="no-js lt-ie9"> <![endif]*/}
          {/*[if gt IE 8]><!*/}  {/*<![endif]*/}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title />
          <meta name="description" content />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="login.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          <div className="main-bg">
            <div className="box-conatiner">
              <div id="a">
                <div className="circle-ripple" />
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <h1 className="heading-left">For Continue Please Login</h1>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="wrap-login100">
                    <span className="login100-form-title">
                      Sign In
                    </span>
                    <form className="login100-form validate-form p-l-55 p-r-55 p-t-20" >
                      <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                        <input className="input100" type="text" name="username" placeholder="Username"  value={this.state.username}
                        onChange={e=>this.handlechange(e)}/>
                        <span className="focus-input100" />
                      </div>
                      <div className="wrap-input100 validate-input" data-validate="Please enter password">
                        <input className="input100" type="password" name="password" placeholder="Password" value={this.state.password}
                        onChange={e=>this.handlechange(e)}/>
                        <span className="focus-input100" />
                      </div>
                      <div className="text-right p-t-13 p-b-23">
                        <span className="txt1" style={{marginRight:'5px'}}>
                          Forgot 
                        </span>
                        <a href="#" className="txt2">
                          Username / Password?
                        </a>
                      </div>
                      <div className="container-login100-form-btn">
                        <button className="login100-form-btn" onClick={e=>this.handlelogin(e)}>
                          Sign in
                        </button>
                      </div>
                      <div className="flex-col-c p-t-140 p-b-40">
                        <span className="txt1 p-b-9">
                          Don’t have an account?
                        </span>
                        <a href="#" className="txt3">
                          Sign up now
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  export default withRouter(NewComponent);