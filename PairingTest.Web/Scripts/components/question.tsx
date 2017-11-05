import * as React from 'react'
import { connect } from 'react-redux'

export interface QuestionProps {
    Title: string,
}

export default class Question extends React.Component<QuestionProps, {}> {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <b>{this.props.Title}</b>
                <br/>
                <input type="text"/>
            </div>
        );
    }
}