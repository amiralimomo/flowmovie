import { useState } from "react"

export const useToggle=()=>{
    const [toggle,setToggle]=useState(false)
    const active=()=>{
        setToggle(true)
        console.log(toggle)
    }
    const notActive=()=>{
        setToggle(false)
        console.log(toggle)
    }
    return [toggle,active,notActive]
}


