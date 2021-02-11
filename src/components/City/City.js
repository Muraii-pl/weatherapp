import React, { Component } from 'react'
import styled from 'styled-components'
import Form from '../Form/Form'
import Result from '../Result/Result'

export const WrapperCity = styled.div ` 
    width:480px;
    height:720px;
    border:2px black solid;
    display:flex;
    justify-content:start;
    padding:10px;
    flex-flow:wrap column;
    align-items:center;
`



const APIKey = '81a98db20c18b7fae7c6bcb4f2b8021d'

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
        err:false,
    }

    handleInputChange = e => {
        
        this.setState({value:e.target.value})
    }

    handleCitySubmit = e => {
        e.preventDefault()
        
        
        const APIEndpoint = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`

        fetch(APIEndpoint)
        .then(respone => {
            if(respone.ok){
                return respone
            }
            throw Error("Nie udało się")
        })
        .then(respone => respone.json())
        .then(data =>{
            const time = new Date().toLocaleDateString()

            this.setState({
                err:false,
                date:time,
                city:this.state.value,
                sunset:data.sys.sunset,
                sunrise:data.sys.sunrise,
                temp:data.main.temp,
                pressure:data.main.pressure,
                wind:data.wind.speed,
            })
        })
        .catch(err => {
            console.log(err)
            this.setState({
                err:true,
                city:this.state.value
            })
        })

    }
    render() {
        return (
            <WrapperCity>
                <Form value={this.state.value} change={this.handleInputChange} submit={this.handleCitySubmit}/>
                <Result weather={this.state}></Result>
            </WrapperCity>
        )
    }
}


export default City