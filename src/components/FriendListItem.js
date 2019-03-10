import React, { Component, PropTypes } from 'react';

export default class FriendListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starred: PropTypes.bool,
    starFriend: PropTypes.func.isRequired,
    deleteFriend: PropTypes.func.isRequired
  }

  render () {
    return (
      <li className="">
        <div className="">
          <div><span>{this.props.name}</span></div>
          <div><small>xx friends in common</small></div>
        </div>
        <div className="">
          <button className={`btn btn-default`} onClick={() => this.props.starFriend(this.props.id)}>
            <i className="" />
          </button>
          <button className={`btn btn-default`} onClick={() => this.props.deleteFriend(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}
