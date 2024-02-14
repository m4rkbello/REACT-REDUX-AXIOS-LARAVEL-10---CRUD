// UpdateUser Component
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ActionUpdateUser, FetchUserObjData } from "../redux/Actions";

const UpdateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const userObjdata = useSelector((state) => state.user.userobj);

    useEffect(() => {
        console.log("Fetching user object data...");
        dispatch(FetchUserObjData(id));
    }, []);

    useEffect(() => {
        if (userObjdata) {
            setName(userObjdata.name);
            setEmail(userObjdata.email);
            setPhone(userObjdata.phone);
            setRole(userObjdata.role);
        }
    }, [userObjdata]);

    const handleSubmitUpdateUser = (e) => {
        e.preventDefault();
        const userobj = { name, email, phone, role };
        dispatch(ActionUpdateUser(userobj));
        navigate('/user');
    };

    return (
        <div className="navbar-color">
            <div className="col-12 navbar-color">
                <div className="card-header">
                    <h1 className="addUserText">UPDATE USER!</h1>
                </div>
                <form onSubmit={handleSubmitUpdateUser}>
                    <center>
                        <div className="col-6">
                            <div className="form-group">
                                <h4 className="text-Choi">Name</h4>
                                <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" required />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <h4 className="text-Choi">Email</h4>
                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" required />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <h4 className="text-Choi">Role</h4>
                                <select value={role} onChange={e => setRole(e.target.value)} className="form-control" required>
                                    <option value="Admin">Admin</option>
                                    <option value="Staff">Staff</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <h4 className="text-Choi">Phone</h4>
                                <input type="text" value={phone} onChange={e => setPhone(e.target.value)} className="form-control" required />
                            </div>
                        </div>
                    </center>
                    <div className="card-footer">
                        <br />
                        <Link to={'/user'} className="btn btn-danger">Back</Link>
                        <button className="btn btn-primary mx-2" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
