import { useState } from "react";
const User = ({name,location}) => {
    const [count,setCount] = useState(0);
    return (
        <div className="user-container">
            <button onClick={()=>setCount(count+1)}>Count: {count}</button>
            <p>Welcome, {name}!</p>
            <p>Account details are as follows:</p>
            <h4>Location: {location}</h4>
            <h5>Contact: @akshayb19</h5>
        </div>
    )
}

export default User;