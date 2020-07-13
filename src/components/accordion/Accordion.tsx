import React from "react";

export const Accordion = () => {
    return <div className='accordion__content'>
        <AccordionTitle />
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

const AccordionTitle = () => {
    return <>
        <h3>Menu</h3>
    </>
}