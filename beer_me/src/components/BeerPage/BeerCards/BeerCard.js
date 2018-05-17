import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeer } from '../../../redux/actions/fetchBeer';
// import './BeerCard.css';
import { Container, Card, Button, Image, Icon, Grid } from 'semantic-ui-react';

const BeerCard = props => {
  let { id, beer_name, style, abv, ibu } = props.beer;
  console.log('props', props);

  const handleClick = e => {
    e.preventDefault();
    console.log('history', props.history);
    props.fetchBeer(id, props.history);
    console.log('id.....', id);
  };

  return (
    <Card onClick={handleClick} className="beer-card">
      <Image src="http://microbrewr.com/wp-content/uploads/2014/11/21st-amendment-logo.jpg" />
      <Card.Content>
        <Card.Header>{beer_name}</Card.Header>
        <Card.Description>{style}</Card.Description>

        <Card.Meta />
      </Card.Content>
    </Card>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBeer }, dispatch);

export default connect(null, mapDispatchToProps)(BeerCard);
