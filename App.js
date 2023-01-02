import { View, Text } from 'react-native'
import React from 'react'
import Login from './src/screens/Login'
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux";

const App = () => {
  return (
    <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Login />
          </PersistGate>
        </Provider>
  )
}

export default App