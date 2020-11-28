
import { useState } from 'react';


const correctEmail = "info@vikana.net"
const correctPassword = "vikana1234"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if(email === correctEmail && password === correctPassword){
        setMessage("ログイン成功！")
        return
      }
  
      setMessage("メールアドレスかパスワードが違います")
    }, 1000);

  }

  return(
    <div>
        <div>
            <div>
                <p>Email</p>
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <p>Password</p>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
                <input type="submit" value="ログイン" onClick={handleChange} />
                {loading ? <p>Loading</p> : <p>{message}</p>}
            </div>
        </div>
    </div>
  );
}

export default Login;