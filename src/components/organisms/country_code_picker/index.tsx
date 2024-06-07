import React from 'react';
import {
  ChevronDownIcon,
  FlatList,
  Icon,
  Pressable,
  Text,
  View,
} from '@gluestack-ui/themed';
import {BACKGROUND, PRIMARY, WHITE} from 'styles/colors';
import {HS_10, HS_5, HS_70, MS_16, VS_10} from 'styles/mixins';
import {CountryInterface, countries} from './countryCodeData';
import {Modal, StyleSheet} from 'react-native';
import SpaceView from 'components/atoms/space_view';

const CounterCodePicker = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [countryCode, setCountryCode] = React.useState('+91');
  const [countryFlag, setCountryFlag] = React.useState('🇮🇳');
  const [countryCodeData, setCountryCodeData] =
    React.useState<CountryInterface[]>(countries);
  const searchByCountryName = (searchText: string) => {
    let filteredJson = countryCodeData.filter(item => {
      const itemData = item.name.toUpperCase();
      const queryText = searchText?.toUpperCase();
      return itemData?.includes(queryText);
    });

    setCountryCodeData([...filteredJson]);
  };
  const selectCodeHandler = (item: CountryInterface) => {
    setCountryCode(item.dial_code);
    setCountryFlag(item.flag);
    setShowModal(false);
  };
  return (
    <Pressable
      flexDirection="row"
      paddingHorizontal={HS_10}
      paddingVertical={VS_10}
      borderRadius={5}
      backgroundColor={WHITE}
      borderWidth={2}
      borderColor={PRIMARY}
      justifyContent="center"
      alignItems="center"
      gap={HS_5}
      onPress={() => setShowModal(true)}>
      <Text fontSize={MS_16}>{countryFlag}</Text>
      <Text fontSize={MS_16}>{countryCode}</Text>
      <Icon as={ChevronDownIcon} w="$4" h="$4" />
      <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}>
        <View style={styles.centeredView}>
          <View>
            <Pressable
              onPress={() => setShowModal(false)}
              backgroundColor="red">
              <Icon as={ChevronDownIcon} h="$4" />
            </Pressable>
          </View>
          <View>
            <FlatList
              data={countryCodeData}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              ListFooterComponent={<SpaceView height={HS_70} />}
              renderItem={({item}: {item: CountryInterface}) => {
                return (
                  <Pressable
                    onPress={() => selectCodeHandler(item)}
                    flexDirection="row"
                    margin={5}
                    padding={10}
                    backgroundColor={WHITE}>
                    <Text> {item.dial_code}</Text>
                    <Text> {item.flag}</Text>
                    <Text> {item.name}</Text>
                  </Pressable>
                );
              }}
            />
          </View>
        </View>
      </Modal>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default CounterCodePicker;
