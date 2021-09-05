import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Camera from './src/screens/Camera';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const [open, setOpen] = useState(false);
  const [uri, setUri] = useState('');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {uri ? (
        <Image source={{uri: uri}} style={{height: 300, width: 300}} />
      ) : null}
      {open ? <Camera setOpen={setOpen} setUri={setUri} /> : null}
      <TouchableOpacity onPress={() => setOpen(true)} style={{padding: 10}}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Open Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          let options = {mediaType: 'photo'};
          await launchCamera(options, data => {
            console.log('data=>', data.assets[0].uri);
          });
        }}
        style={{padding: 10}}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Open Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
