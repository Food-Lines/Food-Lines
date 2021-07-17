import React from 'react'
import { SafeAreaView, Text, View, ImageBackground } from 'react-native'
import { MainRoutes } from '../Navigators/routes'

//Components
import {
  Colors,
  Avatar,
  UserInfoSection,
  StyledTitle,
  Caption,
  Row,
  InfoBoxWrapper,
  InfoBox,
  CategoryButtonText,
  MenuWrapper,
  MenuItem,
  MenuItemText,
  Action,
  EditProfileTextInput,
  CommandButton,
  PanelButtonTitle,
  EditProfileHeader,
  PanelHeader,
  PanelHandle,
  Panel,
  PanelTitle,
  PanelSubtitle,
  PanelButton
} from '../Components/styles'
import { TouchableOpacity } from 'react-native'
import { TouchableRipple } from 'react-native-paper'

//Animations
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'

// Colors
const { greyLight, white, darkLight, grey, primary, black } = Colors

//Icons
import { Ionicons, Fontisto } from '@expo/vector-icons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { Icon } from 'react-native-elements/dist/icons/Icon'


const EditProfile = ({ navigation }): React.ReactElement => {

  const renderHeader = () => {
    return (
    <EditProfileHeader>
    <PanelHeader>
      <PanelHandle />
    </PanelHeader>
  </EditProfileHeader>
    )
  }
  
  
  const renderInner = () => {
    return (
      <Panel style={{shadowOffset: {width: 0, height: 0}}}>
        <PanelHeader>
          <PanelTitle>Upload Photo</PanelTitle>
          <PanelSubtitle>Choose Your Profile Picture</PanelSubtitle>
        </PanelHeader>
        <PanelButton>
          <PanelButtonTitle>Take Photo</PanelButtonTitle>
        </PanelButton>
        <PanelButton>
          <PanelButtonTitle>Choose From Library</PanelButtonTitle>
        </PanelButton>
        <PanelButton onPress={() => bs.current.snapTo(1)}>
          <PanelButtonTitle>Cancel</PanelButtonTitle>
        </PanelButton>
    </Panel>
    )
  }

  let bs =  React.createRef<BottomSheet>()
  let fall = new Animated.Value(1)
  return (
    <SafeAreaView style={{ backgroundColor: white, flex: 1 }}>
      <BottomSheet 
        ref={bs}
        initialSnap={1}
        callbackNode={fall}
        snapPoints={[330, 0]}
        renderHeader={renderHeader}
        renderContent={renderInner}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{ margin: 20, opacity:Animated.add(0.3, Animated.multiply(fall, 1.0)),  }}>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ImageBackground
                source={require('../Assets/mockPFP.jpg')}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Ionicons
                    name="camera"
                    size={35}
                    color={white}
                    style={{
                      opacity: 0.6,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: white,
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
            Bob Smith
          </Text>
        </View>
        <StyledTextInput
          icon="user-o"
          placeholder="First Name"
          keybaordType="default"
        />
        <StyledTextInput
          icon="user-o"
          placeholder="Last Name"
          keybaordType="default"
        />
        <StyledTextInput
          icon="phone"
          placeholder="Phone"
          keybaordType="phone-pad"
        />
        <StyledTextInput
          icon="envelope-o"
          placeholder="Email"
          keybaordType="email-address"
        />
        <StyledTextInput
          icon="globe"
          placeholder="Country"
          keybaordType="default"
        />
        <StyledTextInput
          icon="map-marker"
          placeholder="City"
          keybaordType="default"
        />
      </Animated.View>
      <CommandButton onPress={() => {}}>
        <PanelButtonTitle>Submit</PanelButtonTitle>
      </CommandButton>
    </SafeAreaView>
  )
}


const SearchIcon = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Ionicons name={'search'} size={30} color={darkLight} />
    </TouchableOpacity>
  )
}

const StyledTextInput = ({ icon, placeholder, keybaordType }) => {
  return (
    <Action>
      <FontAwesome name={icon} size={20} />
      <EditProfileTextInput
        placeholder={placeholder}
        placeholderTextColor={grey}
        autoCorrect={false}
        keyboardType={keybaordType}
        onChange={() => {}}
      />
    </Action>
  )
}

export default EditProfile
