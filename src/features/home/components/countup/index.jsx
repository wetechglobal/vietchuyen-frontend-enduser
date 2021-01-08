import React, { Component } from "react";
import { gsap } from 'gsap';
import { Waypoint } from 'react-waypoint';

class CountUp extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.point = this.props.point;
    }

    tl = gsap.timeline({ paused: true });

    animateCounter = () => {
        this.tl.to(this, 1, {
            _count: this.point,
            onUpdate: () => this.setState({ count: ~~this._count })
        });
        this.tl.play();
    };

    animateUpdateCounter = () => {
        this.setState({ count: 0 })
        this.tl.restart();
    };

    render() {
        return (
            <div className="num"><Waypoint
                onEnter={this.animateCounter.bind()}
                onPositionChange={this.animateUpdateCounter.bind()}
            />{this.state.count}<sup>+</sup></div>
        );
    }
}

export default CountUp;