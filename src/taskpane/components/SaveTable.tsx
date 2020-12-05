import * as React from "react";
import { Checkbox, CompoundButton, DefaultButton, Dialog, DialogFooter, DialogType, PrimaryButton, TextField} from 'office-ui-fabric-react';
// import { useBoolean } from "@uifabric/react-hooks";

// const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
const dialogContentProps = {
  type: DialogType.largeHeader,
  title: 'Save Table Style',
};
export interface AppState {
  hideDialog: boolean;
}

export default class SaveTable extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      hideDialog: true,
    }
  }

  toggleHideDialog() {
    this.setState({hideDialog: !this.state.hideDialog})
  }
  render() {    
    return (
      <div>
        <CompoundButton primary secondaryText="Sub Text" onClick={this.toggleHideDialog} >
          Save Table Style
        </CompoundButton>

      <Dialog
        hidden={this.state.hideDialog}
        onDismiss={this.toggleHideDialog}
        dialogContentProps={dialogContentProps}
      >
        <TextField label="Table Style Name" placeholder="Table Name" />
        <Checkbox label="Set as default table style" />
        <Checkbox label="Replace default cell styles" />

        <DialogFooter>
          <PrimaryButton onClick={this.toggleHideDialog} text="Cancel" />
          <DefaultButton onClick={this.toggleHideDialog} text="Save" />
        </DialogFooter>
      </Dialog>
      </div>
    );
  }
}
