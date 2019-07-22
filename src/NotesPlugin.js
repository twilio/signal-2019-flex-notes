import { FlexPlugin, loadCSS } from 'flex-plugin';
import React from 'react';
import Notes from './components/Notes';

const PLUGIN_NAME = 'NotesPlugin';

export default class NotesPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    loadCSS('https://rose-gaur-9610.twil.io/assets/styles.css');

    flex.AgentDesktopView.Panel2.Content.replace(
      <Notes key="notes" />,
    );
  }
}
