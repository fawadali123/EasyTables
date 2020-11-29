import * as React from "react";
import Progress from "./Progress";
import * as excel from "./Excel.App";
import Welcome from "./Welcome";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Labels from "./Labels";
import Typography from "./Typography";
import Spacing from "./Spacing";
import Colors from "./Colors";
/* global Button, Header, HeroList, HeroListItem, Office */

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


  click = async () => {
    switch (Office.context.host) {
      case Office.HostType.Excel: {
        const excelApp = new excel.default(this.props, this.context);
        return excelApp.click();
      }
    }
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
