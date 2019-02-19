import React, { Component } from 'react';
import{Tabs, Tab, Card, CardText, CardTitle, Button, Grid,Cell, CardActions} from 'react-mdl';


class About extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    

    toggleCategories(){
        if(this.state.activeTab===0)
        {
            return(
            <div className="projects-grid">
            <Card shadow={10} className="projects-card">
                
                <CardTitle expand style={{color: '#fff'}}>
                <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0Gke6ESnj9dhmGNFjBNHgdaV%2FUntitled%3Fnode-id%3D9%253A145%26scaling%3Dscale-down" ></iframe>
                </CardTitle>

                <CardText>
                UI Design : Réalisation d'un MVP IOS sur Iphone d'une application de connéctée à un Vivarium
                </CardText>

                <CardActions border>
                
                    <Button colored>
                   <a target="_blank" href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0Gke6ESnj9dhmGNFjBNHgdaV%2FUntitled%3Fnode-id%3D9%253A145%26scaling%3Dscale-down"> Open in another windows</a>
                    </Button>   

                </CardActions>
            </Card>
            
           
            
            </div>
            
            );
        }
        else if(this.state.activeTab===1)
        {
            return(
                <div className="projects-grid">
                <Card shadow={10} className="projects-card">
                    
                    <CardTitle expand style={{color: '#fff'}}>
                    <iframe src="https://simon-lhuillier-cv.000webhostapp.com/index.html" ></iframe>
                    </CardTitle>
    
                    <CardText>
                    Three.js : Réalisation d'une animation d'une l'hélice créée à partir de Solidworks.
                    </CardText>
    
                    <CardActions border>
                    
                        <Button colored>
                       <a target="_blank" href="https://simon-lhuillier-cv.000webhostapp.com/index.html"> Open in another windows</a>
                        </Button>   
    
                    </CardActions>
                </Card>
                
               
                
                </div>
            );
        }
        else if(this.state.activeTab===2)
        {
            return(
                <div className="projects-grid">
                <Card shadow={10} className="projects-card">
                    
                    <CardTitle expand style={{color: '#fff'}}>
                    <img src="Comv2.png"  />
                    </CardTitle>
    
                    <CardText>
                    Photoshop : Réalisation d'une campagne publicitaire pour la vente d'articles de mon association No Larsen.
                    </CardText>
    
                    <CardActions border>
                    
                        <Button colored>
                        <a href="img/Comv2.png" target="_blank"> Open in another windows</a>
                        </Button>   
    
                    </CardActions>
                </Card>
                
               
                
                </div>
            );
        }
        else if(this.state.activeTab===3)
        {
            return(
                <div className="projects-grid">
                <Card shadow={10} className="projects-card">
                    
                    <CardTitle expand style={{color: '#fff'}}>
                    <img src="Comv2.png"  />
                    </CardTitle>
    
                    <CardText>
                    Photoshop : Réalisation d'une campagne publicitaire pour la vente d'articles de mon association No Larsen.
                    </CardText>
    
                    <CardActions border>
                    
                        <Button colored>
                        <a href="img/Comv2.png" target="_blank"> Open in another windows</a>
                        </Button>   
    
                    </CardActions>
                </Card>
                
               
                <Card shadow={10} className="projects-card">
                    
                    <CardTitle expand style={{color: '#fff'}}>
                    <img src="Comv2.png"  />
                    </CardTitle>
    
                    <CardText>
                    Photoshop : Réalisation d'une campagne publicitaire pour la vente d'articles de mon association No Larsen.
                    </CardText>
    
                    <CardActions border>
                    
                        <Button colored>
                        <a href="img/Comv2.png" target="_blank"> Open in another windows</a>
                        </Button>   
    
                    </CardActions>
                </Card>


                
                <Card shadow={10} className="projects-card">
                    
                    <CardTitle expand style={{color: '#fff'}}>
                    <img src="Comv2.png"  />
                    </CardTitle>
    
                    <CardText>
                    Photoshop : Réalisation d'une campagne publicitaire pour la vente d'articles de mon association No Larsen.
                    </CardText>
    
                    <CardActions border>
                    
                        <Button colored>
                        <a href="img/Comv2.png" target="_blank"> Open in another windows</a>
                        </Button>   
    
                    </CardActions>
                </Card>

                <Card shadow={10} className="projects-card">
                    
                    <CardTitle expand style={{color: '#fff'}}>
                    <img src="Comv2.png"  />
                    </CardTitle>
    
                    <CardText>
                    Photoshop : Réalisation d'une campagne publicitaire pour la vente d'articles de mon association No Larsen.
                    </CardText>
    
                    <CardActions border>
                    
                        <Button colored>
                        <a href="img/Comv2.png" target="_blank"> Open in another windows</a>
                        </Button>   
    
                    </CardActions>
                </Card>
                </div>
            );
        }

    }
    
    

    render() {
        return (
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>Skills</Tab>
                <Tab>Experiences</Tab>
                <Tab>Education</Tab>
                <Tab>Interests</Tab>
            </Tabs>
            <section className="projects-grid">
            <Grid>
                <Cell col={12}>
                    <div className="content">  {this.toggleCategories()}</div>  
                </Cell>
            </Grid>
              
            </section>
        </div>    
        );
    }
}

export default About;