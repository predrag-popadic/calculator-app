import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render () {
        return (
            <div className={this.props.classes + ' button flex-center'}
                 onClick={this.props.handleClick}>
                {this.props.text}
            </div>


        )





    }

}