import React from 'react';
import User from '../components/User';
import UserClass from '../components/UserClass';

class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // count: 0,
        };

        console.log("Constructor Parent");
    }

    componentDidMount() {
        console.log("ComponentDidMount Parent");
    }

    render() {
        console.log("Render Parent");
        return (
            <>
                <h1>About Us</h1>
                <p>This is our about page. We provide quality food at affordable prices.</p>
                
                <UserClass name="User 1" location={'Pune'}/>
                <UserClass name="User 2" location={'Pune'}/>
            </>
        )
    }
}

export default About;