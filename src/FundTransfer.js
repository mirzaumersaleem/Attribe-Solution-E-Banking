import React,{Component} from 'react'
import './FundTransfer.css'
import { Button } from 'react-bootstrap';
class FundTransfer extends Component{

constructor(){
super();
    this.state={
     userInfo:{
      senderAccount:'',
      recieverAccount:'',
      accountType:'',
      recieverBank:''
     },
    }
}
inputChange(changeValue,event){
 
this.state.myInfo[changeValue] = event.target.value;
this.setState({
        myInfo : this.state.myInfo
    });

}
successMessage(event){
    debugger;
    this.state.fields.push(this.state.myInfo);
    this.setState({
        fields : this.state.fields
    })
    event.preventDefault();
}
render(){
    return (
<div>
  <form class="FundTransfer">
     <label id="AccountLabel"><b>Select Your Account Type</b></label>
    <select>
    <option value={this.state.userInfo.accountType}>Current</option>
    <option value={this.state.userInfo.accountType}>Saving</option>
    </select>
   <br></br>

    <label id="AccountLabel"><b>Enter Sender Account Number</b></label><br></br>
    <input type="text" value={this.state.userInfo.senderAccount} onChange={this.inputChange.bind(this,"senderAccount")}></input>
  <br></br>
    <label id="AccountLabel"><b>Select Reciever Bank </b></label>
    <select>
    <option value={this.state.userInfo.recieverBank}>Habib Bank Limited</option>
    <option value={this.state.userInfo.recieverBank}>MCB</option>
    <option value={this.state.userInfo.recieverBank}>Allied Form</option>
    <option value={this.state.userInfo.recieverBank}>Bank Al Habib</option>
    <option value={this.state.userInfo.recieverBank}>Tameer Bank</option>  
    </select>
    <br></br>
       <br></br>

    <label id="AccountLabel"><b>Enter Reciever Account Number</b></label><br></br>
    <input type="text" value={this.state.userInfo.senderAccount} onChange={this.inputChange.bind(this,"recieverAccount")}></input>
  <br></br>
 <Button bsStyle="primary" onClick={this.successMessage.bind(this)}><b>Transfer</b></Button>
      
  </form>
</div>
    

    )}
}
export default FundTransfer;