import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation,Header, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="My Portfolio" scroll>
            <Navigation>
            <Link to="/">Resume</Link>
                <Link to="/about">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link> 
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/">Resume</Link>
                <Link to="/about">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link> 
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
