import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const{user,loading} = useContext(AuthContext);
    if(loading){
        return <div>Loading</div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/auth/login'}/>
};

export default PrivateRoute;