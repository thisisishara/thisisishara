import React, { Component } from 'react';
import OffCanvasInstructions from '../../components/offcanvas/OffCanvasInstructions';
import DashboardPageTitle from '../../components/pageTitle/DashboardPageTitle';
import DashboardPageBanner from '../../components/pageBanner/DashboardPageBanner';
import axios from 'axios';
import { Box } from '@mui/material';
import { configs } from '../../configs';
import KolloqeChatWidget from '../../components/webchat/KolloqeChatWidget';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: undefined,
    };

    this.fetchStats = this.fetchStats.bind(this);
  }

  componentDidMount() {
    this.props.setActiveLink("", "dashboard");
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
          <DashboardPageTitle
            showAppNotification={this.props.showAppNotification} />
          <DashboardPageBanner
            stats={this.state.stats}
            fetchStats={this.fetchStats} />
          {/* <DashboardPageTabsExplanations
            appConfigs={this.props.appConfigs}
            showAppNotification={this.props.showAppNotification}
            hideAppNotification={this.props.hideAppNotification}
            scrollToTop={this.props.scrollToTop}
            fetchStats={this.fetchStats}
            fetchConfigs={this.props.fetchConfigs} /> */}
        </Box>
        <KolloqeChatWidget
          position={"right"}
          title={this.props.webchatConfigs?.title || "Kolloqe ⚡"}
          subtitle={this.props.webchatConfigs?.subtitle || "Welcome to Kolloqe"}
          defaultLang={"en"}
          avatar={true}
          avatarType={"text"}
          avatarLink={""}
          socketURL={this.props.webchatConfigs?.urlEndpoint || "http://localhost:5005/"}
          initPayload={this.props.webchatConfigs?.initPayload || "/greet"}
          reconnectTimeout={6000}
          widgetOptions={true}
          fullscreenButton={false}
          langSwitch={true}
          moreOptions={true}
          widgetOptionsPosition={"bottom"}
          hideWhenNotConnected={true}
          displayUnreadCount={true}
          showMessageDate={true}
          persistSession={true}
          triggerIntents={true}
          enableURLs={true}
          disablePreviousQuickReplies={true}
          indicatorDelay={0}
          indicatorType={"bouncing"}
          enableShortcuts={true}
          shortcutKey={81} />
      </div>
    );
  }
}