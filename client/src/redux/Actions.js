import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//GIIMPORT ANG ACTION-TYPES
import { ADD_USER, DELETE_USER, FAILED_REQUEST, GET_USER_LIST, GET_USER_OBJECT_DATA, MAKE_REQUEST, UPDATE_USER } from "./ActionTypes"

//NAG FETCH UG REQUEST
export const makeRequest =()=>{
    return{
        type: MAKE_REQUEST
        
    } 
} 

//FAILED ANG REQUEST
export const failRequest =(err)=>{
    return{
        type: FAILED_REQUEST,
        payload: err
    }
}

//MAGFETCH UG DATA AS SUCCESS
export const getUserList =(data)=>{
    return{
        type: GET_USER_LIST,
        payload: data
    }
}


//MAGDELETE UG USER
export const deleteUser =()=>{
    return{
        type: DELETE_USER
        
    } 
} 


//MAG ADD UG USER
export const addUser =()=>{
    return{
        type: ADD_USER
    }
}


//MAG UPDATE UG USER
export const updateUser =()=>{
    return{
        type: UPDATE_USER
    }
}

//MAGFETCH UG DATA SA USER
export const getUserObjectData =(data)=>{
    return{
        type: GET_USER_OBJECT_DATA,
        payload: data
    }
}



//DISPATCH FUNCTION PARAMAGFETCH UG DATA!
export const FetchUserList =()=> {
    return (dispatch) => {
        // setTimeout(() => {
    
            dispatch(makeRequest());
            axios.get('http://localhost:8000/user')
            .then(res=>{
                const userlist=res.data;
                dispatch(getUserList(userlist));
            }).catch(err=>{
                dispatch(failRequest(err.message))
            })
        // }, 2000);

    }
}

//DISPATCH FUNCTION PARA MAG DELETE UG USER
export const RemoveUser =(code)=> {
    return (dispatch) => {
        // setTimeout(() => {
    
            dispatch(makeRequest());
            axios.delete('http://localhost:8000/user/' + code)
            .then(res=>{
                dispatch(deleteUser());
                toast.success('User deleted successfully!');
            }).catch(err=>{
                dispatch(failRequest(err.message))
            })
        // }, 2000);

    }
}


//DISPATCH FUNCTION PARA MAG DELETE UG USER
export const DispatchAddUser =(data)=> {
    return (dispatch) => {
        // setTimeout(() => {
    
            dispatch(makeRequest());
            axios.post('http://localhost:8000/user/',data)
            .then(res=>{
                dispatch(updateUser());
                toast.success('User Updated successfully!');
            }).catch(err=>{
                dispatch(failRequest(err.message))
            })
        // }, 2000);

    }
}


//DISPATCH FUNCTION PARA MAG DELETE UG USER
export const ActionUpdateUser =(data, code)=> {
    return (dispatch) => {
        // setTimeout(() => {
    
            dispatch(makeRequest());
            axios.put('http://localhost:8000/user/'+code,data)
            .then(res=>{
                dispatch(addUser());
                toast.success('User Added successfully!');
            }).catch(err=>{
                dispatch(failRequest(err.message))
            })
        // }, 2000);

    }
}

//DISPATCH FUNCTION PARAMAGFETCH UG DATA!
export const FetchUserObjData =(markbello)=> {
    return (dispatch) => {
        // setTimeout(() => {
    
            dispatch(makeRequest());
            axios.get('http://localhost:8000/user/' + markbello)
            .then(res=>{
                const userlist=res.data;
                dispatch(getUserObjectData(userlist));
            }).catch(err=>{
                dispatch(failRequest(err.message))
            })
        // }, 2000);

    }
}



