import React from 'react';

class UserClassTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        console.log(`${this.props.name} constructor`);
    }
    componentDidMount(){
        console.log(`${this.props.name} componentDidMount`);
    }
    
    render() {
        const { name, location} = this.props;
        console.log(`${name} render`);
        return (
            <>
                <div className='user-container'>
                    <button onClick={()=>{
                        this.setState(prevState => ({
                            count: prevState.count + 1
                        }));
                    }
                    }>
                        Count: {this.state.count}
                    </button>
                    <p>Welcome, {name}!</p>
                    <p>Your account details are as follows:</p>
                    <h4>Location: {location}</h4>
                    <h5>Contact: @akshayb19</h5>
                </div>
            </>
        );
    }
}

export default UserClassTest;