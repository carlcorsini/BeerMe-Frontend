import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

const FetchBreweryCard = props => {
  let {
    id,
    brewery_name,
    brewery_logo,
    address,
    city,
    state,
    zip,
    phone,
    url
  } = props.fetchBrewery;
  // console.log('props.fetchBrewery', props.fetchBrewery);
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle />
          <CardSubtitle />
        </CardBody>
        <img width="100%" src={brewery_logo} alt="Card image cap" />
        <CardBody>
          <CardText>{brewery_name}</CardText>
          <CardLink />
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  fetchBrewery: state.fetchBrewery
});

export default connect(mapStateToProps)(FetchBreweryCard);
