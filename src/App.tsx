import React from 'react';
import { Stack, Panel } from '@fluentui/react';


export class App extends React.Component<{}, {isOpen1: boolean; isOpen2: boolean}> {
  constructor(a: {}) {
    super(a);

    this.state = {
      isOpen1: true,
      isOpen2: true,
    }
  }

   render() {
    const { isOpen1, isOpen2 } = this.state;
    return <Stack>
      <Panel isOpen={isOpen1} onDismiss={() => this.setState({isOpen1: false})} >
        <span>Panel 1</span>
        <Panel isOpen={isOpen2} onDismiss={() => this.setState({isOpen2: false})}>
          <span>This is panel 2 opened on top of panel 1. Click on this panel and then press Escape.</span>
        </Panel>
      </Panel>
    </Stack>
   }
}