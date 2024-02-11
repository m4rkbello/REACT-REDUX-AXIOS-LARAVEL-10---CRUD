import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DispatchAddUser } from "../redux/Actions";

const AddUser = () => {

    const [name, namechange] = useState('');
    const [email, emailchange] = useState('');
    const [phone, phonechange] = useState('');
    const [role, rolechange] = useState('');

    //add useDispatch para mapasa ang data sa backend
    const dispatch = useDispatch();

    //useNavigate after add adto sa path: 127.0.0.1/users
    const navigate = useNavigate();

    //nag gunit ug data na gikan sa input fields
    //functtion para ipasa ang data sa dispatch
    const handleSubmitAddUser = (e) => {
        const userobj = { name, email, phone, role };
        e.preventDefault();
        dispatch(DispatchAddUser(userobj));
        console.log("DATA ONCHANGE", userobj);
        navigate('/user')
    };


    return (
        <div className="navbar-color">
            <div className="col-12 navbar-color">

            <div className="card-header">
                <h1 className="addUserText">Add User!</h1>
            </div>
                <form onSubmit={handleSubmitAddUser} >
                    <center>
                    
                    <div className="col-6">
                        <div className="form-group">
                            <h4 className="text-Choi">Name</h4>
                            <input type="text" value={name} onChange={e => namechange(e.target.value)} className="form-control" required/>
                          
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="form-group">
                    <h4 className="text-Choi">Email</h4>
                    <input type="email" value={email} onChange={e => emailchange(e.target.value)} className="form-control" required/>
                    
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                        <h4 className="text-Choi">Role</h4>
                            <select value={role} onChange={e => rolechange(e.target.value)} className="form-control" required>
                                <option value="Admin">Admin</option>
                                <option value="Staff">Staff</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                        <h4 className="text-Choi">Phone</h4>
                            <input type="text" value={phone} onChange={e => phonechange(e.target.value)} className="form-control" required />
                        
                        </div>
                    </div>
                    <div className="card-footer">
                    <br />
                    <Link to={'/user'} className="btn btn-danger">Back</Link>
                    <button className="btn btn-primary mx-2" type="submit">Submit</button>
                    </div>
                    </center>
                        
                </form>

            </div>
        </div>
    );
}

export default AddUser;