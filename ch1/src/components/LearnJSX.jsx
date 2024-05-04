

export const LearnJSX = () => {
    let model = "G11234"
    let l = [10, 20, 30, 40, 50]
    let status = true;
  return (
    <>
    {/* React.createElement("h1", "null", "Learn JSX 1") */}
    <h1>Learn JSX 1</h1>
    <h1>Learn JSX 2</h1>
    {/* JavaScript Expression in JSX */}
    <h1>Price: {10 + 20}</h1>
    <h1>LG {model}</h1>
    {/* Attribute in JSX */}
    <h1 className="bg-primary">Learn JSX 3</h1>
    <h1 className={model}>Learn JSX 4</h1>
    {l.map((v) => {
      return(
        <h1>{v}</h1>
      )
    })}

    {(status) ? <h1 style={{color: "red"}}>Shayan Giri</h1> : ""}
    </>
  )
}
