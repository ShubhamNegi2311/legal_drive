import {View, Text, Button, Modal, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';

const SearchScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState('Male');
  const [isSelectMale, setSelectedMale] = useState(true);

  const handleGenderSelect = () => {
    if (isSelectMale) {
      setSelectedGender('Male');
    } else {
      setSelectedGender('Female');
    }
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Button title="Select Gender" onPress={() => setModalVisible(true)} />
      {selectedGender && (
        <Text style={styles.selectedText}>
          Selected Gender: {selectedGender}
        </Text>
      )}

      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Gender Selection</Text>
            <Pressable
              style={[
                styles.optionButton,
                {
                  borderWidth: 2,
                  borderColor: isSelectMale ? 'blue' : '#DDDDDD',
                },
              ]}
              onPress={() => setSelectedMale(true)}>
              <Text style={styles.optionText}>Male</Text>
            </Pressable>
            <Pressable
              style={[
                styles.optionButton,
                {
                  borderWidth: 2,
                  borderColor: isSelectMale ? '#DDDDDD' : 'blue',
                },
              ]}
              onPress={() => setSelectedMale(false)}>
              <Text style={styles.optionText}>Female</Text>
            </Pressable>
            <Button title="Done" onPress={handleGenderSelect} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  selectedText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  optionButton: {
    padding: 10,
    marginVertical: 5,
    width: '100%',
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    borderRadius: 5,
  },
  optionText: {
    fontSize: 18,
  },
});
export default SearchScreen;
