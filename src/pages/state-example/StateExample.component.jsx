import * as React from 'react';
import '../../App.css'

export default function StateExample(){
    const [counter, setCounter] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => setCounter(counter => counter+1), 1000);
        return () => {
            clearInterval(interval);
        }
    }, [])
    console.log(counter);

    return(
        <div className="container">
            <h1 className="header center orange-text">
                {counter}
            </h1>
        </div>
    )
}