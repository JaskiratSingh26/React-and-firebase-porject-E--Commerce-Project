/* eslint-disable react/prop-types */
import { Navigate } from "react-router"

export const Protectedroutesforadmin = ({children}) => {
    const user = JSON.parse(localStorage.getItem('userData'))
    if (user?.role === "admin") {
      return children
    }
    else {
      return <Navigate to={'/login'}/>
    }
}