import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://pbs.twimg.com/profile_images/1219538759663800320/TUOFWSdj_400x400.jpg"
              alt="avator"
              className="avator-img"
            />

            <div className="banner-text">
              <h1>Rails and React web Developer</h1>
              <hr />
              <p>HTML/CSS|Bootstrap|Ruby on Rails|React|AWS</p>
              <div className="social-links">
                {/* Twitter */}
                <a href="#" rel="noopener noreferrer" target="_blank" >
                  <i className="fab fa-twitter-square"  aria-hidden="true"/>
                </a>

                {/* github */}
                <a href="#" rel="noopener noreferrer" target="_blank" >
                  <i className="fab fa-github-square"  aria-hidden="true"/>
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;