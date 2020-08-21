import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Tahmid'
        }

        console.log('LifeCycleB constructor - ', Date.now())
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps - ', Date.now())
        return null
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount - ', Date.now())
    }
    
    render() {
        console.log('LifeCycleB render - ', Date.now());
        return <div>LifeCycleB</div>
    }
}

export default LifeCycleB
