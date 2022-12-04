import React, {useEffect, useState} from 'react'

export default function User() {

    const [user, setUser] = useState({
        f_name:'',
        l_name:'',
        username:'',
        email:'',
        password:''
    });

    const [items, setItems] = useState([]);

    const {f_name, l_name, username, email, password} = user;
     const onInputChange = (e) =>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value});
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log(user);
        user.push(items )
        localStorage.setItem('user', JSON.stringify(user));
        
    }

    useEffect(()=>{
        const userInfo = localStorage.getItem('user');
        // console.log(JSON.parse(userInfo));
        const userData = JSON.parse(localStorage.getItem('user'));
        console.log(userData);
        if(userData){
            setItems(userData)
        }
        console.log(items)
    },[])



  return (
    <>
    <div className='container mt-3'>
        <div className="card col-sm-7 m-auto">
            <div className="card-header">
               <h3>Add User</h3> 
            </div>
            <div className="card-body ">
                <form onSubmit={e => onSubmit(e)}>
                    <div className="formgroup mt-3">
                        <label htmlFor="f_name">First Name</label>
                        <input type="text" 
                               name="f_name" 
                               id="f_name"
                               className='form-control'
                               placeholder='First Name'
                               value={f_name}
                               onChange ={e => onInputChange(e)} />
                    </div>
                    <div className="formgroup mt-3">
                        <label htmlFor="l_name">Last Name</label>
                        <input type="text" 
                               name="l_name" 
                               id="l_name"
                               className='form-control'
                               placeholder='Last Name'
                               value={l_name}
                               onChange ={e => onInputChange(e)} />
                    </div>
                    <div className="formgroup mt-3">
                        <label htmlFor="username">Username</label>
                        <input type="text" 
                               name="username" 
                               id="username"
                               className='form-control'
                               placeholder='Username'
                               value={username}
                               onChange ={e => onInputChange(e)} />
                    </div>
                    <div className="formgroup mt-3">
                        <label htmlFor="email">Email Id</label>
                        <input type="email" 
                               name="email" 
                               id="email"
                               className='form-control'
                               placeholder='Email Id'
                               value={email}
                               onChange ={e => onInputChange(e)} />
                    </div>
                    <div className="formgroup mt-3">
                        <label htmlFor="password">Password </label>
                        <input type="password" 
                               name="password" 
                               id="password"
                               className='form-control'
                               placeholder='Password'
                               value={password}
                               onChange ={e => onInputChange(e)} />
                    </div>

                    <div className="form-action mt-3">
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                    
                </form>
                
            </div>
        </div>

        <div className="card mt-3">
            <div className="card-header">
                <h3>User Details</h3>
            </div>
            <div className="card-body">
                <table className='table table-hover table-bordered'>
                    <thead>
                        <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Email Id</th>
                        <th>Password</th>
                        <th>Action</th>
                        </tr>   
                    </thead>
                    <tbody>
                        
                            {
                                console.log(items)
                                // items.map((item, i) =>{
                                //   return (
                                //     <tr>
                                //         <td>{item.f_name}</td>
                                //         <td>{item.l_name}</td>
                                //         <td>{item.username}</td>
                                //         <td>{item.email}</td>
                                //         <td>{item.password}</td>
                                //         <td></td>
                                //     </tr>
                                //   )          
                                // })
                            }
                       
                    </tbody>
                </table>
            </div>
        </div>

    </div>
    </>
  )
}
