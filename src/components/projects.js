import React, { Component } from 'react';
import{Tabs, Tab} from 'react-mdl';

class Projects extends Component {
    
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    
    
    
    render() {
        return (
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>Solidworks</Tab>
                <Tab>Three.js</Tab>
                <Tab>Photoshop</Tab>
            </Tabs>
            <section className="projects-grid">
                <div className="content">Content for the tab: {this.state.activeTab}</div>
            </section>
        </div>    
        );
    }
}

export default Projects;