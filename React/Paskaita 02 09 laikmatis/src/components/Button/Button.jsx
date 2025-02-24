import "./Button.css"

function Button(props) {
  
    return (
        <div className="title-wrapper" >
    <h1>Title</h1>
    <h2>Some text in <br />two lines</h2>

     <div className="btn-wrapper">
        <button type="button" className="btn">{props.text}</button>
    </div>
    </div>
    )
}

export default Button