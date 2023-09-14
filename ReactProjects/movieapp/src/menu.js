import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddMovie from './components/addmovie'
function Menubar(){
    return(
      <BrowserRouter>
        <div> 
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to={"/"}>Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/movies"}>Movies</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/booking"}>Booking</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/user"}>User</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/contact"}>Contact</Link>
      </li>
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>

</nav>

<Routes>
  <Route path='/' element={<AddMovie></AddMovie>}></Route>
  <Route path='/movies' element={}></Route>
  <Route path='/bookings' element={}></Route>
  <Route path='/contact' element={}></Route>
</Routes>

        </div>
    );
}
export default Menubar;