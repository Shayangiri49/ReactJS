// export const LearnProps = (props) => {
//   return (
//     <>
//     <h1>All Props</h1>
//     <h1>{props.Name} , {props.shayan}</h1>
//     </>
//   )
// }
//  props destructuring
export const LearnProps = ({Name, shayan}) => {
    return (
      <>
      <h1>All Props</h1>
      <h1>{Name} , {shayan.i}</h1>
      </>
    )
  }