import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do</h1>
                <h2>Things To Do: {this.props.tasksNumber}</h2>
            </div>
        );
    }
}

export default Title;






