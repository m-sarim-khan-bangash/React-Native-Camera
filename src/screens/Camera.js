import React, {useRef, useEffect, useState} from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';

const Camera = ({setOpen, setUri}) => {
  const camera = useRef(null);
  const myRef = useRef(null);
  const [flip, setFlip] = useState(false);

  const TakePicture = async () => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.current.takePictureAsync(options);
    setUri(data.uri);
    setOpen(false);
    console.log('Picture =>', data.uri);
  };
  //   useEffect(() => {
  //     console.log('my ref', myRef.current);
  //   }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <Text ref={myRef}>Hello</Text> */}
      <RNCamera
        useNativeZoom={true}
        // zoom={0.8}
        type={
          flip ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front
        }
        // flashMode={RNCamera.Constants.FlashMode.on}
        ref={camera}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={TakePicture}>
          {/* <Text style={{fontSize: 18}}>Take Picture</Text> */}
          <Image
            source={{
              uri: 'https://freepngimg.com/thumb/android/60611-lens-camera-black-circular-free-download-png-hd.png',
            }}
            style={{width: 90, height: 90, marginTop: 450}}
          />
        </TouchableOpacity>
      </RNCamera>

      <TouchableOpacity onPress={() => setFlip(!flip)}>
        {/* <Text style={{fontSize: 18}}>Take Picture</Text> */}
        <Image
          source={{
            uri: 'https://icon-library.com/images/flip-camera-icon/flip-camera-icon-14.jpg',
          }}
          style={{width: 90, height: 90}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Camera;
