export const LearnEvent = () => {
    const handleClick1 = (e) => {
        console.log("Button clicked 1");
    }
    const handleClick2 = (myId) => {
        console.log("Button clicked 2", myId);
    }
  return (
    <>
    {/* without Argument */}
    <button onClick={handleClick1} className="p-5 bg-red-300" >Click 1</button>
    {/* with Argument */}
    <button onClick = {(e) => handleClick2("2002345")}>Click 2</button>
    </>
  )
}
