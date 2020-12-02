import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

const styles = {
  container: {
    flex: 1,
  },
};

const ContentView = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://tender-darwin-dce586.netlify.app " }}
        style={{ marginTop: 40 }}
      />
    </View>
  );
};

export default ContentView;
