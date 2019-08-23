import React, { Component } from 'react';

import socket from '../socket'


class ItemList extends Component {

    state = {
        listMassge: []
    }

    componentDidMount = () => {
        socket.on('chat', function (obj) {
            console.log(obj);

            this.listMassge.push(obj.data)
        });
    }

    onClickButton = () => {
        socket.post('/chat/addconv/', {
            user: "User 1",
            message: "test message"
        });
    }

    render() {
        return (
            <div>
                test help
                <button onClick={this.onClickButton}>Button</button>
            </div>
        )

    }
}

export default ItemList;