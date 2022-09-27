class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currencies: [],
        amount: 0,
        currFrom: '',
        currTo: '',
        result: 0,
        error:false,
      }
    }
  
    componentDidMount() {
      const url = `https://api.exchangeratesapi.io/latest`; 
      fetch(url)
        .then(res => res.json())
        .then(res => this.setState({
          currencies: Object.keys(res.rates),
          currFrom: Object.keys(res.rates)[0],
          currTo: Object.keys(res.rates)[0],
        }))
    }
  
    handleOnChange = (name, value) => {
      this.setState({ [name]: value });
    }
    
    convertCurrency = () => {
      const { currTo, currFrom, amount } = this.state;
      
      if (currTo === '' || currFrom === '' || amount === 0) {
      this.setState({error: true})
      } else {
        this.setState({error: false})
      fetch(`https://api.exchangeratesapi.io/latest?symbols=${currTo}&base=${currFrom}`)
          .then(res => res.json())
          .then(res => this.setState({ 
            result: Number(res.rates[currTo]) * amount 
          }))
    }}
  
    render() {
      return(
        <div className="app">
          <div className="calculator">
            <h3>Currency Exchange Calculator</h3>
            <div class="inputs">
              <Input 
                label="Amount" 
                name="amount"
                handleChange={this.handleOnChange}
              />
              <Select 
                label="From"
                currencies={this.state.currencies}
                name="currFrom"
                handleChange={this.handleOnChange}
              />
              <Select 
                label="To"
                currencies={this.state.currencies}
                name="currTo"
                handleChange={this.handleOnChange}
              />
              <Button label="Calculate" onClick={this.convertCurrency} />
            </div>
            {this.state.error && (
            <p className="error-message">Please, Fill in every field.</p>
            )}
            {this.state.result > 0 && (
              <Result currency={this.state.currTo} result={this.state.result} />
            )}
            
          </div>
        </div>
      )
    }
  }