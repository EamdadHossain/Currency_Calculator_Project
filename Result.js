const Result = (props) => {
    return (
      <div className="result">{props.result.toFixed(2)} {props.currency}</div>
    )
  };
  