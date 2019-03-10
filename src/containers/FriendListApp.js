import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FriendsActions from '../actions/FriendsActions';
import { FriendList, AddFriendInput, AshdownButton } from '../components';


@connect(state => ({
    friendlist: state.friendlist
}))
export default class FriendListApp extends Component {

    static propTypes = {
        friendsById: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    render () {
        const { friendlist: { friendsById }, dispatch } = this.props;
        const actions = bindActionCreators(FriendsActions, dispatch);

        return (
            <div className="">
                <h1>The FriendList</h1>

                <AddFriendInput addFriend={actions.addFriend} />
                <FriendList friends={friendsById} actions={actions} />

                <h2>Ashdown Button</h2>
                <AshdownButton>Test for button</AshdownButton>
            </div>
        );
    }
}
