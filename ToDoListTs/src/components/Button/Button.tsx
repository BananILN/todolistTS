import React from "react";

type TButton = {
    buttonText:string;
    onClick: (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button(props: TButton){

    const {buttonText, onClick} = props;

    return (
        <button onClick={onClick}>{buttonText}</button>
    )
}