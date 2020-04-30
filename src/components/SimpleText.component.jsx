import * as React from 'react';
import '../App.css'

export default function SimpleText({text}){
    return(
        <h1 className="header center orange-text">
            {text.toUpperCase()}
        </h1>
    )
}
