import React,{useState,useEffect} from 'react'

const IncrementDecrement = () => {
    const[num,setNum]=useState(0)  // useState can have variables, arrays, objects  useState({}) => empty object  useState([])=> empty array
    // num is a variable name which has a initial value of 0
    //setNum is a function which changes the state of the variable num and changed value
    
    const increment=()=>(
        setNum(num+1)
    )

    // useEffect(()=>{
    //     alert('this is a side effect due to useeffect hooks')
    // },[])

  return (
    <>
    <h2>{num}</h2>
    <button className='btn btn-primary' onClick={increment}>Click to increase</button>
    <button className='btn btn-primary' onClick={()=>setNum(num+1)}>Click to increase</button>  &nbsp;&nbsp;
    {
        num>0 &&
    <button className='btn btn-danger' onClick={()=>setNum(num-1)}>Click to decrease</button>

    }
    <button className='btn btn-danger' onClick={()=>setNum(num-1)}>Click to decrease</button>
    </>
  )
}

export default IncrementDecrement