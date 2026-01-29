import {createContext,useContext,useState} from "react"


const UserContext=createContext()

export const UserProvider=({children})=>{

const [user,setUser]=useState(()=>{
    const savedUser=sessionStorage.getItem("user")
    return savedUser?JSON.parse(savedUser):null
})

const login=(userDetails)=>{
setUser(userDetails);
sessionStorage.setItem("user",JSON.stringify(userData))

}



const logout=()=>{
setUser(null);
sessionStorage.removeItem("user")

}
 
 return(
    <UserContext.Provider value={{user,login,logout}}>
    {children}
    </UserContext.Provider>
 )
 
}

export const useUser=()=>useContext(UserContext)


