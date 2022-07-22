import { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import './style.css'

export default function LoadingScreen() {
    let [loading, setLoading] = useState(false);
  
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },5000)
    },[])
  return (
    <div className="logo">
      {
        loading ? (
            <FadeLoader size={30} loading={loading}/>
        ):(
            <h1>Robin Hossain</h1>
        )
      }
    </div>
  )
}
