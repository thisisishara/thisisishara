import React, { Component } from 'react';
import OffCanvasInstructions from '../../components/offcanvas/OffCanvasInstructions';
import DimePageTitle from '../../components/pageTitle/DimePageTitle';
import DimePageTabsExplanations from '../../components/pageTabs/DimePageTabsExplanations';
import axios from 'axios';
import { Box } from '@mui/material';
import { configs } from '../../configs';
import DimePageBanner from '../../components/pageBanner/DimePageBanner';
 
export default class Dime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: undefined,
    };
    console.log(this.props.appConfigs);
    this.fetchStats = this.fetchStats.bind(this);
  }
 
  componentDidMount() {
    this.props.setActiveLink("", "dime");
    this.fetchStats();
  }
 
  fetchStats(event, models_path) {
    let payload = {
      models_path: models_path || this.props.appConfigs.dime_base_configs.models_path,
      origin: "dashboard",
    }
   
    axios.post(`${configs.statsEndpoint}`, payload)
      .then(function (response) {
        console.log(response);
        if (response.data.status !== undefined) {
          if (response.data.status === "success") {
            this.setState({
              stats: {
                models: response.data.models,
                explanations: response.data.explanations,
                models_list: response.data.models_list,
                explanations_list: response.data.explanations_list,
              }
            });
 
          } else {
            throw new Error("Unexpected error");
          }
 
        } else {
          throw new Error("Unexpected response");
        }
 
      }.bind(this))
      .catch(function (error) {
        console.log(error);
        this.setState({
          stats: undefined
        });
      }.bind(this));
  }
 
  render() {
    return (
      <div
        className="app-main">
        <OffCanvasInstructions />
        <Box className="main-section m-0 p-0" id="main-section-dashboard">
          <DimePageTitle
            showAppNotification={this.props.showAppNotification} />
          <DimePageBanner
            stats={this.state.stats}
            fetchStats={this.fetchStats} />
          <DimePageTabsExplanations
            appConfigs={this.props.appConfigs}
            showAppNotification={this.props.showAppNotification}
            hideAppNotification={this.props.hideAppNotification}
            scrollToTop={this.props.scrollToTop}
            fetchStats={this.fetchStats}
            fetchConfigs={this.props.fetchConfigs} />
        </Box>
      </div>
    );
  }
}

