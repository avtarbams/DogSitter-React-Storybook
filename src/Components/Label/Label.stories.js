import * as React from 'react';
import { storiesOf } from '@storybook/react';
import  Label  from './index';
import { wInfo } from '../../../utils';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const stories = storiesOf('Components/Label', module);

const storyWrapper = story => {
  return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(readme))

  stories.add('PlainText', () => (
    <div className="container">
    <Label  value="The donateNYC Partnership serves as a “reuse trade association” supporting local nonprofit reuse organizations in New York City. Shaped by member organizations themselves, donateNYC’s partnership network represents a vibrant network of local nonprofit and community-based organizations that have chosen to come together to expand and promote New York City’s local donations community.
  
    donateNYC provides Partner organizations and Affiliates with a range of programs and services, including promotion, networking and training, and environmental impact assessment.
    
    donateNYC Partners are local nonprofit materials exchanges and reuse organizations that collect and redistribute second-hand and surplus goods within New York City. Their work benefits New York and New Yorkers by reducing the City’s solid waste, saving money, conserving energy and resources, and providing jobs and critical social services for New Yorkers in need. By accepting unwanted yet usable goods, donateNYC Partners divert more than 20 million pounds of material from the landfill every year and serve more than 600,000 New Yorkers annually through family services, housing, health care, professional development, and food bank programs. Their work is critical in supporting the City’s zero waste 0X30 initiative." />
    </div>
));


stories.add('PlainTextwithTitle', () => (
  <div className="container">
  <Label  type="labelwithTitle" title ="The donateNYC" value="The donateNYC Partnership serves as a “reuse trade association” supporting local nonprofit reuse organizations in New York City. Shaped by member organizations themselves, donateNYC’s partnership network represents a vibrant network of local nonprofit and community-based organizations that have chosen to come together to expand and promote New York City’s local donations community.

  donateNYC provides Partner organizations and Affiliates with a range of programs and services, including promotion, networking and training, and environmental impact assessment.
  
  donateNYC Partners are local nonprofit materials exchanges and reuse organizations that collect and redistribute second-hand and surplus goods within New York City. Their work benefits New York and New Yorkers by reducing the City’s solid waste, saving money, conserving energy and resources, and providing jobs and critical social services for New Yorkers in need. By accepting unwanted yet usable goods, donateNYC Partners divert more than 20 million pounds of material from the landfill every year and serve more than 600,000 New Yorkers annually through family services, housing, health care, professional development, and food bank programs. Their work is critical in supporting the City’s zero waste 0X30 initiative." />
  </div>
));
stories.add('labelwithImage', () => (
  <div className="container">
  <Label  type="labelwithImage" imageurl="https://static1.squarespace.com/static/56391673e4b05cbb53fe4c52/t/58adb60437c5810c9be61172/1487779340380/donate-nyc" title ="The donateNYC" value="The donateNYC Partnership serves as a “reuse trade association” supporting local nonprofit reuse organizations in New York City. Shaped by member organizations themselves, donateNYC’s partnership network represents a vibrant network of local nonprofit and community-based organizations that have chosen to come together to expand and promote New York City’s local donations community.

  donateNYC provides Partner organizations and Affiliates with a range of programs and services, including promotion, networking and training, and environmental impact assessment.
  
  donateNYC Partners are local nonprofit materials exchanges and reuse organizations that collect and redistribute second-hand and surplus goods within New York City. Their work benefits New York and New Yorkers by reducing the City’s solid waste, saving money, conserving energy and resources, and providing jobs and critical social services for New Yorkers in need. By accepting unwanted yet usable goods, donateNYC Partners divert more than 20 million pounds of material from the landfill every year and serve more than 600,000 New Yorkers annually through family services, housing, health care, professional development, and food bank programs. Their work is critical in supporting the City’s zero waste 0X30 initiative." />
  </div>
));
stories.add('ImagewithLabel', () => (
  <div className="container">
  <Label  type="ImagewithLabel" imageurl="https://static1.squarespace.com/static/56391673e4b05cbb53fe4c52/t/58adb60437c5810c9be61172/1487779340380/donate-nyc" title ="The donateNYC" value="The donateNYC Partnership serves as a “reuse trade association” supporting local nonprofit reuse organizations in New York City. Shaped by member organizations themselves, donateNYC’s partnership network represents a vibrant network of local nonprofit and community-based organizations that have chosen to come together to expand and promote New York City’s local donations community.

  donateNYC provides Partner organizations and Affiliates with a range of programs and services, including promotion, networking and training, and environmental impact assessment.
  
  donateNYC Partners are local nonprofit materials exchanges and reuse organizations that collect and redistribute second-hand and surplus goods within New York City. Their work benefits New York and New Yorkers by reducing the City’s solid waste, saving money, conserving energy and resources, and providing jobs and critical social services for New Yorkers in need. By accepting unwanted yet usable goods, donateNYC Partners divert more than 20 million pounds of material from the landfill every year and serve more than 600,000 New Yorkers annually through family services, housing, health care, professional development, and food bank programs. Their work is critical in supporting the City’s zero waste 0X30 initiative." />
  </div>
));


stories.add('TitleParaImage', () => (
  <div className="container">
    <Label  type="TitleParaImage" imageurl="https://images.crateandbarrel.com/is/image/Crate/cb_dSC_Furniture_20180810_UpholsteryPromo?wid=1440&qlt=80" title ="Our Mission" value="CancerCare provides free counseling, resources, and financial assistance to anyone affected by cancer. All CancerCare services are provided by professional oncology social workers and cancer experts. The CancerCare Thrift Shop on the Upper East Side of Manhattan offers a wide selection of designer clothing, jewelry, and items for the home, with all proceeds supporting the mission of CancerCare."/>
  </div>
));
