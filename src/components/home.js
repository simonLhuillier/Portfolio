import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Home extends Component {
    render() {
        return (
            <div style={{width: '100%', margin:'auto'}}> 
                <Grid className="home-grid">
                <Cell col={12}>
                    <img src="https://www.usukraine.org/wp-content/plugins/our-team-enhanced/assets/images/default-avatar.png" alt="ID" className="ID-img" />
                    <div className="banner-text">
                    <h1>Developper Full Satck</h1>
                    <hr/>
                    <div className="logo">
                    <a href="http://google.com" target="_blank"><i class="fa fa-css3-alt" aria-hidden="true"></i></a>
                    </div>
                    </div>
                </Cell>
                </Grid>
            </div>
        );
    }
}

export default Home;