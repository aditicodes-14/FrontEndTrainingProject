import React from "react";  //w/o react cannot craete class
import 'bootstrap/dist/css/bootstrap.min.css';

class AddUser extends React.Component{
    constructor(){
        super();
        this.state={
            u_name:'',
            u_mail:'',
            u_mobile:''
        }
        this.setUserName=this.setUserName.bind(this);
        this.setUserMail=this.setUserMail.bind(this);
        this.setMobileNo=this.setMobileNo.bind(this);
        this.saveUser=this.saveUser.bind(this);

    }
    setUserName(e){
        //how to change state property value->setState()
        this.setState({u_name:e.target.value}); // change state
    }
    setUserMail(e){
        //how to change state property value->setState()
        this.setState({u_mail:e.target.value}); // change state
    }
    setMobileNo(e){
        //how to change state property value->setState()
        this.setState({u_mobile:e.target.value}); // change state
    }
    saveUser(e){
        alert('Movie added: '+this.state.u_name + ',' + this.state.u_mobile);
        //fetch('.net core api')
    }
//every class fnc should have a render fnc

    render(){
        return(
            <div>
                <h2>User Entry</h2><hr/>
                <form>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" value={this.state.name} className="form-control" onChange={this.setUserName}/>
                    </div>
                    <div className="form-group">
                        <label>User Mail</label>
                        <input type="text" value={this.state.u_mail} className="form-control" onChange={this.setUserMail}/>
                    </div>
                    <div className="form-group">
                        <label>User Mobile number</label>
                        <input type="text" value={this.state.u_mobile} className="form-control" onChange={this.setMobileNo}/>
                    </div>
                    <input type="button" value="Save" className="btn btn-primary" onClick={this.saveUser}/>
                    <input type="button" value="Reset" className="btn btn-secondary" />

                </form>
            </div>
        );//every render should have return
    }
}
export default AddUser;