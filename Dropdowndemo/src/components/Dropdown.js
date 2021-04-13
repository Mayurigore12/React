import {Component} from 'react'
import './Dropdown.css'
class Dropdown extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fruit: 'Mango',
      technologies:[{value:'1',name:'Java'},{value:'2',name:'Javascript'},{value:'3',name:'Asp.net',isdisabled:'true'},{value:'4',name:'React'},{value:'5',name:'Angular'}]
    };
  
      this.submitHandler = this.submitHandler.bind(this);
      this.changeHandler = this.changeHandler.bind(this);
      this.changeTechnology=this.changeTechnology.bind(this);
      this.submitTechnology=this.submitTechnology.bind(this);

    }
  
    changeHandler(event) {
      this.setState({fruit: event.target.value});
    }
  
    submitHandler(event) {

      alert('Your selected option is: ' + this.state.fruit);
      event.preventDefault();
    }

    changeTechnology(event){
      this.setState({value1: event.target.value});
    }

    submitTechnology(event) {

      alert('Your selected technology is: ' + this.state.value1);
      event.preventDefault();
    }

    render() {
      return (
        <div className='div1'>
          <label>
            Pick your favorite flavor:
            <select value={this.state.fruit} onChange={this.changeHandler} isOptionDisabled={(option)=>option.isdisabled}>
              <option value="Papaya">Papaya</option>
              <option value="Strawberry">Strawberry</option>
              <option value="Apple">Apple</option>
              <option value="Mango">Mango</option>
            </select>
          </label>
          <input type="submit" onClick={this.submitHandler} value="Submit" />
          <br/><br/>
          <div>
          <label>
            Choose Technology:
            <select onChange={this.changeTechnology} isOptionDisabled={(option)=>option.isdisabled}>
              {this.state.technologies.map(tech =>
              {return(<option key={tech.value} value={tech.name}>{tech.name}</option>)
              })}
            </select>
          </label>
          <input type="submit" onClick={this.submitTechnology} value="Submit" />
          </div>
        </div>
      );
    }
  }

  export default Dropdown