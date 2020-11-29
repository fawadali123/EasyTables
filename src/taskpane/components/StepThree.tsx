import * as React from "react";
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { Text, ActionButton, CompoundButton, Separator, DefaultPalette} from 'office-ui-fabric-react';
import Header from "./Header";
import NavStepBar from './NavStepBar';

export interface AppProps {
  onClick: any;
}

const verticalGapStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};

export default class StepThree extends React.Component<AppProps> {
  render() {
    return (
      <section style={{marginTop: 60}}>
        <Header />
        <NavStepBar onClick={() => this.props.onClick('steptwo')} title="Step 3 of 3"
            background={DefaultPalette.neutralLight}  />
        <Stack tokens={verticalGapStackTokens}>

          <Text variant={'xLarge'}>All Done!</Text>
          <Text variant={'medium'}>Your data looks great! Save this style to resue or fine tune specifics of your data below.</Text>
          <CompoundButton primary secondaryText="Sub Text">
            Save Table Style
          </CompoundButton>
          <Separator></Separator>
          <Stack tokens={verticalGapStackTokens}>
            <ActionButton iconProps={{iconName: 'Label'}} allowDisabledFocus
              onClick={() => this.props.onClick('labels')}
            >
              Labels
              <i className={`ms-Icon ms-Icon--ChevronRight ms-lgPush8`}></i>
            </ActionButton>
            <ActionButton iconProps={{iconName: 'Font'}} allowDisabledFocus
              onClick={() => this.props.onClick('typography')}
            >
              Typography
              <i className={`ms-Icon ms-Icon--ChevronRight ms-smPull8`}></i>
            </ActionButton>
            <ActionButton iconProps={{iconName: 'ColorSolid'}} allowDisabledFocus
              onClick={() => this.props.onClick('colors')}
            >
              Colors
              <i className={`ms-Icon ms-Icon--ChevronRight ms-smPull8`}></i>
            </ActionButton>
            <ActionButton iconProps={{iconName: 'LineSpacing'}} allowDisabledFocus
              onClick={() => this.props.onClick('spacing')}
            >
              Spacing
              <i className={`ms-Icon ms-Icon--ChevronRight ms-smPull8`}></i>
            </ActionButton>
          </Stack>
        </Stack>
      </section>
    );
  }
}
