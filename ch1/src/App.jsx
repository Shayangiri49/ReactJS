import { CardSection } from "./components/CardSection";
import { EventHandling } from "./components/EventHandling";
import { FAQ } from "./components/FAQ section/FAQ";
import { Greeting } from "./components/Greeting";
import { UseState } from "./components/Hooks/UseState";
import { LearnComponent } from "./components/LearnComponent"
import { LearnEvent } from "./components/LearnEvent";
import { LearnJSX } from "./components/LearnJSX"
import { LearnProps } from "./components/LearnProps"
import { Popup } from "./components/Popup Modal/Popup";
import { Calculate } from "./components/caculatorapp/Calculate";


function App() {
let roll = {
  n: "Shayan",
  i: 12345,
};
  return (
    <>
    {/* <LearnComponent/> */}
    {/* <CardSection/> */}
    {/* <LearnJSX/> */}
    {/* <LearnProps Name="Shayan Giri" shayan = {roll}/>
    <LearnEvent/> */}
    {/* <EventHandling/> */}
    {/* <UseState/> */}
    {/* <Popup/> */}
    {/* <div className="w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-600 p-4">
    <FAQ/>
    </div> */}
    {/* <Greeting/> */}
    <Calculate/>
   
    </>
  )
}   

export default App
