import React, { Component, PropTypes } from 'react';

import styles from './AshdownButton.scss';

export default class FriendList extends Component {
    render () {
        return (
            <button className={styles.ashdownButton}>{this.props.children}</button>
        );
    }

}
