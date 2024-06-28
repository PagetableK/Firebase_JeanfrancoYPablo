import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { auth, createUserWithEmailAndPassword } from '../config/firebase';

const Registro = ({ navigation }) => {

    const [correo, setCorreo] = useState("");
    const [contra, setContra] = useState("");

    const handleRegistro = () => {
        if (correo.trim() == "" || contra.trim() == "") {
            alert("Asegúrese de ingresar todos los campos");
        } else {
            createUserWithEmailAndPassword(auth, correo, contra)
                .then((userCredential) => {
                    // Signed in 
                    //const user = userCredential.user;
                    alert("Ya te registraste, ve a iniciar sesión");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registrese ingresando los campos</Text>
            <TextInput
                placeholder='Correo'
                value={correo}
                onChangeText={setCorreo}
                style={styles.input} />
            <TextInput
                placeholder='Contraseña'
                value={contra}
                onChangeText={setContra}
                style={styles.input} />
            <TouchableOpacity
                onPress={handleRegistro}
                style={styles.Button}>
                <Text style={styles.ButtonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
}


// Exporta el componente Registro como predeterminado
export default Registro;

// Estilos para el componente Registro
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFE',
        justifyContent: 'center',
        padding: 20,
        gap: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    Subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#ff9800'
    },
    Button: {
        backgroundColor: '#0288d1',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 50,
        paddingVertical: 20,
    },
    ButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    list: {
        flexGrow: 1,
    },
});