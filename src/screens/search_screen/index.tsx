// import {View, Text, Button, Modal, StyleSheet, Pressable} from 'react-native';
// import React, {useState} from 'react';
// import {SafeAreaView} from '@gluestack-ui/themed';
import {SafeAreaView} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {StyleSheet, Dimensions, View, Button} from 'react-native';
const SearchScreen = () => {
  // const [modalVisible, setModalVisible] = useState(false);
  // const [selectedGender, setSelectedGender] = useState('Male');
  // const [isSelectMale, setSelectedMale] = useState(true);

  // const handleGenderSelect = () => {
  //   if (isSelectMale) {
  //     setSelectedGender('Male');
  //   } else {
  //     setSelectedGender('Female');
  //   }
  //   setModalVisible(false);
  // };
  interface PDFSource {
    uri: string;
    cache: boolean;
  }

  const source: PDFSource = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache: true,
  };

  const handleLoadComplete = (numberOfPages: number, filePath?: string) => {
    console.log(`Number of pages: ${numberOfPages}`);
  };

  const handlePageChanged = (page: number, numberOfPages: number) => {
    console.log(`Current page: ${page}`);
  };

  const handleError = (error: Error) => {
    console.error(error);
  };

  const handlePressLink = (uri: string) => {
    console.log(`Link pressed: ${uri}`);
  };
  const pdf = async () => {
    const page1 = PDFPage.create()
      .setMediaBox(200, 200)
      .drawText('You can add text and rectangles to the PDF!', {
        x: 5,
        y: 235,
        color: '#007386',
      })
      .drawRectangle({
        x: 25,
        y: 25,
        width: 150,
        height: 150,
        color: '#FF99CC',
      })
      .drawRectangle({
        x: 75,
        y: 75,
        width: 50,
        height: 50,
        color: '#99FFCC',
      });

    // Create a PDF page with text and images
    const jpgPath = 'sdlkfdslk;f'; // Path to a JPG image on the file system...
    const pngPath = 'dsfsldkf;lk'; // Path to a PNG image on the file system...
    const page2 = PDFPage.create()
      .setMediaBox(250, 250)
      .drawText('You can add JPG images too!')
      .drawImage(jpgPath, 'jpg', {
        x: 5,
        y: 125,
        width: 200,
        height: 100,
      })
      .drawImage(pngPath, 'png', {
        x: 5,
        y: 25,
        width: 200,
        height: 100,
      });

    // Create a new PDF in your app's private Documents directory
    const docsDir = await PDFLib.getDocumentsDirectory();
    const pdfPath = `${docsDir}/sample.pdf`;
    PDFDocument.create(pdfPath)
      .addPages(page1, page2)
      .write() // Returns a promise that resolves with the PDF's path
      .then((path: string) => {
        console.log('PDF created at: ' + path);
        // Do stuff with your shiny new PDF!
      })
      .catch((error: string) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView flex={1} justifyContent="center" alignItems="center">
      {/* <View style={styles.container}>
        <Pdf
          source={source}
          onLoadComplete={handleLoadComplete}
          onPageChanged={handlePageChanged}
          // onError={handleError}
          onPressLink={handlePressLink}
          style={styles.pdf}
        />
      </View> */}
      <Button title="Press" onPress={pdf} />
    </SafeAreaView>
    //   <View style={styles.container}>
    //     {selectedGender && (
    //       <Text style={styles.selectedText}>
    //         Selected Gender: {selectedGender}
    //       </Text>
    //     )}

    //     <Modal
    //       transparent={true}
    //       animationType="fade"
    //       visible={modalVisible}
    //       onRequestClose={() => setModalVisible(false)}>
    //       <View style={styles.modalContainer}>
    //         <View style={styles.modalView}>
    //           <Text style={styles.modalTitle}>Gender Selection</Text>
    //           <Pressable
    //             style={[
    //               styles.optionButton,
    //               {
    //                 borderWidth: 2,
    //                 borderColor: isSelectMale ? 'blue' : '#DDDDDD',
    //               },
    //             ]}
    //             onPress={() => setSelectedMale(true)}>
    //             <Text style={styles.optionText}>Male</Text>
    //           </Pressable>
    //           <Pressable
    //             style={[
    //               styles.optionButton,
    //               {
    //                 borderWidth: 2,
    //                 borderColor: isSelectMale ? '#DDDDDD' : 'blue',
    //               },
    //             ]}
    //             onPress={() => setSelectedMale(false)}>
    //             <Text style={styles.optionText}>Female</Text>
    //           </Pressable>
    //           <Button title="Done" onPress={handleGenderSelect} />
    //         </View>
    //       </View>
    //     </Modal>
    //   </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
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
