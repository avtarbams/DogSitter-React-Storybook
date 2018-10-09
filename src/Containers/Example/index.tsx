import * as moment from 'moment';
import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchRequest } from '../../actions/Example';
import Cards from '../../Components/Example';
import {history} from '../../Helpers/History';
import './Example.css';


interface ConnectedDispatch {
  fetchRequest: () => void,
}

export interface ConnectedState {
  apiJSON: any,
}


 class ExampleContainer extends React.Component<ConnectedDispatch & ConnectedState, any> {
  constructor(props: ConnectedDispatch & ConnectedState) {
    super(props);

    this.state = {
      JSONData: null
    }
  }

  public componentWillReceiveProps(nextProps: any) {
    
    if (this.state.JSONData !== nextProps.apiJSON) {
      this.setState({
        JSONData: this.props.apiJSON
      })
    }
  }

  public componentDidMount() {
    this.props.fetchRequest()
  }

  public onEventCardClicked = () => {
    history.push("/Example")
  }




  public generateExampleGrid = (eventData:any) => {
    const rows: any = [];

    eventData.forEach((item) => {
      rows.push(
        <Cards type= "threeColumn" 
        title= {item.EventName}
        content = {item.Description}
        subTitle = {moment(item.FromDateTime).format('ddd') + ', ' + item.FromTime + ' - ' + item.ToTime}
        rightText = {item.Borough}
        leftText = {moment(item.EventDate).format('MMMM DD, YYYY')}
        onClick = {this.onEventCardClicked}
     />
      )
    })
    return rows;
  }


  public render() {

    if(this.props.apiJSON!==undefined){
      
    const grid = this.generateExampleGrid(this.props.apiJSON);
      return (
        <Row className="">
          <Col xs={12}>
          <div style={{"cursor": "pointer"}}>
          {grid}
          </div>
          </Col>
          </Row>

      );
    }
    return null
  }

  }

  const mapStateToProps = (state: any): ConnectedState => ({
    apiJSON: state.ExampleReducer.ONE,
  })
  
  const mapDispatchToProps = (dispatch: any): ConnectedDispatch => ({
    fetchRequest: () => dispatch(fetchRequest()),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);