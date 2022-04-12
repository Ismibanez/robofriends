import React, { Component } from "react";
import CardList from "../Components/CardList";
import { robots } from "../robots";
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from "../Components/ErrorBounry";
import './Application.css';



class Application extends Component{

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        //destructutring code allows for cleaner code, removing multiple 'this.state' from the remaining render function//
        const { robots, searchfield } = this.state;


        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1 className='tc'>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default Application;

/* 
PROPS & STATE 

PROPS - never change, they're only inputs that we modify
simpkly things that come out of state

STATE - the description of your app
an object that describes your app
in this case robots and whatever is in searchbox
capable of change
parents feed state into child

STATE >> PROPS
PARENT >> CHILD

Constructor declares the state

SMART components have states

FETCH is native to window browsers and is a way to make
request to servers/apis

-- BEFORE LIFE CYCLES --
 constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
*/