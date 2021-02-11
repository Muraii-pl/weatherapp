import React, { Component } from 'react'
import styled from 'styled-components'
import Form from '../Form/Form'
import Result from '../Result/Result'

export const WrapperCity = styled.div ` 
    width:480px;
    height:720px;
    border:2px black solid;
    display:flex;
    justify-content:center;
    padding:10px;
`




class City extends Component {
    state = {
        value:'',
        date:'',
        city:'',
        sunset:'',
        sunrise:'',
        temp:'',
        pressure:'',
        wind:'',
        err:'',
    }

    handleInputChange = e => {
        
        this.setState({value:e.target.value})
    }

    handleCitySubmit = e => {
        e.preventDefault()
        
        const APIKey = '81a98db20c18b7fae7c6bcb4f2b8021d'
        const APIEndpoint = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`

        fetch(APIEndpoint)
        .then(respone => {
            if(respone.ok){
                return respone
            }
            throw Error("Nie udało się")
        })
        .then(respone => respone.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

    }
    render() {
        return (
            <WrapperCity>
                    <Form value={this.state.value} change={this.handleInputChange} submit={this.handleCitySubmit}/>
                <Result></Result>
            </WrapperCity>
        )
    }
}


export default City