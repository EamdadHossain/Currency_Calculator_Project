const Button = (props) => {
    return (
      <button onClick={(e) => props.onClick()}>{props.label}</button>
    )
  };