import * as React from "react";
import Welcome from "./Welcome";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Labels from "./Labels";
import Typography from "./Typography";
import Spacing from "./Spacing";
import Colors from "./Colors";
import Progress from "./Progress";

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export interface AppState {
  page: string;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      page: 'welcome',
    };
  }

  handleClick(pageName) {
    this.setState({page: pageName});
  }

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress title={title} logo="assets/logo-filled.png" message="Please sideload your addin to see app body." />
      );
    }
    switch(this.state.page) {
      case 'stepone':
        return <StepOne onClick={pageName => this.handleClick(pageName)} />;
      case 'steptwo':
        return <StepTwo onClick={pageName => this.handleClick(pageName)} />;
      case 'stepthree':
        return <StepThree onClick={pageName => this.handleClick(pageName)} />;
      case 'labels':
        return <Labels onClick={pageName => this.handleClick(pageName)} />;
      case 'typography':
        return <Typography onClick={pageName => this.handleClick(pageName)} />;
      case 'colors':
        return <Colors onClick={pageName => this.handleClick(pageName)} />;
      case 'spacing':
        return <Spacing onClick={pageName => this.handleClick(pageName)} />;
      default:
        return <Welcome onClick={pageName => this.handleClick(pageName)} />;
    }
  }
}
