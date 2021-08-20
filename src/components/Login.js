import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Login = ({ loginUser }) => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email || !password){
            return toast.error('Fill the required field', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }

        const data = {
            email, password
        }
        
        loginUser(data)
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="title">
                <h1>Login</h1>
            </div>
            <div className="form-group">
                <input className="task-input" 
                        type="email" 
                        placeholder="JohnDoe@gmail.com" 
                        name="email"
                        value={email}
                        style={{margin: "20px"}}
                        onChange={handleEmailChange}/>
            </div>
            <div className="form-group">
                <input className="task-input" 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        value={password}
                        style={{margin: "20px"}}
                        onChange={handlePasswordChange}/>
            </div>
            <div className="form-group">
            <button className="button-add" 
                    style={{margin: "20px", textAlign:"center", padding:"10px"}}
                    >Login</button>
            </div>
        </form>
    )
}

export default Login
