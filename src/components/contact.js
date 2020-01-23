import React, { Component } from 'react';
import { Grid, Cell,List, ListItem, ListItemContent} from 'react-mdl';
class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Shuma Seki</h2>
            <img
              src="https://pbs.twimg.com/profile_images/1219538759663800320/TUOFWSdj_400x400.jpg"
              alt="avator"
              style={{height: "250px"}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>

                    080-5652-1020
                    </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    shumaseki40@gmail.com
                    </ListItemContent>
                </ListItem>
              </List>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;