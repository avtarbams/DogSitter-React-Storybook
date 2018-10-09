import * as moment from 'moment';
import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import Responsive from 'react-responsive';
import Truncate from 'react-truncate-html';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import Shiitake from 'shiitake';
import './Cards.css';




export type CardType = 'simple' | 'withoutBorder' | 'threeColumn';

export interface CardProps {
  /**
 * Header title for the card
 */
  title?: string

  /**
   * SubTitle of the Card
   */
  subTitle?: string

  /**
  * Main Content of the Card
  */
  content?: string

  /**
* Left Text in case of three column card layout
*/
  leftText?: string

  /**
 * Right Text in case of three column card layout
 */
  rightText?: string

  /**
   * Type of the Card
   */
  type?: CardType

  /**
   * Classname for the card
   */
  className?: string

  /**
   * Card with image url
   */
  imageUrl?: any;

  /** The action on the on click event  */
  onClick?: (event: any) => any;

}
class Cards extends React.Component<CardProps, any> {
  constructor(props: CardProps) {
    super(props);
  }

  public renderCard = () => {

    const Desktop = props => <Responsive {...props} minWidth={1025} />;
    const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={1024} />;
    const Mobile = props => <Responsive {...props} minWidth={320} maxWidth={767} />;

    const { title, subTitle, content, leftText, rightText, type, className, imageUrl, onClick } = this.props;
    switch (type) {
      case 'simple':
        return (
          <div className={className} onClick={onClick} >
              <Desktop>
                <Card className="card_container">
                {imageUrl !== null ? <CardImg top={true} width="100%" height="310px" src={imageUrl} alt="Card Image" style={{"object-fit":"cover"}} /> : null}
                <CardBody>
                  <CardTitle className="card_simple_title" style={{"height": 50 + 'px'}}><Shiitake lines={2} >{title}</Shiitake></CardTitle>
                  <CardSubtitle>{subTitle}</CardSubtitle>
                  {content !== undefined ? <CardText style={{"height": 50 + 'px'}}><Truncate lines={2} dangerouslySetInnerHTML={{ __html: content}} /></CardText> : null}
                </CardBody>
                </Card>
              </Desktop>
              <Tablet>
                <Card className="card_container">
                {imageUrl !== null ? <CardImg top={true} width="100%" height="310px" src={imageUrl} alt="Card Image" style={{"object-fit":"cover"}} /> : null}
                <CardBody>
                <CardTitle style={{"height": 50 + 'px'}}><Shiitake lines={2} >{title}</Shiitake></CardTitle>
                  <CardSubtitle>{subTitle}</CardSubtitle>
                  {content !== undefined ? <CardText style={{"height": 50 + 'px'}}><Truncate lines={2} dangerouslySetInnerHTML={{ __html: content}} /></CardText> : null}
                </CardBody>
                </Card>
              </Tablet>
              <Mobile>
                <Card className="card_container">
                {imageUrl !== null ? <CardImg top={true} width="100%" height="145px" src={imageUrl} alt="Card Image" style={{"object-fit":"cover"}} /> : null}
                <CardBody className="mobile_card_body">
                  <CardSubtitle className="mobile_card_subtitle">{subTitle}</CardSubtitle>
                  <CardTitle className="mobile_card_title"><Shiitake lines={3} >{title}</Shiitake></CardTitle>
                </CardBody>
                </Card>
              </Mobile>
          </div >
        );
        break;
      case 'withoutBorder':
        return (
          <div className={className} onClick={onClick} >
            <Card className="withoutBorder_container">
              <CardBody className="card_withoutBorder_body">
                <CardTitle className="card_withoutBorder_title"><Shiitake lines={2} >{title}</Shiitake></CardTitle>
                <CardSubtitle className="card_withoutBorder_subtitle">{subTitle}</CardSubtitle>
              </CardBody>
            </Card>
          </div>
        );
        break;
      case 'threeColumn':
        return (
          <div className={className} onClick={onClick} >
            <Row className="card_threeColumn_container">
              <Desktop>
                <Col xs={2}>
                  <div className="card_threeColumn_left">
                    <ul>
                      <li className="card_threeColumn_left_month">{moment(leftText).format('MMMM').toUpperCase()}</li>
                      <li className="card_threeColumn_left_day">{moment(leftText).format('DD')}</li>
                    </ul>
                  </div>
                </Col>
                <Col xs={8} className="card_threeColumn_middle">
                  <CardTitle className="card_threeColumn_middle_title"><Shiitake lines={2} >{title}</Shiitake></CardTitle>
                  {content !== undefined ? <CardText className="card_threeColumn_middle_content"><Truncate lines={2} dangerouslySetInnerHTML={{ __html: content}} /></CardText> : null}
                  <CardSubtitle className="card_threeColumn_middle_subtitle">{subTitle}</CardSubtitle>
                </Col>
                <Col xs={2}>
                  <div className="card_threeColumn_right_mobile">{rightText}</div>
                </Col>
              </Desktop>
              <Tablet>
                <Col xs={2}>
                  <div className="card_threeColumn_left">
                    <ul>
                      <li className="card_threeColumn_left_month">{moment(leftText).format('MMMM').toUpperCase()}</li>
                      <li className="card_threeColumn_left_day">{moment(leftText).format('DD')}</li>
                    </ul>
                  </div>
                </Col>
                <Col xs={8} className="card_threeColumn_middle">
                  <CardTitle className="card_threeColumn_middle_title"><Shiitake lines={2} >{title}</Shiitake></CardTitle>
                  {content !== undefined ? <CardText className="card_threeColumn_middle_content"><Truncate lines={2} dangerouslySetInnerHTML={{ __html: content}} /></CardText> : null}
                  <CardSubtitle className="card_threeColumn_middle_subtitle">{subTitle}</CardSubtitle>
                </Col>
                <Col xs={2}>
                  <div className="card_threeColumn_right_mobile">{rightText}</div>
                </Col>
              </Tablet>
              <Mobile>
                <Col xs={3}>
                  <div className="card_threeColumn_left_mobile">
                    <ul>
                      <li className="card_threeColumn_left_month">{moment(leftText).format('MMM').toUpperCase()}</li>
                      <li className="card_threeColumn_left_day">{moment(leftText).format('DD')}</li>
                    </ul>
                  </div>
                </Col>
                <Col xs={6} className="card_threeColumn_middle">
                  <CardTitle className="card_threeColumn_middle_title_mobile"><Shiitake lines={2} >{title}</Shiitake></CardTitle>
                  <CardSubtitle className="card_threeColumn_middle_subtitle_mobile">{subTitle}</CardSubtitle>
                </Col>
                <Col xs={3}>
                  <div className="card_threeColumn_right_mobile">{rightText}</div>
                </Col>
              </Mobile>
            </Row>
          </div>
        );
        break;
      default:
        return (
          <div className={className} onClick={onClick} >
            <Card className="card_container">
              <CardImg top={true} width="100%" src={imageUrl} alt="Card Image" />
              <Desktop>
                <CardBody>
                  <CardTitle><Shiitake lines={2} >{title}</Shiitake></CardTitle>
                  <CardSubtitle>{subTitle}</CardSubtitle>
                  {content !== undefined ? <CardText><Truncate lines={2} dangerouslySetInnerHTML={{ __html: content}} /></CardText> : null}
                </CardBody>
              </Desktop>
              <Tablet>
                <CardBody>
                  <CardTitle><Shiitake lines={2} >{title}</Shiitake></CardTitle>
                  <CardSubtitle>{subTitle}</CardSubtitle>
                  {content !== undefined ? <CardText><Truncate lines={2} dangerouslySetInnerHTML={{ __html: content}} /></CardText> : null}
                </CardBody>
              </Tablet>
              <Mobile>
                <CardBody className="mobile_card_body">
                  <CardSubtitle className="mobile_card_subtitle">{subTitle}</CardSubtitle>
                  <CardTitle className="mobile_card_title"><Shiitake lines={3} >{title}</Shiitake></CardTitle>
                </CardBody>
              </Mobile>
            </Card>
          </div >
        );
        break;
    }

  }

  public render() {
    return this.renderCard()
  }
}

export default Cards;