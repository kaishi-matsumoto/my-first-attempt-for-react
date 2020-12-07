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
    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
      }).then(response=>{
        return response.json();
      }).then(result=>{
        console.log("---- api から帰ってきた json ----")
        console.log(result)
       })
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