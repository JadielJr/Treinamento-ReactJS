import * as React from 'react';
import './homepage.styles.css';
import '../../App.css';
import {Link} from 'react-router-dom';

export default function Homepage(){
    return(
        <div className="container">
            <h1 className="header center orange-text">
                Homepage
            </h1>
            <ul className="center">
                <li>
                    <Link to = "/stateexample">
                        Para o exemplo usando states
                    </Link>
                </li>
                <li>
                    <Link to = "/propsexample">
                        Para o exemplo usando props
                    </Link>
                </li>
                <li>
                    <Link to ="/todolist">
                        To do list
                    </Link>
                </li>
            </ul>
        </div>
    )
}


