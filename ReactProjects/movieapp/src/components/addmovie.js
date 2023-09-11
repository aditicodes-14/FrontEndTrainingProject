import React from "react";  //w/o react cannot craete class
import 'bootstrap/dist/css/bootstrap.min.css';

class AddMovie extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            description:'',
            type:''
        }
        this.setMovieName=this.setMovieName.bind(this);
        this.setMovieDescription=this.setMovieDescription.bind(this);
        this.setMovieType=this.setMovieType.bind(this);
        this.saveMovie=this.saveMovie.bind(this);

    }
    setMovieName(e){
        //how to change state property value->setState()
        this.setState({name:e.target.value}); // change state
    }
    setMovieDescription(e){
        //how to change state property value->setState()
        this.setState({description:e.target.value}); // change state
    }setMovieType(e){
        //how to change state property value->setState()
        this.setState({type:e.target.value}); // change state
    }
    saveMovie(e){
        alert('Movie added: '+this.state.name + ',' + this.state.type);
        //fetch('.net core api')
    }
//every class fnc should have a render fnc

    render(){
        return(
            <div>
                <h2>Movie Entry</h2><hr/>
                <form>
                    <div className="form-group">
                        <label>Movie Name</label>
                        <input type="text" value={this.state.name} className="form-control" onChange={this.setMovieName}/>
                    </div>
                    <div className="form-group">
                        <label>Movie Description</label>
                        <input type="text" value={this.state.description} className="form-control" onChange={this.setMovieDescription}/>
                    </div>
                    <div className="form-group">
                        <label>Movie Type</label>
                        <input type="text" value={this.state.type} className="form-control" onChange={this.setMovieType}/>
                    </div>
                    <input type="button" value="Save" className="btn btn-primary" onClick={this.saveMovie}/>
                    <input type="button" value="Reset" className="btn btn-secondary" />

                </form>
            </div>
        );//every render should have return
    }
}
export default AddMovie;