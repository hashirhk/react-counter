import {useState} from 'react'


const App = () => {

const [count , setCount] = useState(0);
const increase = () =>{
  setCount(count+1)

}
const decrease = () =>{
  setCount(count-1)
}

const refresh = () =>{
  setCount(count*0)

}

  return (
   

<div className='bg-gray-500 text-black h-[100vh] flex items-center justify-center flex-col space-y-7'>
<div>
<h1 className='text-2xl font-bold '  >MY Counter</h1>
</div>

<span>{count}</span>


    <div className='flex space-x-5 '>
    <button className='bg-green-600 rounded-md p-3 border border-black  hover:bg-green-200' onClick={increase} >Add</button>
    <button  className='bg-red-600 rounded-md p-3 border border-black  hover:bg-green-200' onClick={decrease} >Subtract</button>
    <button className='bg-blue-600 rounded-md p-3 border border-black  hover:bg-green-200' onClick={refresh} >Reset</button>

    </div>


    </div>
    
  )
}

export default App