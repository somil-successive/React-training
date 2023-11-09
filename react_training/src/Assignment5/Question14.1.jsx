// Create an HOC named withAuth that restricts access to a specific component to authenticated users only. Implement this HOC on a sample component and demonstrate how it protects routes.

import { useState } from "react";

const withAuth = (OriginalComponent)=>{
    const EnhancedComponent = ()=>{

        const [isAuth, setIsAuth] = useState(false);
        return(
            <OriginalComponent isAuth={isAuth} setIsAuth={setIsAuth}/>
        )
    }
    return EnhancedComponent;
}
export default withAuth;