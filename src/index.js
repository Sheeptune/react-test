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

class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workers: [
                { name: "Nicolas Detrez", role :"Content creator" },
                { name :"Alexis Camus", role : "Customer Success" },
                { name :"Vincent Cotro", role : "Fondateur et développeur" },
                { name :"Thomas Grivet", role : "Développeur React" },
                { name :"Damien Cavailles", role : "Fondateur" },
                { name :"Clément Devos", role : "Développeur" },
            ],
        };
    }

    render() {
        const workers = this.state.workers;
        return (<div>
            <Worker name={workers[0].name} role={workers[0].role} />
            <Worker name={workers[1].name}  role={workers[1].role}/>
            <Worker name={workers[2].name} role={workers[2].role}/>
            <Worker name={workers[3].name} role={workers[3].role} />
            <Worker name={workers[4].name}  role={workers[4].role}/>
            <Worker name={workers[5].name} role={workers[5].role}/>
        </div>);
    }
}

ReactDOM.render(
    <Company/>,
    document.getElementById('root')
);

