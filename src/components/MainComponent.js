import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponents";
import { Switch, Route, Redirect } from "react-router-dom";
import { CAMPSITES } from "../shared/campsites";
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      comments: COMMENTS,
      partners: PARTNERS,
      promotions: PROMOTIONS
      // selectedCampsite: null, - removed when made home page instead of Directory of campsites
    };
  }

  // Removed when made Home page instead of starting at Directory
  // onCampsiteSelect(campsiteId) {
  //   this.setState({ selectedCampsite: campsiteId });

  //{selectedCampsite: campsite changed to : campsiteId to reflect change in name when onClick moved from Directory}
  render() {
    const HomePage = () => {
      return <Home 
        campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
        promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
        partner={this.state.partners.filter(partner => partner.featured)[0]}
      />;
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/directory"
            render={() => <Directory campsites={this.state.campsites} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        {/* Removed below when creating Home page
          onClick={(campsiteId) => this.onCampsiteSelect(campsiteId)} */}

        {/* <CampsiteInfo
          campsite={
            this.state.campsites.filter(
              (campsite) => campsite.id === this.state.selectedCampsite
            )[0]
          } 
        /> */}
        <Footer />
        {/* Updated to above lines when onClick moved from Directory.js */}
        {/* <Directory campsites={this.state.campsites} /> */}
        {/* <CampsiteInfo campsite={this.state.selectedCampsite} /> */}
      </div>
    );
  }
}

export default Main;
