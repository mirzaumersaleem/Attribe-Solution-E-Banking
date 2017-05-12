//Form Validation Link :https://html5hive.org/reactjs-form-validation-tutorial/
//bootstrap Link :https://react-bootstrap.github.io/components.html#forms
import React,{Component} from 'react';
import  './SignUp_css.css';

import { Button } from 'react-bootstrap';
// import InputGroup from 'react-bootstrap';
// import FormControl from 'react-bootstrap';
class SignUp extends Component{
constructor(){
  super();
  this.state={
    myInfo : {
        fName:'',
        lName:'',
        e_mail:'',
        password:'',
        cPassword:''
    },
    fields:[],
    error:'this is error'
  }
}

successMessage(event){
    debugger;
    this.state.fields.push(this.state.myInfo);
    this.setState({
        fields : this.state.fields
    })
    event.preventDefault();
}

inputChange(changeValue,event){
 
    this.state.myInfo[changeValue] = event.target.value;
this.setState({
        myInfo : this.state.myInfo
    });

}

render(){
return(
   <div>
      <form className="signUp_css">  

            <br></br>
            <label><b>User Name</b></label>
            <input className="inputField" type="text" value={this.state.myInfo.fName} onChange={this.inputChange.bind(this,"fName")}
            required={true}
            minLength={4}
            maxLength={20}      
            />
            <br></br>
            
            <br></br>
            <label><b>Password</b></label>
            <input type="password" value={this.state.myInfo.password} onChange={this.inputChange.bind(this,"password")} 
            required={true}
            minLength={6}
           maxLength={18} 
            />
            <br></br>
        
            <br></br>
          
            <Button bsStyle="primary" onClick={this.successMessage.bind(this)}><b>Login</b></Button>
       </form>

      

   </div>
)

}
}
export default SignUp;