import React, {Component} from 'react';
import logo from './logo.svg'

class WorkingState extends Component {
    state = {
        working: this.props.working
    };

    handleClick =()=> {
        this.setState({working: !this.state.working})
    }

    render() {
        const workOrBreak = this.state.working ? 'work' : 'break';

    return (
        <div className= "workOrBreak"> 
            <button 
            onClick={this.handleClick}
            className={workOrBreak} >
                {workOrBreak.toUpperCase()}
            </button>
            <img src ={logo} alt = "logo" className={workOrBreak} />
        </div>
    )

    }

}

export default WorkingState;