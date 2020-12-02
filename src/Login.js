import { useState, useEffect } from 'react';
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

 /*  const [login, setLogin] = useState() */
    useEffect(()=>{
        
    },[]);
    
    
  const handleChange = (e) => {
    
    /*ここから */
    e.preventDefault();
    const method="POST";
    const body = new FormData(document.getElementById('input'));
    return fetch('url',{
      method,
      body
    })
    .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          inputText:''
        });
        console.log(responseJson);
      })
      .catch((error) =>{
        console.error(error);
      });
      /*ここまででフォームで入力したemailとpasswordをrailsに送りたいです。 */
      /*ここから */
    const fetchData = async () => {
      const result = await axios(
          'http://localhost:3001/logins'
      );
      setMessage(result.data);
    };
    fetchData();
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setMessage();
    }, 1000);
    /*ここまでで合否のメッセージを取得する処理をしたいです。 */
    
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