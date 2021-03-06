import React, { Component } from 'react'
import Cards from './Cards/Cards'
import HomeHeading from './HomeHeading'
import { Container, Grid } from 'semantic-ui-react'

class Main extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <HomeHeading />
        </Container>
        <Container>
          <Grid padded="vertically" divided="vertically">
            <Grid.Row columns={1}>
              <Grid.Column />
              <Grid.Row>
                <Cards history={this.props.history} />
              </Grid.Row>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Main
