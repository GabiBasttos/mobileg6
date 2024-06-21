import React from "react";
import { TextInput } from "react-native";
import { styles } from "./style";
type PropsComponent = {
  recebeplaceholder: string;
  recebevalue: string;
  recebefuncao: (value: string) => void;
  recebetipoinput: boolean;
  onChangeText: (value: string) => void;
  secureTextEntry?: boolean;
};

export function TextInputComponent({
  recebefuncao,
  recebeplaceholder,
  recebetipoinput,
  recebevalue,
}: PropsComponent) {
  return (
    <TextInput
      style={styles.styleInput}
      onChangeText={recebefuncao}
      value={recebevalue}
      placeholder={recebeplaceholder}
      secureTextEntry={recebetipoinput}
    />
  );
}
