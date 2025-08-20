import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "../Reducers/userSlice";
import { useEffect } from "react";

export default function Account()
{
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.userData);
    
    useEffect(()=>{
        console.log("user details from Account page" + user?.fullname);
    },[])

    return(
        // parent container
        <div className='d-flex flex-column w-100 vh-100 mx-auto' style={{maxWidth:'375px', backgroundColor:'#F7F8F9'}}>
            <div className="bg-white w-100 p-4" style={{height:'68px'}}>
                <div style={{fontSize:'18px', height:'100%'}}>Account Settings</div>
            </div>
            <div className='d-flex flex-column w-100 h-50'>
                {/* user-details */}
                <div className='d-flex p-4'>
                    <div className='rounded-circle me-4' style={{position:'relative',height:'76px', width:'76px'}}>
                        <img src="./media/user-pic.jpg" className='rounded-circle' style={{width:'100%'}}/>
                        <img src="./media/cam-icon.jpg" className='rounded-circle' style={{position:'absolute', bottom:0,right:0, width:'21px', height:'21px'}}/>
                    </div>
                    <div className=''>
                        <span style={{fontSize:'15px', color:'#1D2226', '-webkit-text-stroke': '0.5px #1D2226'}}>{user?.fullname}</span><br/>
                        <span style={{fontSize:'14px', color:'#1D2226'}}>{user?.email}</span>
                    </div>
                </div>
                {/* content */}
                <div className='p-4 mx-0 w-100' style={{ fontSize:'14px', color:'#1D2226'}}>
                    Lorem Ipsum Dolor Sit Amet, Consetet Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </div>
                <hr style={{border:'none', borderTop:'1px dashed black'}}/>
            </div>
            
        </div>
    )
}
