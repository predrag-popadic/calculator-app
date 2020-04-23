import React from 'react';

export default class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render () {
        return (
            <div className='display'>{this.props.equation}
            </div>


        )

    }

}