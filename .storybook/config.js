import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
import { configureViewport } from '@storybook/addon-viewport';
import { withKnobs, select } from '@storybook/addon-knobs/react';

import './index.css';


addDecorator(withKnobs);
setAddon(infoAddon);

setOptions({
  addonPanelInRight: true,
  name: 'DSNY DONATE Storybook',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  sortStoriesByKind: true
});

setDefaults({
  inline: true,
  header: false,
  source: true,
  styles: stylesheet => {
      stylesheet.infoBody = {
          infoBody: {
              padding: '10px'
          }
      };
      return stylesheet;
  },
  maxPropsIntoLine: 1
  // propTablesExclude: [ReadmeContainer, DefaultPreview]
});


// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);