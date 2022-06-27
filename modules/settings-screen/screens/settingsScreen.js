import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Switch, TouchableOpacity } from "react-native";
import Slider from '@react-native-community/slider';

// Note: Tabs/tab navigator at the top
const SettingsScreen = (props) => {
  const { navigation, params } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ borderWidth: 1, width: 85,}}
        onPress={()=>{navigation.navigate("TestScreen")}}>
        <Text>Next Screen</Text>
      </TouchableOpacity>
      <ScrollView>
        <SliderSetting settingName={"Maximum Distance"}/>
        <SliderSetting settingName={"Gender"}/>
        <SliderSetting settingName={"Age Range"}/>
        <ToggleSetting settingName={"Show Me On Search"}/>
        <ToggleSetting settingName={"Swipe with Friends"}/>
        <Text>Gray Space</Text>
        <ToggleSetting settingName={"New matches"}/>
        <ToggleSetting settingName={"Message Likes"}/>
        <Text>Gray Space</Text>
        <ToggleSetting settingName={"In-App Vibrations"}/>
        <ToggleSetting settingName={"In-App Sound"}/>
        <Text>Gray Space</Text>
        <NewPageSetting newPageName={"Law"}/>
        <NewPageSetting newPageName={"Law"}/>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingContainer: {
    marginVertical: 20,
    borderWidth: 1
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 20
  },
  nonSliderSettingText: {
    color: "#231F20",
    fontSize: 16
  }
});

const SliderSetting = ( {settingName} ) => {
  return (
    <View style={styles.settingContainer}>
      <Text style={styles.nonSliderSettingText}>
        {settingName}
      </Text>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
};

const ToggleSetting = ( {settingName} ) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={[styles.toggleContainer, styles.settingContainer]}>
      <Text>{settingName}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const NewPageSetting = ( {newPageName} ) => {
  return (
    <View>
        <Text>{newPageName}</Text>
    </View>
  );
};

export default SettingsScreen;
