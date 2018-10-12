import * as React from 'react';
import { Row } from 'react-bootstrap';
import { connect } from "react-redux";
import { setSelectedNavItem } from '../../actions/Navbar';
import NavigationBar from '../../Components/NavigationBar';
import { NAVTYPES } from '../../Components/NavigationBar/Constants';
import {history} from '../../Helpers/History';
import './Nav.css';

interface ConnectedDispatch {
    setSelectedNavItem: (navId: number) => void,
}

interface ConnectedState {
    navId: number,
}



class NavBarContainer extends React.Component<ConnectedDispatch & ConnectedState, any> {


    constructor(props: ConnectedDispatch & ConnectedState) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }



    public onNavItemClicked = (navItem: object) => {
        // tslint:disable-next-line:no-string-literal
        this.props.setSelectedNavItem(navItem['navId']);
        // tslint:disable-next-line:no-string-literal
        history.push(navItem['uri'])
    }

    public onNavIconClicked = (title: string) => {
        alert(title)
    }


    public render() {
        return (
            <div className="navbar_main">
                <Row>
                    <NavigationBar onNavItemClicked={this.onNavItemClicked} selectedId={this.props.navId === undefined ? NAVTYPES.About : this.props.navId} onNavIconClicked={this.onNavIconClicked} isLoggedIn={true} />
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    navId: state.NavBarReducer.NAVBARITEM,
})

const mapDispatchToProps = (dispatch: any): ConnectedDispatch => ({
    setSelectedNavItem: (navId: number) => dispatch(setSelectedNavItem(navId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);