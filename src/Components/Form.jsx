import React from 'react'
import "../styles/form.css"

const Form = (props) => {
  return (
    <div className="container-fluid">
        <div>{props.error ? error():null}</div>
        <form onSubmit={props.getWeather}>
            <div className="row">
                <div className="col-md-3 offset-md-2">
                    <input type="text" className="form-control" name="City" autoComplete="off" placeholder="City" />
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control" name="Country" autoComplete="off" placeholder="Country" />
                </div>
                <div className="col-md-3 mt-md-0 text-md-left">
                    <button className="btn btn-warning">Get Weather</button>
                </div>
            </div>
        </form>
    </div>
  )
}

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City And Country
        </div>
    )
}

export default Form