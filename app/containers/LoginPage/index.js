import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Icon } from 'antd';

import { requestLoggedUserAction } from './action';
import { Logo } from './logo';
import styles from './style.css';

import WrappedNormalLoginForm from './form';

class LoginPage extends Component {
    componentWillMount() {}
    componentWillReceiveProps(nextProps) {
        if (nextProps.isAuthed === 'admin') {
            this.props.history.replace('/');
        }
    }
    render() {
        const { requestLoggedUser } = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <div className={styles.head}>
                            <Logo />
                        </div>
                        <div className={styles.desc}>
                            Quick setup for new performance orientated,
                            offline–first React.js applications
                        </div>
                    </div>
                    <div className={styles.main}>
                        <WrappedNormalLoginForm
                            requestLoggedUser={requestLoggedUser}
                        />
                    </div>
                </div>
                <div className={styles.globalFooter}>
                    <div className={styles.link}>
                        <span>帮助</span>
                        <span>隐私</span>
                        <span>条款</span>
                    </div>
                    <div className={styles.copyright}>
                        Copyright<Icon type="copyright" />2018 react-boilerplate
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthed: state.loggedUserReducer.isAuthed,
});

const mapDispatchToProps = (dispatch) => ({
    requestLoggedUser: () => {
        dispatch(requestLoggedUserAction());
    },
});

LoginPage.propTypes = {
    requestLoggedUser: PropTypes.func,
    history: PropTypes.object,
    isAuthed: PropTypes.string,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginPage);
