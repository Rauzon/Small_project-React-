import React, {useState} from "react";

type ratingPropsType = {

}
type ratingValueType = 0 | 1 | 2 | 3 | 4 | 5;
type starPropsType = {
    changeValue: (index:ratingValueType) => void
    selected: boolean
    i: ratingValueType
}

export const Rating:React.FC<ratingPropsType> = (props) => {

    const [value, setValue] = useState<ratingValueType>(0);

    const changeValue = (index:ratingValueType) => {
        setValue(index)
    }

    return (
        <div className='rating__content'>
            <Star selected={value > 0} i={1} changeValue={changeValue}/>
            <Star selected={value > 1} i={2} changeValue={changeValue}/>
            <Star selected={value > 2} i={3} changeValue={changeValue}/>
            <Star selected={value > 3} i={4} changeValue={changeValue}/>
            <Star selected={value > 4} i={5} changeValue={changeValue}/>
        </div>
    )
}

export const Star:React.FC<starPropsType> = (props) => {
    return <div className={'rating__content_star'} onClick={() => props.changeValue(props.i)}>
        {(props.selected) ? <b><span>star</span></b> : <span>star</span>}
    </div>
}