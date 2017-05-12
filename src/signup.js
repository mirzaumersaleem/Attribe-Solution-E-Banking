//Form Validation Link :https://html5hive.org/reactjs-form-validation-tutorial/
//bootstrap Link :https://react-bootstrap.github.io/components.html#forms
import React,{Component} from 'react';
import  './SignUp_css.css';
import FundTransfer from './FundTransfer.js'
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
    showLogin : false,
    fields:[],
    error:'this is error'
  }
}

successMessage(event){
    alert('one')
    // debugger;
    this.state.fields.push(this.state.myInfo);
    this.setState({
        fields : this.state.fields
    })
    this.handleSubmit();
    event.preventDefault();
}
inputChange(changeValue,event){
 
    this.state.myInfo[changeValue] = event.target.value;
this.setState({
        myInfo : this.state.myInfo
    });
}
handleSubmit(){
  if (this.state.myInfo.fName=="admin"){
     if (this.state.myInfo.password=="admin") {
         console.log("here ");

         this.setState({showLogin : true});
    }
}

}
render(){
return(
   <div>
       { this.state.showLogin ? <FundTransfer/> : 
       
             <form className="signUp_css" onSubmit={this.handleSubmit}>  

            <br></br>
            <label class="uName"><b>User Name</b></label>
            <input className="inputField" type="text" value={this.state.myInfo.fName} onChange={this.inputChange.bind(this,"fName")}
            required={true}
            minLength={4}
            maxLength={20}      
            />
            <br></br>
            
            <br></br>
            <label class="uPass"><b>Password</b></label>
            <input type="password" value={this.state.myInfo.password} onChange={this.inputChange.bind(this,"password")} 
            required={true}
            minLength={5}
           maxLength={18} 
            />
            <br></br>
        
            <br></br>
          
            <Button bsStyle="primary" onClick={this.successMessage.bind(this)}><b>Login</b></Button>
       </form >

       
        }


   </div>
)

}
}
export default SignUp;