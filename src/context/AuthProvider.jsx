import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
// export const {Provider} = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate=useNavigate()
  // console.log(user);
  const login = (info) => {
    setUser(info);
    navigate("/dashboard")
  };
const logout=()=>setUser(null)

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
