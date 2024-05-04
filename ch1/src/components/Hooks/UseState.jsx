import { useState } from "react"
import "./UseState.css"

export const UseState = () => {

  let template = "";
  let [count, setCount] = useState(0)
  let [pshow, setPshow] = useState(false)
  let [status, setStatus] = useState(false)
  let [pstatus, setPstatus] = useState(false)
  let [menuStatus, setMenuStatus] = useState(false)

  if (pshow) {
    template = <>
      <div className="flex items-center gap-5">
        <button onClick={() => setPshow(!pshow)} className="bg-yellow-500 p-3 text-[20px] rounded-md">Hide</button>
        <p className="text-[18px] text-red-500">Welcome To My Dark World</p>
      </div>

    </>
  } else {
    template = <button onClick={() => setPshow(!pshow)} className="bg-yellow-500 p-3 text-[20px] rounded-md">Show</button>
  }

  let handleAdd = () => {
    setCount(count + 1)
  }
  let handleSub = () => {
    setCount(count - 1)
  }

  return (
    <>
      <button onClick={() => setMenuStatus(!menuStatus)} className="micon">
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}

      </button>
      <div className={`menu ${menuStatus ? "activeMenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Service</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <h1 className="text-center text-[30px] text-cyan-900 underline">useState Hook</h1>
      <div className="flex items-center justify-center gap-5 m-10">
        <button onClick={handleSub} className=" bg-yellow-500 p-3 text-[20px] rounded-full"> - </button>
        <p className="text-[20px]">{count}</p>
        <button onClick={handleAdd} className=" bg-yellow-500 p-3 text-[20px] rounded-full"> + </button>
      </div>
      <div className="flex justify-center">
        {template}
      </div>

      <div className="flex flex-col gap-3">
        <button onClick={() => setStatus(!status)} className="bg-[#76cf9b] m-auto p-2 mt-5 rounded-md">{(status) ? "Hide" : "Show"}</button>
        {(status) ? <p className=" bg-orange-400 w-[300px] m-auto p-3 text-center text-lg">Learn ReactJS</p> : ""}
      </div>

      <div className="m-auto w-96">
        <input className=" bg-slate-500 rounded-md p-1 mr-3" type={(pstatus) ? "text" : "password"} />
        <button onClick={() => setPstatus(!pstatus)} className="bg-[#76cf9b] m-auto p-1 mt-5 rounded-md">{(pstatus) ? "Hide" : "Show"}</button>
      </div>
    </>
  )
}
