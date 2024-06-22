// import React from "react";
// import { Modal, Text, View,TouchableOpacity } from "react-native";
// import { useAuth } from "../../Hooks/useAuth";
// import {styles} from './style'

// export function ModalComponent(){

//     const {modalAberto, setModalAberto} = useAuth();

//     return(
//         <Modal transparent={true}  visible={modalAberto} animationType="slide">
//             <View style={styles.containerModal}>
//                 <View style={styles.container}>
//                     <Text>Credenciais inválidas!</Text>
//                 </View>
//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={() => setModalAberto(modalAberto)}>
//                     <Text  style={styles.titleButton}>Fechar</Text>
//                 </TouchableOpacity>
//             </View>
//         {/* </Modal> */}
//     )
// }