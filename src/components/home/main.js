import React, { Component } from "react";
import { Text, View, ActivityIndicator, Alert } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import { connect } from "react-redux";

import { PickerArea } from "./picker";
import { Dashboard } from "./dashboard";
import { ActionButton } from "./button";

import { fetchLists } from "../../redux/waiters/actions";
import { logout } from "../../redux/user/actions";

const mapStateToProps = state => ({
  user: state.user,
  lists: state.waiters.lists,
  isLoading: state.waiters.meta.isFetching,
  date: state.waiters.meta.lastReceived
});

const mapDispatchToProps = dispatch => ({
  onFetch: () => dispatch(fetchLists()),
  onLogout: () => dispatch(logout())
});

class Home extends Component {
  constructor() {
    super();
    this.unsubscriber = null;
    this.state = { zbc: null };
  }

  componentDidMount() {
    this.unsubscriber = this.props.onFetch();
  }

  componentWillUnmount() {
    this.unsubscriber;
  }

  render() {
    const { navigate } = this.props.navigation;
    const { zbc } = this.state;
    const { user, lists, isLoading, onLogout, date } = this.props;
    return (
      <View style={[s.bg_white, s.flx_i, s.jcc]}>
        <PickerArea
          zbc={zbc}
          test={(itemValue, itemIndex) => this.setState({ zbc: itemValue })}
        />
        {isLoading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Dashboard lists={lists} area={zbc} date={date} />
        )}
        <ActionButton
          style={
            zbc == null
              ? [s.bg_darkGrey, s.pv3, s.mh3, s.mt2, s.aic, s.br5]
              : [s.bg_peach, s.pv3, s.mh3, s.mt2, s.aic, s.br5]
          }
          caption={"SHOW DETAILS"}
          route={() => navigate("DetailsScreen", { zbc })}
          disabled={zbc === null}
        />
        <ActionButton
          style={[s.pv3, s.mh3, s.mt2, s.aic, s.br5]}
          caption={"LOGOUT"}
          route={() =>
            Alert.alert("Attention", "Confirm to Logout?", [
              { text: "Cancel", onPress: () => console.log("Cancel") },
              { text: "Confirm", onPress: () => onLogout() }
            ])
          }
          disabled={null}
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
