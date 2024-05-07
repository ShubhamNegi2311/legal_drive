import {View} from 'react-native';
import React from 'react';
import {Colors, TextColor, WHITE} from '../../styling/colors';
import {BaseText} from '../atoms/text';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {
  HS_15,
  MS_20,
  VS_20,
  HS_10,
  MS_15,
  MS_12,
  HS_5,
  MS_30,
  VS_40,
} from '../../styling/mixins';
import Dots_Icon from 'react-native-vector-icons/Entypo';

const ProgressStatusComponent = () => {
  return (
    <View
      style={{
        backgroundColor: WHITE,
        paddingHorizontal: HS_15,
        width: '100%',
        borderRadius: MS_20,
        paddingTop: VS_20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <BaseText textType="bold">Files</BaseText>
        </View>
        <View style={{flexDirection: 'row', gap: HS_10}}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#d1d1d3',
              borderRadius: MS_15,
              paddingHorizontal: HS_10,
              justifyContent: 'center',
            }}>
            <BaseText color="#afafb1" fontSize={MS_12}>
              This Month
            </BaseText>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#d1d1d3',
              flexShrink: 1,
              borderRadius: MS_15,
              padding: HS_5,
              justifyContent: 'center',
            }}>
            <Dots_Icon
              name="dots-three-horizontal"
              color={'#afafb1'}
              size={MS_15}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: WHITE,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          width: 300,
          height: 150,
        }}>
        <AnimatedCircularProgress
          lineCap="round"
          size={250}
          width={15}
          arcSweepAngle={180}
          fill={60}
          rotation={270}
          tintColor={Colors.primary}
          backgroundColor={Colors.secondary}
          style={{position: 'absolute', top: VS_20}}
        />
        <View style={{paddingTop: VS_20}}>
          <View style={{alignItems: 'center'}}>
            <BaseText style={{fontWeight: '800'}} fontSize={MS_30}>
              146
            </BaseText>
            <BaseText color={TextColor.GRAY}>Total files</BaseText>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: VS_40,
        }}>
        <View style={{flexDirection: 'row', gap: HS_5}}>
          <View
            style={{
              width: 5,
              height: 25,
              backgroundColor: Colors.primary,
              borderRadius: 10,
            }}
          />
          <View>
            <BaseText>Pending Files</BaseText>
            <BaseText fontSize={MS_30}>100</BaseText>
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: HS_5}}>
          <View>
            <BaseText>Pending Files</BaseText>
            <BaseText fontSize={MS_30} style={{textAlign: 'right'}}>
              100
            </BaseText>
          </View>
          <View
            style={{
              width: 5,
              height: 25,
              backgroundColor: Colors.secondary,
              borderRadius: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ProgressStatusComponent;
