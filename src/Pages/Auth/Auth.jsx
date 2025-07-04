// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import classe from './Auth.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../Utlity/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { DataContext } from './../../Components/DataProvider/DataProvider';
import { Type } from '../../Utlity/Action.type'
import { ClipLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState({
    signin: false,
    signup: false
  })
  const [{ user }, dispach] = useContext(DataContext)
  const navigate = useNavigate()
  const navStateData = useLocation() 

  console.log(user)
  const changeHandler = async (e) => {
    e.preventDefault()
    console.log(e.target.name)
    if (e.target.name === 'signin') {
      setLoading({ ...loading, signin: true })
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {

          dispach({
            type: Type.SET_USER,
            user: userInfo.user
          })
          setLoading({ ...loading, signin: false })
          navigate(navStateData?.state?.redirect || '/')
        }).catch((err) => {
          // console.log(err.message)
          setError(err.message)
          setLoading({ ...loading, signin: false })

        })
    } else {
      setLoading({ ...loading, signup: true })

      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispach({
            type: Type.SET_USER,
            user: userInfo.user
          })
          setLoading({ ...loading, signup: false })
        navigate(navStateData?.state?.redirect || '/')
        }).catch((err) => {
          // console.log(err)
          setError(err.message)
          setLoading({ ...loading, signup: false })

        })
    }


  }
  return (
    <section className={classe.login}>
      <Link to={'/'}>
        <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-2000.png" width={200} alt="" />

      </Link>


      <div className={classe.login_container}>
        <span>
          {
            error && <span style={{ color: "red", paddingBottom: "5px" }}>{error}</span>
          }
        </span>

        <h1>Sign In</h1>

        {
          navStateData?.state?.msg && (
            <small
            style={{padding:"5px", textAlign:"center", color:"red", fontWeight:"bold"}}>{navStateData?.state?.msg}</small>
          )
        }
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' placeholder='enter email here' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id='password' placeholder='********' />
          </div>
          <button name='signin' type='submit' onClick={changeHandler}>
            {
              loading.signin ? (<ClipLoader size={15} />) : ("Sign In")
            }</button>
        </form>
        <div className={classe.termsofuse}>
          <input type="checkbox" />
          <p>agree terms of use and privacy</p>
        </div>
        <div className={classe.create_acoount}>
          <h4>New to amazon create account</h4>
          <button name='signup' type='submit' onClick={changeHandler}>
            {
              loading.signup ? (<ClipLoader size={15} />) : (" Create Acount")
            }
          </button>

        </div>

      </div>
    </section>


  )
}

export default Auth
