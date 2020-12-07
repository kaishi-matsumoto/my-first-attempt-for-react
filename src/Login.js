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
    const data= document.querySelector('.fetchForm');
    const url = 'http://localhost:3001/api/v1/informations';
    let formData = new FormData(data);
    
    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData) // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
      }).then(response=>{
        console.log(response)
        return response.json();
      }).then(result=>{
        console.log("---- api から帰ってきた json ----")
        console.log(result)
       })
      /*ここまででフォームで入力したemailとpasswordをrailsに送りたいです。 */
      /*ここから */
    const fetchData = async () => {
      const result = await axios(
          url
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
              <form className="fetchForm">
                <p>Email</p>
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <p>Password</p>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
                <button onClick={handleChange}>ログイン</button>
                {loading ? <p>Loading</p> : <p>{message}</p>}
              </form>
            </div>
        </div>
    </div>
  );
}


export default Login;