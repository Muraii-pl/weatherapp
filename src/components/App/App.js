import React, { Component } from 'react'
import Result from '../Result/Result'
import Form from '../Form/Form'
import City from '../City/City'
import styled from 'styled-components'

const MainWrapper = styled.div `
  height:100vh;
  padding:30px;
  display:flex;
  justify-content:space-around;
  align-items:center;

`


export default class App extends Component {
  render() {
    return (
      <MainWrapper>
        <City/>
      </MainWrapper>
    )
  }
}
