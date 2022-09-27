const Select = (props) => {
    return (
      <div className="input-box">
        <label>{props.label}</label>
        <select onChange={(e) => props.handleChange(props.name, e.target.value)}>
          {props.currencies.map((currency, index) => 
            <option key={index} value={currency}>{currency}</option>
          )}
        </select>
      </div>
    )
  };
  