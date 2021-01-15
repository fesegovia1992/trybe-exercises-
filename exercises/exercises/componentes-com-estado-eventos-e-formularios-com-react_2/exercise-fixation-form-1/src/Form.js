import React from 'react';

class Form extends React.Component {
    constructor() {
        super();

        this.handleChangeInputOne = this.handleChangeInputOne.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeGame = this.handleChangeGame.bind(this);

        this.state = {
            nome: '',
            idade: 0,
            game:'CS',
        };
    }

handleChangeInputOne(event) {
    this.setState({
        nome: event.target.value,
    });
};

handleChangeAge(event) {
    this.setState({
        idade: event.target.value,
    });
;}

handleChangeGame(event) {
    this.setState({
        game: event.target.value
    });
}


    render() {
        return (
            <form>
                <label>
                    Qual é seu jogo favorito?
                    <select value={this.state.game} onChange={this.handleChangeGame}>
                        <option selected value="CS">CS</option>
                        <option value="Apex">Apex</option>
                        <option value="PUBG">PUBG</option>
                        <option value="Fortnite">Fortnite</option>
                    </select>
                </label>
                <label>
                    Nome:
                    <input name="nome" type="text" value={this.state.nome} onChange={this.handleChangeInputOne} />
                </label>
                <label>
                    Idade:
                    <input idade="idade" type="number" value={this.state.idade} onChange={this.handleChangeAge} />
                </label>
            </form>
        );

    }
}

export default Form;