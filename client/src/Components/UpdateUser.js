import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ActionUpdateUser, DispatchAddUser, FetchUserObjData } from "../redux/Actions";


const UpdateUser = () => {
    const [id, idchange] = useState(0);
    const [name, namechange] = useState('');
    const [email, emailchange] = useState('');
    const [phone, phonechange] = useState('');
    const [role, rolechange] = useState('');

    //add useDispatch para mapasa ang data sa backend
    const dispatch = useDispatch();

    //useNavigate after add adto sa path: 127.0.0.1/users
    const navigate = useNavigate();

    //para makuha ang id sa user gamitan ug useParams
    const {markbello} = useParams();

    //useSELECTOR para makuha ang states(data)
    const userObjdata = useSelector((state)=>state.user.userobj);

    //nag gunit ug data na gikan sa input fields
    //functtion para ipasa ang data sa dispatch
    const handleSubmitUpdateUser = (e) => {
        const userobj = {id, name, email, phone, role };
        e.preventDefault();
        dispatch(ActionUpdateUser(userobj, id));
        console.log("DATA ONCHANGE", userobj);
        navigate('/user')
    };

    useEffect(() => {
        dispatch(FetchUserObjData(markbello))
    }, [])

    useEffect(() => {
      if(userObjdata){
        idchange(userObjdata.id);
        namechange(userObjdata.name);
        emailchange(userObjdata.email);
        phonechange(userObjdata.phone);
        rolechange(userObjdata.role);
      }
    }, [userObjdata])



    return (
        <div className="navbar-color">
            <div className="col-12 navbar-color">

            <div className="card-header">
                <h1 className="addUserText">UPDATE USER!</h1>
            </div>
                <form onSubmit={handleSubmitUpdateUser} >
                    <center>
                    <div className="col-6">
                    <div className="form-group">
                        <h4 className="text-Choi">Id</h4>
                        <input type="text" value={id} disabled={true} className="form-control" required/>
                      
                    </div>
                </div>
                    
                    <div className="col-6">
                        <div className="form-group">
                            <h4 className="text-Choi">Name</h4>
                            <input type="text" value={name || ''} onChange={e => namechange(e.target.value)} className="form-control" required/>
                          
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="form-group">
                    <h4 className="text-Choi">Email</h4>
                    <input type="email" value={email || ''} onChange={e => emailchange(e.target.value)} className="form-control" required/>
                    
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                        <h4 className="text-Choi">Role</h4>
                            <select value={role || ''} onChange={e => rolechange(e.target.value)} className="form-control" required>
                                <option value="Admin">Admin</option>
                                <option value="Staff">Staff</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                        <h4 className="text-Choi">Phone</h4>
                            <input type="text" value={phone || ''} onChange={e => phonechange(e.target.value)} className="form-control" required />
                        
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
    )
}

export default UpdateUser;

