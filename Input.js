const Input = (props) => {
    return (
      <div className="input-box">
        <label>{props.label}</label>
        <input
          type="number"
          onChange={(e) => props.handleChange(props.name, e.target.value)}
        />
      </div>
    )
  }; 
  