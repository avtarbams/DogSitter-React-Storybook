import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardImg,
    CardSubtitle, CardText, CardTitle } from 'reactstrap';

import './subscription.css';




class Subscription extends React.Component {

  public generateCard(){
      return(
        <div className="subscription-card" >
      <Card>
        <CardImg top={true} width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
      )
  }

  public render() {

    const generateSubscriptionsCard = this.generateCard()

    return (
      <div>
        <div className="Subscription">
          <div><Link to="/login">Avtar</Link></div>
        </div>
       <div>
           {generateSubscriptionsCard}
           </div>
        
      </div>
    );
  }

  // private onhit(e: any) {
  //   alert(e.target.innerHTML);
  // }

}

export default Subscription;