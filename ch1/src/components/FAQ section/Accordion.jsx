import { useState } from "react"

export const Accordion = ({title,answer}) => {

const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <div className="py-2">
<button onClick={()=>setAccordionOpen(!accordionOpen)} className="flex justify-between w-full">
    <span>{title}</span>
    {accordionOpen ? <span>-</span> : <span>+</span>}
    
</button>
<div className={`grid overflow-hidden ${
    accordionOpen ? 'grid-rows-[1fr] opacity-100' : ' grid-rows-[0fr] opacity-0'
}`}>
    <div className="overflow-hidden">{answer}</div>
</div>
    </div>
  )
}
