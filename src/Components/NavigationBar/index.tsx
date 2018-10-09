
import * as React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { history } from '../../Helpers/History';
import { NAVBARDATA, USEROPTIONS } from './Constants';
import './nav.css';



interface NavProps {
    selectedId: number;
    isLoggedIn: boolean;
    onNavItemClicked?(navItem: object): void;
    onNavIconClicked?(title: string): void;
}

// tslint:disable-next-line:no-var-requires
const DogsitterLogo = require('../../Assets/dogsitter logo.png') as string;


const { pathname } = history.location

class NavigationBar extends React.Component<NavProps, any>{

    constructor(props: NavProps) {
        super(props);
    }

    public onLoginClicked = () => {
        // login button clicked
    }

    /** Generate NavBars */
    public generateNavBars = () => {
        const navBarRows: any = [];
        const navbarData = NAVBARDATA;
        const { onNavItemClicked } = this.props;
        if (navbarData !== undefined && onNavItemClicked !== undefined) {
            // tslint:disable-next-line:only-arrow-functions
            navbarData.forEach((item: any) => {
                {
                    const { title } = item;
                    console.log(item);

                    // tslint:disable-next-line:jsx-no-lambda
                    navBarRows.push(<NavItem><div className={pathname === item.uri ? "navbaritem selected" : "navbaritem"} onClick={() => onNavItemClicked(item)}>
                        {title}
                    </div></NavItem>);
                }
            })
        }
        return navBarRows;
    }


    /** Generate NavBars */
    public generateUserBars = () => {
        const navBarRows: any = [];
        const { selectedId, onNavItemClicked } = this.props;
        const useroption = USEROPTIONS;
        if (useroption !== undefined && onNavItemClicked !== undefined) {
            // tslint:disable-next-line:only-arrow-functions
            useroption.forEach((item: any) => {
                {
                    const { title, navId } = item;
                    const isSelected = (navId === selectedId)

                    // tslint:disable-next-line:jsx-no-lambda
                    navBarRows.push(<NavItem><div className={isSelected ? "useritem selected" : "useritem"} onClick={() => onNavItemClicked(item)}>
                        {title}
                    </div> </NavItem>);
                }
            })
        }
        return navBarRows;
    }



    public render() {
        const rows = this.generateNavBars();
        const userrows = this.generateUserBars();

        return (
            <div>
                <Navbar collapseOnSelect={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand"><div><img src={DogsitterLogo} alt="logo" height={40} />
                            </div></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            {rows}
                        </Nav>

                        {this.props.isLoggedIn ?
                            <Nav pullRight={true}>
                                {userrows}
                            </Nav>
                            :
                            <Nav pullRight={true}>
                                <div className="guest_view">
                                    <button onClick={this.onLoginClicked} >Login</button>
                                </div>
                            </Nav>
                        }

                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;