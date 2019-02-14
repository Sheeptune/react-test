import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

function Worker (props) {
    return(

     <section class="container">


            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-2 col-xs-12">
                            <img class="" src="https://via.placeholder.com/50" alt="Picture" />
                        </div>
                        <div class="col-md-9 col-xs-12 worker-info">
                            <p class="worker-name">{props.name}</p>
                            <p class="worker-role">{props.role}</p>
                        </div>
                        <div class="col-md-1 col-xs-12">
                            <input type="checkbox"/>
                        </div>
                    </div>
                </div>
            </div>


    </section>
    )
}

class Company extends React.Component{
    render(){
        return(
            <div>
                <Worker name="Nicolas Detrez" role="Content creator"/>
                <Worker name="Alexis Camus" role="Customer Success"/>
                <Worker name="Vincent Cotro" role="Fondateur et développeur"/>
                <Worker name="Thomas Grivet" role="Développeur React"/>
                <Worker name="Damien Cavailles" role="Fondateur"/>
                <Worker name="Clément Devos" role="Développeur"/>
            </div>
        );
    }
}

ReactDOM.render(
    <Company/>,
    document.getElementById('root')
);

