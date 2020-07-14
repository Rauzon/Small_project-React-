import React from "react";

export const Accordion = (props:any) => {
    return <div className='accordion__content'>
        <AccordionTitle title={props.title}/>
        <AccordionBody />
    </div>
}


const AccordionBody = () => {
    return <>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>
}

const AccordionTitle = (props:any) => {
    return <>
        <h3>{props.title}</h3>
    </>
}