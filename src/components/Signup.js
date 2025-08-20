import { useState } from "react"
import axios from 'axios'
import { toast } from "react-toastify";

export default function Signup(){
    const [fullname,setfullname] = useState("Marry Doe");
    const [phone,setphone] = useState("Marry Doe");
    const [email,setemail] = useState("Marry Doe");
    const [pass,setpass] = useState("Marry Doe");
    const [compname,setcompname] = useState("Marry Doe");
    const [agency,setagency] = useState(false);
    const phoneregex = /^\+?[1-9][0-9]{7,14}$/;
    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleSignup=async (e)=>{
        e.preventDefault();
        try{
            if(phoneregex.test(phone) && emailregex.test(email))
            {
            const userData = {
                            fullname,
                            phone,
                            email,
                            pass,
                            compname,
                            agency
                        }
                        const result = await axios.post(`${process.env.REACT_APP_API_URL}/api/createUser`, userData);
                        if(result.status === 200)
                        {
                            toast.info("User Registered!")   
                        }
            }
            else
            {
                toast.warn("Enter Valid Field Values!")
            }
        }
        catch(e)
        {
            toast.error("Server Error!, Please Check Server...")
        }
    }

    return(
         <div className='d-flex flex-column w-100 vh-100 mx-auto' style={{maxWidth:'375px', backgroundColor:'#F7F8F9'}}>
            <div className='d-flex flex-column w-100 h-50 p-4 mt-2'>
                
                {/* text */}
                <p style={{fontSize:'28px', color:'#1D2226', '-webkit-text-stroke': '0.5px #1D2226'}}>Create your <br/> PopX Account </p>
                {/* buttons */}
                <form className='mt-2 d-flex flex-column'>

                    <div style={{position:'relative'}}>
                        <input defaultValue="Marry Doe" 
                        className="form-control bg-transparent ps-3" style={{fontSize:'14px'}}
                        type="text" 
                        placeholder="Enter full name"
                        required={true}
                        onChange={(e)=>setfullname(e.target.value)}
                        />
                        <span style={{fontSize:'13px',color:'#6C25FF', position:'absolute', 
                            top:'-11px', left:'15px',zIndex:'2', 
                            backgroundColor:'#F7F8F9', width:'103px'}}
                        >
                            Full Name
                            <span className="text-danger">*</span>
                        </span>
                    </div>
                    <br/>


                    <div style={{position:'relative'}}>
                        <input defaultValue="Marry Doe" 
                        className="form-control bg-transparent ps-3" style={{fontSize:'14px'}}
                        type="text" 
                        placeholder="Enter phone number"
                        required={true}
                        onChange={(e)=>setphone(e.target.value)}
                        />
                        <span style={{fontSize:'13px',color:'#6C25FF', position:'absolute', 
                            top:'-11px', left:'15px',zIndex:'2', 
                            backgroundColor:'#F7F8F9', width:'103px'}}
                        >
                            Phone Number
                            <span className="text-danger">*</span>
                        </span>
                    </div>
                    <br/>

                    <div style={{position:'relative'}}>
                        <input defaultValue="Marry Doe" 
                        className="form-control bg-transparent ps-3" style={{fontSize:'14px'}}
                        type="email" 
                        placeholder="Enter email address"
                        required={true}
                        onChange={(e)=>setemail(e.target.value)}
                        />
                        <span style={{fontSize:'13px',color:'#6C25FF', position:'absolute', 
                            top:'-11px', left:'15px',zIndex:'2', 
                            backgroundColor:'#F7F8F9', width:'103px'}}
                        >
                            Email address
                            <span className="text-danger">*</span>
                        </span>
                    </div>
                    <br/>

                    <div style={{position:'relative'}}>
                        <input defaultValue="Marry Doe" 
                        className="form-control bg-transparent ps-3" style={{fontSize:'14px'}}
                        type="password" 
                        placeholder="Enter password "
                        required={true}
                        onChange={(e)=>setpass(e.target.value)}
                        />
                        <span style={{fontSize:'13px',color:'#6C25FF', position:'absolute', 
                            top:'-11px', left:'15px',zIndex:'2', 
                            backgroundColor:'#F7F8F9', width:'103px'}}
                        >
                            Password
                            <span className="text-danger">*</span>
                        </span>
                    </div>
                    <br/>

                    <div style={{position:'relative'}}>
                        <input defaultValue="Marry Doe" 
                        className="form-control bg-transparent ps-3" style={{fontSize:'14px'}}
                        type="email" 
                        placeholder="Enter company name"
                        required={false}
                        onChange={(e)=>setcompname(e.target.value)}
                        />
                        <span style={{fontSize:'13px',color:'#6C25FF', position:'absolute', 
                            top:'-11px', left:'15px',zIndex:'2', 
                            backgroundColor:'#F7F8F9', width:'103px'}}
                        >
                            Company name
                        </span>
                    </div>
                    <br/>



                    <span>Are you an Agency?<span className="text-danger">*</span></span>
                    <div className="mt-2 d-flex">
                        <label className="me-4 d-flex align-items-center" role="button">
                            <input type="radio" style={{width:'22px', height:'22px'}} name="agency" onChange={()=>setagency(true)}/>&nbsp;&nbsp;Yes
                        </label>
                        <label className="d-flex align-items-center" role="button">
                            <input type="radio" style={{width:'22px', height:'22px'}} name="agency" defaultChecked={true} onChange={()=>setagency(false)}/>&nbsp;&nbsp;No
                        </label>
                    </div>

                    <button type="submit" className='btn mb-2 mt-5'  style={{backgroundColor:'#6C25FF', color:'white'}} onClick={handleSignup}>Create Account</button>
                </form>
            
            </div>

        </div>
    )
}