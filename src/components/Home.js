import {useNavigate} from 'react-router'

export default function Home()
{
    const nav = useNavigate();
    return(
        // parent container
        <div className='d-flex flex-column-reverse w-100 vh-100 mx-auto' style={{maxWidth:'375px', backgroundColor:'#F7F8F9'}}>
            <div className='d-flex flex-column w-100 h-50 p-4'>
                
                {/* text */}
                <p style={{fontSize:'28px', color:'#1D2226', '-webkit-text-stroke': '0.5px #1D2226'}}>Welcome to PopX</p>
                <span style={{fontSize:'18px', color:'#1D2226', opacity:'0.6'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
                
                {/* buttons */}
                <div className='mt-4 d-flex flex-column'>
                    <button type="button" className='btn mb-2'  style={{backgroundColor:'#6C25FF', color:'white'}} onClick={()=>nav("/signup")}>Create Account</button>
                    <button  type="button" className='btn'  style={{backgroundColor:'#6C25FF4B', color:'#1D2226', '-webkit-text-stroke': '0.4px #1D2226'}} onClick={()=>nav("/login")}>Already Registered? Login</button>
                </div>
            
            </div>

        </div>
    )
}
