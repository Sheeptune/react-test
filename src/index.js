import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Company extends React.Component{
    render(){
        return(
            <ul>
                <li>Nicolas Detrez</li>
                <li>Alexis Camus</li>
                <li>Vincent Cotro</li>
                <li>Thomas Grivet</li>
                <li>Damien Cavailles</li>
                <li>Clément Devos</li>
            </ul>
        );
    }
}

ReactDOM.render(
    <Company/>,
    document.getElementById('root')
);

