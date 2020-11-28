import React, { useState } from 'react';
/* import { FaDivide } from 'react-icons/fa'; */
/* import styled from 'styled-components'; */


const Login = ()=>{

    const [form, setForm]=useState({email: '',password: ''})
    const [message, setMessage]=useState({email: '',password: ''})

    const handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setForm({name,value});
        setMessage({name: validator(name,value)})
    } 

    const validator=(name,value)=>{
        switch(name){
            case 'email':
                return setTimeout(emailValidation(value),1000);
            case 'password':
                return setTimeout(passwordValidation(value),1000);

            default:
        }
    }

    const emailValidation=(value)=>{
        const correctEmail='info@vikana.net'
        if(correctEmail !== value) return 'メアドかパスワードが間違ってます ';
        else if(correctEmail === value) return 'ログインしました！';
        
    }

    const passwordValidation=(value)=>{
        const correctPassword='vikana1234'
        if(correctPassword !== value) return 'メアドかパスワードが間違ってます';
        else if(correctPassword === value) return 'ログインしました！'
        
    }

    return(
        <React.Fragment>
            <div>
                <form>
                    <label>
                        <p>{message.email}</p>
                        <input type="text" name="email" value={form.email} onChange={handleChange}/>
                    </label>
                    <label>
                        <p>{message.password}</p>
                        <input type="password" name="password" value={form.password} onChange={handleChange}/>
                    </label>
                    <input type="submit" value="ログイン"
                    disabled={!form.email || !form.password || message.email || message.password} />
                </form>
            </div>
        </React.Fragment>
    );
}


export default Login;