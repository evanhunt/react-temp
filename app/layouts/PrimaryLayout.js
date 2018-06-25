import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { privateRoutes } from 'routers';

import ErrorBoundary from 'components/ErrorBoundary';

import RouteWithSubRoutes from 'components/RouteWithSubRoutes';
import SiderColumn from 'components/SiderColumn';
import UserHeader from 'components/UserHeader';
import styles from './style.css';

const { Content } = Layout;

export default class PrimaryLayout extends Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState((prevState) => ({
            collapsed: !prevState.collapsed,
        }));
    };
    render() {
        return (
            <Layout>
                <SiderColumn collapsed={this.state.collapsed} />
                <Layout>
                    <UserHeader
                        collapsed={this.state.collapsed}
                        toggle={this.toggle}
                    />
                    <Content className={styles.content}>
                        <ErrorBoundary>
                            <Switch>
                                {privateRoutes.map((route, index) => (
                                    <RouteWithSubRoutes
                                        key={index.toString()}
                                        {...route}
                                    />
                                ))}
                            </Switch>
                        </ErrorBoundary>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
