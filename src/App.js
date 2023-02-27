import { useSelector } from 'react-redux';
import './App.css';
import Login from './Screens/Login';
import { selectUser } from './Redux/UserSlice';
import Logout from './Screens/Logout';

function App() {
  
  const user = useSelector(selectUser);
  console.log(user)
  return (
      <>
      {user ? <Logout/> : <Login/>}
      </>
  );
}

export default App;
