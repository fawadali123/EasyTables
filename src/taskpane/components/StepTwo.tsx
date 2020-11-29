import * as React from "react";
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import Header from "./Header";
import { Text, Separator, DefaultPalette} from 'office-ui-fabric-react';
import NavStepBar from './NavStepBar';


export interface AppProps {
  onClick: any;
}

// Styles definition
const verticalGapStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};

export default class StepTwo extends React.Component<AppProps> {
  render() {
    return (
      
      <section style={{marginTop: 60}}>
        <Header />
        <NavStepBar onClick={() => this.props.onClick('stepone')} title="Step 2 of 3"
            background={DefaultPalette.neutralLight}  />

        <Stack tokens={verticalGapStackTokens}>

          <img style={{margin: 50}} width="200" height="auto" src="assets/image.png"  />
          <Text variant={'xLarge'}>Pick a Style</Text>
          <Text variant={'large'}>Pick a style to instantly format your data.</Text>
          <Separator></Separator>
          <img onClick={() => this.props.onClick('stepthree')} style={{margin: 30}} width="270" height="auto" src="assets/tableoption1.png"  />
          <img onClick={() => this.props.onClick('stepthree')} style={{margin: 30}} width="270" height="auto" src="assets/tableoption2.png"  />

        </Stack>
      </section>
    );
  }
}
