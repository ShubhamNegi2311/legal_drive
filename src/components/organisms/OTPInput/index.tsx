/* REACT  */
import React, {useState, useRef, useEffect} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {BLACK, DIVIDER_COLOR, WHITE} from 'styles/colors';
import { HS_40, VS_20, VS_30 } from 'styles/mixins';

/* STYLE */

const OTPInput = ({onChange = (value: string) => {}}) => {
  const inputRef = useRef<TextInput[]>([]);
  const [state, setState] = useState<string[]>([]);
  const [indexState, setIndexState] = useState(0);
  const defaultValue = '';
  const handleChange = (e: string, index: number) => {
    if (e === ' ') {
      console.log('avoid space');
    } else if (e === '') {
      const copyState = [...state];
      copyState[index] = e;
      setState(copyState);
      if (copyState.join('').length > 0 && index !== 0) {
        setIndexState(indexState - 1);
        inputRef.current[indexState - 1].focus();
      }
    } else {
      const copyState = [...state];
      copyState[index] = e;
      setState(copyState);
      if (copyState.join('').length < 4 && index !== 4 - 1) {
        setIndexState(indexState + 1);
        inputRef.current[indexState + 1].focus();
      }
    }
  };

  const filterData = () => {
    if (defaultValue.length === 4) {
      const copyState = defaultValue.split('');
      setState(copyState);
      setIndexState(defaultValue.length - 1);
    } else {
      const copyState: string[] = [];
      [...Array(4).keys()].map((data, index) => {
        copyState.push('');
      });
      setState(copyState);
    }
  };

  useEffect(() => {
    if (state.length === 0) {
      filterData();
    }
    if (state.length == 4) {
      onChange(state.join(''));
    }
  }, [state]);

  return (
    <View style={styles.main}>
      <View style={styles.textInputView}>
        {state.map((data, index) => (
          <View key={index}>
            <TextInput
              autoCorrect={false}
              autoFocus={index === indexState}
              maxLength={1}
              value={data}
              ref={ref => {
                if (ref != null) {
                  inputRef.current.push(ref);
                }
              }}
              onChangeText={e => {
                handleChange(e, index);
              }}
              onFocus={() => {
                setIndexState(index);
              }}
              selectionColor={'#4C5457'}
              keyboardType={'number-pad'}
              secureTextEntry={false}
              style={styles.input}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: VS_20,
  },
  input: {
    height: 50,
    width: 50,
    borderRadius: 4,
    textAlign: 'center',
    color: BLACK,
    borderColor: DIVIDER_COLOR,
    borderWidth: 2,
    backgroundColor: WHITE,
    marginHorizontal: 5,
  },
});

export default OTPInput;
