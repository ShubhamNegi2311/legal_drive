import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {BLACK, PRIMARY, WHITE} from 'styles/colors';
import {
  HS_10,
  HS_150,
  HS_20,
  MS_12,
  MS_16,
  MS_18,
  MS_20,
  VS_10,
  VS_200,
  VS_30,
} from 'styles/mixins';
import {SafeAreaView, Text, View} from '@gluestack-ui/themed';
import {style} from './style';
import ImageComponent from 'components/atoms/image_component';
import IconView, {Vector} from 'components/atoms/icon_view';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={style.mainContainer}>
      <View style={style.upperContainer}>
        <Icon
          name="arrowleft"
          color={WHITE}
          size={MS_20}
          style={style.arrowIcon}
        />
        <Text color={WHITE} bold={true} fontSize={MS_18}>
          Profile
        </Text>
      </View>
      <View style={style.lowerContainer}>
        <View height={HS_150}>
          <View
            position="absolute"
            top={-VS_30}
            alignSelf="center"
            height={HS_150}
            width={HS_150}>
            <ImageComponent
              height={HS_150}
              width={HS_150}
              uri={'https://reactnativepaper.com/'}
              borderRadius={HS_150 / 2}
            />
          </View>
        </View>
        <View
          flexDirection="row"
          justifyContent="center"
          gap={HS_20}
          paddingHorizontal={HS_10}>
          <Text numberOfLines={1} flexShrink={1} fontSize={MS_16} bold={true}>
            Maki Zenin
          </Text>
          <IconView
            icons={Vector.FONT_AWESOME}
            iconName="edit"
            iconColor={PRIMARY}
          />
        </View>
        <Text alignSelf="center" fontSize={MS_12}>
          Admin
        </Text>
        <View
          flexDirection="row"
          justifyContent="space-around"
          flexWrap="wrap"
          paddingHorizontal={HS_10}
          backgroundColor={'rgba(103, 119, 239, 0.07)'}
          paddingVertical={VS_10}>
          <View>
            <Text color={BLACK} numberOfLines={1}>
              8434615941
            </Text>
          </View>
          <View>
            <Text color={BLACK} flexShrink={1} flexGrow={1} numberOfLines={1}>
              r.g.rdffs@aol.com
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
