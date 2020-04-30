import * as React from 'react';
import '../../components/SimpleText.component';
import '../../App.css';
import SimpleText from '../../components/SimpleText.component';

export default function PropsExample(){
    const [texto, setText] = React.useState('');

    const handleChange = event => {
        const {name, value} = event.target;
        setText(value);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <span>Digite seu nome</span>
                            <input 
                                value={texto}
                                type="text" 
                                name="texto"
                                class="autocomplete"
                                onChange = {handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <SimpleText text={texto}/>
        </div>
    )
}