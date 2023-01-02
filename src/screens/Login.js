import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { TOKEN, USER } from "../redux/profile/types";
import { profile } from "../services/profile";

function Login(props) {
  const [Id, setId] = useState("12345678900");
  const [Pass, setPass] = useState("novaSenha");

  useEffect(() => {
    if (props.token != null) {
      getProfile(props.token);
    }
  }, [props.token]);

  const handleLogin = () => {
    profile
      .login({
        login: Id,
        password: Pass,
      })
      .then((res) => {
        props.sendTokenToRedux(res.token);
      })
      .catch((rej) => {
        console.log(rej);
      });
  };

  const getProfile = (tok) => {
    profile
      .getProfile(tok)
      .then((res) => {
        props.sendUserToRedux(res);
      })
      .catch((rej) => {
        console.log(rej);
      });
  };
  return (
    <View style={styles.container}>
      <Text>{props.user?.name}</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.profile.token,
    user: state.profile.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendTokenToRedux: (tok) => {
      dispatch({
        type: TOKEN,
        payload: tok,
      });
    },
    sendUserToRedux: (user) => {
      dispatch({
        type: USER,
        payload: user,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
