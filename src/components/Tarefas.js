import React, { Component, Fragment } from "react";

export default class Tarefas extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            tarefa : "",
            tarefas : []
        };

        this.adicionaTarefa = this.adicionaTarefa.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <Fragment>
                <h1>{ this.props.titulo }</h1>
                <ul>
                    { this.state.tarefas.map(tarefa => <li key={ tarefa }>{ tarefa }</li>) }
                </ul>
                <input onChange={ this.handleChange } value={ this.state.tarefa }/>
                <button onClick={ this.adicionaTarefa }>Adicionar</button>
                
            </Fragment>
        );
    }

    adicionaTarefa() {
        const { tarefa, tarefas } = this.state;
        this.setState({ 
            tarefa : "",
            tarefas : [].concat(tarefas, tarefa )
        });
    }

    handleChange(event) {
        this.setState({ tarefa : event.target.value });
    }

}