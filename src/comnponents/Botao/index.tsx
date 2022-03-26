import React from "react";

class Botao extends React.Component{
    render(){
        const color = 'red';
        return (
                <button style={{
                    backgroundColor:color
                }} >
                    Botão
                </button>
            )
    }
    
}

export default Botao;