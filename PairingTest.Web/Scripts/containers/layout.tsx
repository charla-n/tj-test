/// The layout of the application that will be used for every single page

import * as React from 'react'
import { connect } from 'react-redux';

export class Layout extends React.Component<{}, {}> {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className={"container"}>
                    <div className={"row"}>
                        {this.props.children}
                    </div>
                    <div className={"clearfix"}></div>
                </div>
            </div>
        );
    }
}

export default Layout;
