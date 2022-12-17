import { Box } from '@mui/system';
import React, { Component } from 'react';
import AnnotationsPageTitle from '../../components/pageTitle/AnnotationsPageTitle';
import { configs } from '../../configs';
import './Annotations.css';

export default class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iFrameKey: 0,
    };

    this.handleIFrameReload = this.handleIFrameReload.bind(this);
  }

  componentDidMount() {
    this.props.setActiveLink("", "annotations");
  }

  handleIFrameReload() {
    this.setState({ iFrameKey: this.state.iFrameKey + 1 });
  }

  render() {
    return (
      <div
        className="app-main">
        <AnnotationsPageTitle
          showAppNotification={this.props.showAppNotification}
          hideAppNotification={this.props.hideAppNotification}
          reloadIFrame={this.handleIFrameReload}
          scrollToTop={this.props.scrollToTop} />
        <Box className="row align-items-md-stretch mt-3">
          <Box className="shadow-sm container-bg app-annotation-page m-0 p-0 overflow-hidden">
            <iframe
              key={this.state.iFrameKey}
              title='Annotations'
              frameBorder="0"
              style={{ overflow: "hidden", width: "100%", minHeight: "100%" }}
              src={configs.annotationsUIEndpoint} />
          </Box>
        </Box>
      </div>
    );
  }
}
