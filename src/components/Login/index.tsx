import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { User } from '../../store/ducks/users/types';
import * as UserActions from '../../store/ducks/users/actions';

interface StateProps {
  users: User[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class UserList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { users } = this.props;
    return (
      <ul>
        { users.map((user: User) => user.username)}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  users: state.users.users,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
