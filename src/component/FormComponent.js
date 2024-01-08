import './FormComponent.css'
import {useState} from "react"

const FormComponent =()=>{
    // useState
    const [userName,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [repassword,setRePassword] = useState('')
    
    const [errorUserName,setErrorUserName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorRePassword,setErrorRePassword] = useState('')

    const [userNameColor,setUsernameColor] = useState('')
    const [EmailColor,setEmailColor] = useState('')
    const [PasswordColor,setPasswordColor] = useState('')
    const [RePasswordColor,setRePasswordColor] = useState('')

    const validateForm = (check)=>{
        check.preventDefault()

        if(userName.length>8){
            setErrorUserName('')
            setUsernameColor('green')
        }else{
            setErrorUserName('ป้อนชื่อผู้ใช้มากกว่าจำนวน 8 ตัวอักษร')
            setUsernameColor('crimson')
        }
        
        
        if(email.includes("@")){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
            setEmailColor('crimson')
        }
        
        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('ป้อนรหัสผ่านมากกว่า 8 ตัวอักษร')
            setPasswordColor('crimson')
        }
        
        if(repassword != " " && repassword === password){
            setErrorRePassword('')
            setRePasswordColor('green')
        }else{
            setErrorRePassword("รหัสผ่านไม่ตรงกัน")
            setRePasswordColor('crimson')
        }

    }

    return (
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>แบบฟอร์มลงทะเบียน</h2>

                {/* Username */}
                <div className="form-control">
                    <label>Username</label>
                    {/* เปลี่ยนแปลงค่า state userName ตามข้อความที่กรอก */}
                    <input type="text" placeholder="Please enter your Username" value={userName} onChange={(write)=>setUsername(write.target.value)} style={{borderColor:userNameColor}}/>
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>

                {/* E-Mail */}
                <div className="form-control">
                    <label>E-Mail</label>
                    <input type="email" placeholder="Please enter your E-Mail" value={email} onChange={(write)=>setEmail(write.target.value)} style={{borderColor:EmailColor}}/>
                    <small style={{color:EmailColor }}>{errorEmail}</small>
                </div>

                {/* Password */}
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(write)=>setPassword(write.target.value)} style={{borderColor:PasswordColor}}/>
                    <small style={{color:PasswordColor}}>{errorPassword}</small>
                </div>

                {/* Re-Password */}
                <div className="form-control">
                    <label>Confirm Password</label>
                    <input type="password" value={repassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderColor:RePasswordColor}}/>
                    <small style={{color:RePasswordColor}}>{errorRePassword}</small>
                </div>

                {/* submit */}
                <button type="submit">Register</button>

            </form>
        </div>
    )
}

export default FormComponent