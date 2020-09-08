import React, { useState } from 'react';
import { View, TextInput as RNTextInput } from 'react-native';
import { Feather as Icon} from '@expo/vector-icons';

interface TextInputProps {
  placeholder: string;
  icon: string;
  validator: (input: string) => boolean;
}

const Valid = true;
const Invalid = false;
const Pristine = null;
type inputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon }: TextInputProps) => {
  const [valid, setValid] = useState<null | boolean>(Pristine)
  return (
    <View>
      <Icon name={icon} />
      <RNTextInput />
    </View>
  )
}

export default TextInput;
