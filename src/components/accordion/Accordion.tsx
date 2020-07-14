import React from "react";

type accordionPropsType = {
    title:string
    collapsed:boolean
}

export const Accordion:React.FC<accordionPropsType> = (props) => {
    return <div className='accordion__content'>
        <AccordionTitle title={props.title}/>
        {props.collapsed && <AccordionBody />}
    </div>
}


const AccordionBody = (props:any) => {
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