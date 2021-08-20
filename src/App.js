import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form'
import Login from './components/Login';
import Title from './components/Title';
import TodoList from './components/TodoList';
import { toast, ToastContainer } from 'react-toastify';
import { firebaseApp } from './lib/firebase';

function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState({});

  useEffect(() => {
    firebaseApp.auth()
      .onAuthStateChanged(user => {
        if(user){
          setIsLogin(true)
          return setUser(user)
        }
      })
    
  }, [isLogin,user])

  const loginUser = ({email, password}) => {
    firebaseApp.auth()
      .signInWithEmailAndPassword(email,password)
      .then((res) => {
              setUser(user)
              isLogin(true)
      })
      .catch((error) => console.log(error))
  }

  const logoutUser = () => {
    firebaseApp.auth()
      .signOut()
      .then((res) => {
        setIsLogin(false)
        setUser(false)
      })
      .catch((error) => {
        return toast.error(error.message)
      })
  }
  

  return (
    <div className="container">
      <ToastContainer />
      <div className="app-wrapper">
        {isLogin ? 
          <>
              <div>
                <Title />
              </div>
              <div className="form-wrapper">
                <Form />
              </div>
              <div>
                <TodoList />
              </div>
          </>
        : (
          <>
            <Login loginUser={loginUser}/>
          </>
        )
      }
      </div>
    </div>
  );
}

export default App;
