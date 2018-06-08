import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider } from 'semantic-ui-react';
import TopSection from './TopSection/TopSection';
import UserBeerCards from './UserBeerCards/UserBeerCards';
import ProfileModal from './ProfileModal';

class ProfilePage extends Component {
  render() {
    console.log(this.props);
    return this.props.user.favorite_beers === undefined ? (
      <div />
    ) : (
      <Container textAlign="left">
        <TopSection user={this.props.user} />
        <div style={{ margingRight: '10em' }}>
          <ProfileModal />
        </div>
        <Divider />
        <UserBeerCards
          history={this.props.history}
          userBeers={this.props.user.favorite_beers}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => ({
  // console.log(state.auth.userBeers, 'profile state');
  // userBeers: state.auth.user,
  user: state.auth.user
});

export default connect(mapStateToProps, null)(ProfilePage);
