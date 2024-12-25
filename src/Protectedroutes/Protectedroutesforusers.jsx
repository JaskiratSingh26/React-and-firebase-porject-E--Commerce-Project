/* eslint-disable react/prop-types */
import { Navigate } from "react-router"

export const Protectedroutesforusers = ({children}) => {
    const user = JSON.parse(localStorage.getItem('userData'))
    if (user?.role === "user") {
      return children
    }
    else {
      return <Navigate to={'/login'}/>
    }
}