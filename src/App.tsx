/** @format */

import React, {Component} from 'react'
import Routes from '@routes'
import {withRouter} from 'react-router-dom'
import {useTranslation, withTranslation, Trans} from 'react-i18next'

interface IAppComponentProps {}
interface IAppComponentState {
    isAuthenticated: Boolean
}

class App extends Component<IAppComponentProps, IAppComponentState> {
    constructor(props: IAppComponentProps) {
        super(props)
        this.state = {
            isAuthenticated: true,
        }
    }
    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
        }
        return <Routes childProps={childProps} />
    }
}

export default withRouter(App as any)
