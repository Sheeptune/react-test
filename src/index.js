import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Workers from './w3d-people.json';


function SearchBar(props) {
    return (
        <section class="container-fluid">
            <div class="search-zone container">
                <input class="col-12" type="text" placeholder="search 🔍" />
            </div>
        </section>
    );
}

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
                            <p class="worker-role">{props.job}</p>
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
            workers: Workers
        };
    }

    render() {
        const workers = this.state.workers;
        return (

            <div>
            <SearchBar />
                {
                    workers.map(function(worker,index) {
                        return <Worker surname={worker.surname} name={worker.name} job={worker.job} key={index} />
                    })
                }
            </div>);
    }
}

ReactDOM.render(
    <Company/>,
    document.getElementById('root')
);

