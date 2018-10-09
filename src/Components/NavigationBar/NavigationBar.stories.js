import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { wInfo } from '../../../utils';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import {NAVBARDATA,NAVTYPES,PARTNER_NAVBARDATA,PARTNERNAVTYPES} from '../NavigationBar/Constants'
import NavigationBar from './index';
import SubNavBar from './SubNavBar';

const stories = storiesOf('Components/NavbarNew', module);

const storyWrapper = story => {
  return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)

stories.add('Basic', () => (
    <NavigationBar navbarData={NAVBARDATA} onNavItemClicked={()=>alert("Clicked")} selectedId={NAVTYPES.DIRECTORY} />
));

stories.add('SubNavBar', () => (
  <SubNavBar navbarData={PARTNER_NAVBARDATA} onNavItemClicked={()=>alert("Clicked")} selectedId={PARTNERNAVTYPES.ABOUT} title="donateDSNY Partners"/>
));