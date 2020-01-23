import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardActions,Button, CardMenu, IconButton, CardText } from 'react-mdl';
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };

  }

  toggleCategotries() {
    if(this.state.activeTab == 0 ) {
      return (
        <div className="projects-grid">
          {/* project #1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{
              color: "afff", height: '176px', background:
                'url(https://www.kaitoy.xyz/images/react.png) center/ cover'
            }}>React Project #1</CardTitle>
            <CardText>
              shumashuma
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color: "afff" }}>
              <IconButton name="share"/>
            </CardMenu>
          </Card >

          {/* project #2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{
              color: "afff", height: '176px', background:
                'url(https://www.kaitoy.xyz/images/react.png) center/ cover'
            }}>React Project #2</CardTitle>
            <CardText>
              shumashuma
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color: "afff" }}>
              <IconButton name="share"/>
            </CardMenu>
          </Card >
        </div>

      )
    } else if (this.state.activeTab == 1) {
      return(
      <div><h1>This is Ruby on Rails</h1></div>
    )}
  }


  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Ruby on Rails</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid >
            <Cell col={12}>
              <div className="content">{this.toggleCategotries()}</div>
            </Cell>
          </Grid>

        </section>
      </div>
    )
  }
}

export default Project;