import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Worker (props) {
    return(
        <li>{props.value}</li>
    )
}

class Company extends React.Component{
    render(){
        return(
            <ul>
                <Worker value="Nicolas Detrez"/>
                <Worker value="Alexis Camus"/>
                <Worker value="Vincent Cotro"/>
                <Worker value="Thomas Grivet"/>
                <Worker value="Damien Cavailles"/>
                <Worker value="Clément Devos"/>
            </ul>
        );
    }
}

ReactDOM.render(
    <Company/>,
    document.getElementById('root')
);

