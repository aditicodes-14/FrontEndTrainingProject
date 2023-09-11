import logo from './logo.svg';
import Menubar from './menu';
import AddMovie from './components/addmovie';
import AddUser from './components/adduser';
import AddBooking from './components/addbooking';
function App() {
  return (
    <div>
      <Menubar></Menubar>
     
      <AddMovie></AddMovie>
      <hr color='black'/>
      <AddUser></AddUser>
      <hr color='black'/>
      <AddBooking></AddBooking>
    </div>
  );
}

export default App; // without this cannot access it // react fnc 1st letter in name should be in caps or else it ne js only but with cap and then small, it becomes js
