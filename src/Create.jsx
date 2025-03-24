import { useEffect, useMemo, useRef, useState } from "react";

const CreateUser = () =>{
    let [myVar , setmyVar] = useState('Navya');
    let [employee, setEmployee] = useState({ name: "navya", age: 30 , empId: "001" , company: "qentelli" , occupation: "IT"});
    let [count, setCount] = useState(0)
    let numberRef = useRef(null);
    console.log("numberRef", numberRef)
    let  number = useRef(0)
    console.log("number", number)
   
    const useMemoTesting = () => {
        console.log("dummy")
    }

    const result = useMemo(()=>useMemoTesting(), [employee]);


  
    const setName = () =>{
        setmyVar('yalamati')
        console.log("myVar", myVar)
    } 

    const updateNumber = ()=>{
        // numberRef.current = 1
        numberRef.current.style.color = 'red'
        console.log("number count",numberRef.current )
    }

    const setEmployeeObject = (value , item) =>{
        setEmployee((prevValue) => ({
            ...prevValue , [item] : value
        })
        )
    }

    // console.log("effecy", useEffect) 
    // useEffect(()=>{
    // }, []) 
    
    return (
        <div>
            <p>Hi Hello namaste </p>
            <p>Hi Hello namaste hello {myVar}</p>
            <button onClick={setName}>Click me</button>
            <p>Name is {employee.name} at age {employee.age} with employee id {employee.empId} in the company {employee.company} as a {employee.occupation}</p>
            <p>name: <input type="text" onChange={(e)=>setEmployeeObject(e.target.value, 'name')} /></p>
            <button onClick={updateNumber}>Check Ref</button>
            <p ref={numberRef}>final result count = {number.current}</p>
            <p ref={numberRef}>check count</p>
        </div>
    )
} 

export default CreateUser 

