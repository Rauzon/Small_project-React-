import React from "react";

export const Rating = (props:any) => {
    if(props.value == 1) {return (<div className='rating__content'>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>)}
    if(props.value == 2) {return (<div className='rating__content'>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>)}
    if(props.value == 3) {return (<div className='rating__content'>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>)}
    if(props.value == 4) {return (<div className='rating__content'>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
    </div>)}
    if(props.value == 5) {return (<div className='rating__content'>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
    </div>)}
    return (
        <div className='rating__content'>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

const Star = (props:any) => {
    return <>
        {(props.selected) ? <b><span>star</span></b> : <span>star</span>}
    </>
}