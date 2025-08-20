import axios from "axios";
import { useState,useEffect } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setUser } from "../Reducers/userSlice";

export default function Login(){
    const [em,setem] = useState("");
    const [pass,setpass] = useState("");
    const [valid,setvalid] = useState(false);
    const [loading,setloading] = useState(false);
    
    const nav = useNavigate();

    const dispatch = useDispatch(); 

     useEffect(()=>{
        if(em.length > 0 && pass.length > 0)
        {
            setvalid(true);
        }
    },[em,pass])

    const handlelogin=async(e)=>{
        e.preventDefault();
        try{
            setloading(true);
            const logindata = {
                em,
                pass
            }
            const result =await axios.post(`${process.env.REACT_APP_API_URL}/api/loginUser`, logindata);
            if(result.data.success)
            {
                dispatch(setUser(result.data.user));
                sessionStorage.setItem("user", JSON.stringify(result.data.user));
                nav("/account")
            }
            else
            {
                toast.error(result.data.msg);
            }
        }
        catch(e)
        {
            console.log(e.message);
            toast.error("Server error while trying to log in!")
        }
        finally{
            setloading(false);
        }
    }

    return(
         <div className='d-flex flex-column w-100 vh-100 mx-auto' style={{maxWidth:'375px', backgroundColor:'#F7F8F9'}}>
            <div className='d-flex flex-column w-100 h-50 p-4 mt-2'>
                
                {/* text */}
                <p style={{fontSize:'28px', color:'#1D2226', '-webkit-text-stroke': '0.5px #1D2226'}}>Signin to your <br/> PopX Account </p>
                <span style={{fontSize:'18px', color:'#1D2226', opacity:'0.6'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
                
                {/* buttons */}
                <form className='mt-4 d-flex flex-column'>

                   <div style={{position:'relative'}}>
                        <input 
                        className="form-control bg-transparent ps-3" style={{fontSize:'14px'}}
                        type="email" 
                        placeholder="Enter email"
                        required={true}
                        onChange={(e)=>setem(e.target.value)}
                        />
                        <span style={{fontSize:'13px',color:'#6C25FF', position:'absolute', 
                            top:'-11px', left:'15px',zIndex:'2', 
                            backgroundColor:'#F7F8F9', width:'103px'}}
                        >
                            Email
                        </span>
                    </div>
                    <br/>
                    <div style={{position:'relative'}}>
                        <input  
                        className="form-control bg-transparent ps-3" style={{fontSize:'14px'}}
                        type="password" 
                        placeholder="Enter password"
                        required={true}
                        onChange={(e)=>setpass(e.target.value)}
                        />
                        <span style={{fontSize:'13px',color:'#6C25FF', position:'absolute', 
                            top:'-11px', left:'15px',zIndex:'2', 
                            backgroundColor:'#F7F8F9', width:'103px'}}
                        >
                            Password
                        </span>
                    </div>
                    <br/>
                                {loading?<div className="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:
                <button type="submit" className='btn mb-2'  style={valid?{backgroundColor:`#6C25FF`, color:'white'}:{backgroundColor:`#CBCBCB`, color:'white'}} onClick={handlelogin}>Login</button>}
         
                </form>
            
            </div>

        </div>
    )
}
