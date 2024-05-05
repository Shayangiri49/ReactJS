import add from "./Calculator";
import {sub,div,mult} from "./Calculator"

export const Calculate = () => {
  return (
    <>
    <ul>
        <li>sum of two no is {add(40,4)}</li>
        <li>sub of two no is {sub(30,3)}</li>
        <li>sum of two no is {div(10,3)}</li>
        <li>sum of two no is {mult(10,3)}</li>
    </ul>
    </>
  )
}
