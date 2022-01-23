import React, { Component } from 'react';

class Api extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: [],
            isLoaded: false,
        }
    }

    componentDidMount(){

        fetch('https://servicodados.ibge.gov.br/api/v1/paises/')
            .then(res => res.json())
            .then(json =>{
                this.setState({
                    isLoaded: true,
                    items: json,

                })
            });
    }

    render(){

        var {isLoaded, items } = this.state;

        if(!isLoaded){
            return <div>Loading...</div>;
        } else{
            return (
                <div className='Api'>
                </div>
            );    
        }

        
    }
}

export default Api;