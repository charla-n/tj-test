﻿/// Component to show a 404 error to the user
/// should be mapped to a wildcard route

import * as React from 'react'

const NotFound = () => {
    return (
        <div className={"align-center"}>
            <i className={"fa fa-times fa-4x"} aria-hidden="true"></i>
            <h1>404 / Not found</h1>
        </div>
    );
}

export default NotFound;