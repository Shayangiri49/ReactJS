import { Accordion } from "./Accordion"


export const FAQ = () => {
    return (
        <div className="p-4 bg-gray-200 rounded-lg">
            <Accordion title="Do you prefer Android or iOS?" answer="I like to use iOS products"/>
            <Accordion title="Do you prefer writting CSS or Tailwind?" answer="I like to use Tailwind"/>
            <Accordion title="Do you prefer Frontend or Backend development?" answer="I like to use Frontend Development"/>
        </div>
    )
}
