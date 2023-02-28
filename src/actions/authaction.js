import * as API from "../features/authSlice";

export const LoginForm=(data)=>async(dispatch)=>{
    dispatch({type:'START'});
    try {
        const {data}= await API.LoginUser(data);
        console.log(data)
        
    } catch (error) {
        dispatch({type:'FAILL'});
        console.log(error);
        
    }
};