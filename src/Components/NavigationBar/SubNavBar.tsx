import * as React from 'react';
import { Row } from 'react-bootstrap';
import Label from '../Label';
import './nav.css';

interface SubNavProps {
    title: string;
    navbarData: any[];
    selectedId?: number;
    onNavItemClicked(navItem: object): void;
}




class SubNavBarComponent extends React.Component<SubNavProps, any> {

    public onNavItemClicked = (navItem: object) => {
        this.props.onNavItemClicked(navItem);
    }

    /** Generate NavBars */
    public generateNavBars = () => {
        const navBarRows: any = [];
        const { navbarData, onNavItemClicked, selectedId } = this.props;
        if (navbarData !== undefined && onNavItemClicked !== undefined) {
            // tslint:disable-next-line:only-arrow-functions
            navbarData.forEach((item: any) => {
                {
                    const { title, navId } = item;
                    const isSelected = (navId === selectedId)
                    // tslint:disable-next-line:jsx-no-lambda
                    navBarRows.push(<div className={isSelected ? "subheader subselected" : "subheader"} onClick={() => onNavItemClicked(item)}>
                        {title}
                    </div>);
                }
            })
        }
        return navBarRows;
    }

    public render() {
        const rows = this.generateNavBars();

        const { title } = this.props;
        return (
            <div className="subheader_navbar">
                <Row>
                    <div className="subnav_body">
                        <Label value={title} className="header_white" />
                        {rows}
                    </div>
                </Row>
            </div>
        )
    }
}


export default SubNavBarComponent;