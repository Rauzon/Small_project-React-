import React, {useState} from "react";

type accordionPropsType = {
    title: string
}

type accordionTitlePropsType = {
    title: string
    toggleCollapsed: () => void

}

export const Accordion: React.FC<accordionPropsType> = (props) => {

    const [collapsed, setCollapsed] = useState<boolean>(false)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return <div className='accordion__content'>
        <AccordionTitle title={props.title} toggleCollapsed={toggleCollapsed}/>
        {!collapsed && <AccordionBody/>}
    </div>
}


const AccordionBody = (props: any) => {
    return <>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>
}

const
    AccordionTitle: React.FC<accordionTitlePropsType> = (props) => {
        return <div className='accordion__content_title'>
            <h3 onClick={props.toggleCollapsed}>{props.title}</h3>

        </div>
    }