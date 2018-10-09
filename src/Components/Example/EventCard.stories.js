import * as React from 'react';
import { storiesOf } from '@storybook/react';
import  Cards  from './index';
import { wInfo } from '../../../utils';
import { withKnobs, text, boolean, number, files, date } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import readme from './README.md';
import * as moment from 'moment';
import * as image from '../../Assets/card_image.png'

const stories = storiesOf('Event Cards', module);

const storyWrapper = story => {
  return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(readme))

stories.add('Simple Card', () => { 

  const defaultDate = new Date('Jan 21 2017 GMT+0');
  const subTitle = date('SubTitle', defaultDate);
  return (
  <div style={{"cursor": "pointer"}} >
  <Cards title= {text('Card Title', 'Second Chance Toys collected and distributed over 6,000 toys in NYC during the holidays!')}
   type='simple'
   imageUrl = {image}
   onClick = {()=>{alert('Card Clicked')}}
   subTitle = {moment(subTitle).format('MMMM DD, YYYY')}
   content = {text('Card Content', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis partur')}/>
  </div>)
  });

  stories.add('Without Border', () => { 

    const defaultDate = new Date('Jan 21 2017 GMT+0');
    const subTitle = date('SubTitle', defaultDate);
    return (
    <div style={{"cursor": "pointer"}}>
      <Cards type= "withoutBorder" title= {text('Card Title', 'Second Chance Toys collected and distributed over 6,000 toys in NYC during the holidays!')}
      onClick = {()=>{alert('Card Clicked')}}
      subTitle = {moment(subTitle).format('MMMM DD, YYYY')} />
    </div>)
    });

    
  stories.add('Three Column Cards', () => { 

    const defaultDate = new Date('Jan 21 2017 GMT+0');
    const leftText = date('Left Text', defaultDate);
    return (
    <div style={{"cursor": "pointer"}}>
      <Cards type= "threeColumn" title= {text('Card Title', 'Mount Eden Stop ’N’ Swap')}
      content = {text('Card Content', 'Bring clean, portable, reusable items. Bring clean, portable, reusable items  ')}
      subTitle = {text('Sub Title', 'Sun, 12:00PM - 3:00PM')}
      rightText = {text('Right Text', 'State Island')}
      leftText = {moment(leftText).format('MMMM DD, YYYY')}
      onClick = {()=>{alert('Card Clicked')}}
      />
    </div>)
    });



