
export const EventHandling = () => {
  let displayData = () => {
    alert("You need to save it")
  }

  let addData = (a, b) => {
      alert (a * b);
  }
  return (
    <>
    <div className="flex justify-center items-center gap-5 m-10">
      <button onClick={()=>addData(20,25)} className=" bg-red-400 flex justify-center items-center p-3 rounded-md hover:bg-orange-300">Add Data</button>
    <button onClick={displayData} className=" bg-red-400 flex justify-center items-center p-3 rounded-md hover:bg-orange-300">SAVE</button>
    </div>
    </>
  )
}
