import React,{useEffect,useState} from 'react';
import axios from 'axios';
const Message = () => {
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');
    const [Name, setName] = useState('');
    const [data, setData] = useState({});

    useEffect(()=>{
      
      const article = { title:data };
    axios.post(' https://admin.srkprojects.com/web/api/client/v1/contact-us/', article)
        .then(response => console.log(response));
    },[data])
    
      const handleSubmit=(e)=>{
        e.preventDefault()
        setData({Email:Email,Message:Message,Name:Name})
      }
       
      
    return ( 
        <>
        <form onSubmit={handleSubmit} style={{padding:"10px"}} >

        <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} />
        <br />
        <input  type="email"  placeholder="email" onChange={(e)=>setEmail(e.target.value)}  />
        <br />
            <textarea class="form-control" name="Tname"onChange={(e)=>setMessage(e.target.value)} required id="exampleFormControlTextarea1" rows="3" maxlength="160" placeholder="Write Your Message"></textarea>

        <br />

        <input type="submit" placeholder="send" />
        
        </form>
        
        </>
     );
}
 
export default Message;