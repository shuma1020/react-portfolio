import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardActions,Button, CardMenu, IconButton, CardText } from 'react-mdl';
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };

  }

  toggleCategories() {
    if(this.state.activeTab == 0 ) {
      return (
        <div className="projects-grid">
          {/* project #1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* project #2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

      )
    } else if (this.state.activeTab == 1) {
      return (
        <div className="projects-grid">
          {/* project #1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{
              color: "#000", height: '176px', background:
                'url(https://www.cotegg.com/blog/wp-content/uploads/2018/12/rails_logo.png) center/ cover'
            }}>Rails Project #1</CardTitle>
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
              color: "#000", height: '176px', background:
                'url(https://www.cotegg.com/blog/wp-content/uploads/2018/12/rails_logo.png) center/ cover'
            }}>Rails Project #2</CardTitle>
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

          {/* project #3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{
              color: "afff", height: '176px', background:
                'url(https://www.cotegg.com/blog/wp-content/uploads/2018/12/rails_logo.png) center/ cover'
            }}>Rails Project #3</CardTitle>
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


    )}
  }


  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Ruby on Rails</Tab>
        </Tabs>

          <Grid >
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Project;