
import * as React from "react";
import { Stack, IStackTokens, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { Text, Checkbox, Button, TextField, DefaultPalette} from 'office-ui-fabric-react';
import Header from "./Header";
import NavStepBar from './NavStepBar';


export interface AppProps {
  onClick: any;
}

// Styles definition
const verticalGapStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};
const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.neutralLight,
    padding: 10,
    justifyContent: "flex-end",
  }
}

export default class StepOne extends React.Component<AppProps> {
  render() {
    return (
      <div className="ms-welcome">
        <section style={{marginTop: 60}}>
          <Header />
          <NavStepBar 
            onClick={() => this.props.onClick('welcome')} 
            title="Step 1 of 3"
            background={DefaultPalette.neutralLight} />

          <Stack tokens={verticalGapStackTokens}>

            <img style={{margin: 50}} width="200" height="auto" src="assets/image.png"  />
            <Text variant={'xLarge'}>Select your data</Text>
            <TextField label="Pick a range, table, or pivot table to enhance." />
            <Checkbox label="My Table has Headers"  defaultChecked />
            <Stack.Item align="baseline">

              <Button>
                  Auto Select
              </Button>
            </Stack.Item>
          </Stack>
          <Stack verticalAlign="end" grow={1} horizontalAlign="end" styles={stackStyles}>

          <Stack.Item grow={1} align="end">
              <Button className="ms-bgColor-themePrimary ms-fontColor-white"
                  onClick={() => this.props.onClick('steptwo')}>
                  Next
              </Button>
          </Stack.Item>
          </Stack>
        </section>
      </div>
    );
  }
}
