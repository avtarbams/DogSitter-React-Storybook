import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import InterfaceTypes from '../../CommonType/Interfacetypes';
import './Label.css';


/**
 * Classnames: header_black / back_navigation / header_black_mini / header_white / content_body / content_link
 */

export interface LabelProps {
  onLabelClicked?: () => void;
}


class Label extends React.Component<InterfaceTypes & LabelProps, any> {
  constructor(props: InterfaceTypes & LabelProps) {
    super(props);
  }

  public renderCard = () => {

    const { type, value = "", title, imageurl, className, onLabelClicked } = this.props;

    switch (type) {
      case 'labelwithTitle':
        return (
          <Row>
            <Col xs={12} className="label_Style">
              <div className="article_Title"><h4>{title}</h4> {value} </div>
            </Col>
          </Row>
        );
        break;
      case 'labelwithImage':
        return (
          <Row>
            <Col sm={3} className="Image_Div">
              <img src={imageurl} />
            </Col>
            <Col sm={9} className="label_with_Image">
              <div className="article_Title"><h4>{title}</h4></div>
              <div className="article_Para"> {value} </div>
            </Col>
          </Row>
        );
        break;
      case 'ImagewithLabel':
        return (
          <Row>
            <Col sm={8} className="Image_with_Label">
              <div className="article_Title"><h4>{title}</h4></div>
              <div className="article_Para"> {value} </div>
            </Col>
            <Col sm={4} className="Image_Div">
              <img src={imageurl} />
            </Col>
          </Row>
        );
        break;
      case 'TitleParaImage':
        return (
          <Row>
            <Col sm={12} className="Title_Para_Image">
              <div className="article_Title"><h4>{title}</h4> </div>
              <div className="article_Para"> {value} </div>
              <div><img src={imageurl} /></div>
            </Col>
          </Row>
        );
        break;
      case 'LabelWithHTMLContent':
        return (
          <Row>
            <Col xs={12} className="label_Style">
              <div dangerouslySetInnerHTML={{ __html: value }} className={className} onClick={onLabelClicked} />
            </Col>
          </Row>
        );
        break;
      default:
        return (
          <Row>
            <div className="label_Style">
              <div className={className} onClick={onLabelClicked}> {value}</div>
            </div>
          </Row>

        );
        break;
    }
    return;
  }

  public render() {

    return (
      <div className="LabelDiv">
        {this.renderCard()}
      </div>
    );
  }

}

export default Label;