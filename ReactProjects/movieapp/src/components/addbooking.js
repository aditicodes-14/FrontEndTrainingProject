import React from "react";  //w/o react cannot craete class
import 'bootstrap/dist/css/bootstrap.min.css';

class AddBooking extends React.Component{
    constructor(){
        super();
        this.state={
            date:'',
            name:'',
            u_name:''
        }
        this.setBookingDate=this.setBookingDate.bind(this);
        this.setMovieName=this.setMovieName.bind(this);
        this.setUserName=this.setUserName.bind(this);
        this.saveBooking=this.saveBooking.bind(this);

    }
    setBookingDate(e){
        //how to change state property value->setState()
        this.setState({date:e.target.value}); // change state
    }
    setMovieName(e){
        //how to change state property value->setState()
        this.setState({name:e.target.value}); // change state
    }setUserName(e){
        //how to change state property value->setState()
        this.setState({u_name:e.target.value}); // change state
    }
    saveBooking(e){
        alert('Movie added: '+this.state.name + ',' + this.state.date);
        //fetch('.net core api')
    }
//every class fnc should have a render fnc

    render(){
        return(
            <div>
                <h2>Booking Entry</h2><hr/>
                <form>
                    <div className="form-group">
                        <label>Booking Date</label>
                        <input type="text" value={this.state.date} className="form-control" onChange={this.setBookingDate}/>
                    </div>
                    <div className="form-group">
                        <label>Movie Name</label>
                        <input type="text" value={this.state.name} className="form-control" onChange={this.setMovieName}/>
                    </div>
                    <div className="form-group">
                        <label>Booking Name (user)</label>
                        <input type="text" value={this.state.u_name} className="form-control" onChange={this.setUserName}/>
                    </div>
                    <input type="button" value="Save" className="btn btn-primary" onClick={this.saveBooking}/>
                    <input type="button" value="Reset" className="btn btn-secondary" />

                </form>
            </div>
        );//every render should have return
    }
}
export default AddBooking;