import React from 'react'

const Form = props => {
    return (
        <form onSubmit={props.submit}>
          <input type="text" value={props.value} placeholder="Podaj nazwe Miasta!" onChange={props.change}></input>
          <button>Wyszukaj Miasta</button>

        </form>
    )
}

export default Form