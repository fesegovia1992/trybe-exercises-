import React from 'react';

class Form extends React.Component {
    constructor(){
        super();

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            nome: '',
            email: '',
            idade: 0,
            gostaMais: 'Academia',
            presenca: false,

        };
    }

    handleChange({ target }){
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        });
    }
    render() {
        return(
            <fieldset>
                <legend>Formulário de Test - React State</legend>
                <form>
                    <label>
                        Nome:
                        <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Email:
                        <input name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Idade:
                        <input name="idade" type="number" value={this.state.idade} onChange={this.handleChange}/>
                    </label>
                    Gosta mais:
                    <select name="gostaMais" value={this.state.gostaMais} onChange={this.handleChange}> 
                        O que você gosta mais:
                        <option value="Academia">Academia</option>
                        <option value="Jogos Online">Jogos Online</option>
                        <option value="Trybe">Trybe</option>
                        <option value="React">React</option>

                    </select>
                    Presença:
                    <input type="checkbox" name="presenca" value={this.state.presenca} onChange={this.handleChange} />
                </form>
            </fieldset>
        );
    }
}

export default Form;