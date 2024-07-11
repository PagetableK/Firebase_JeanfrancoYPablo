import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { auth, signInWithEmailAndPassword } from '../config/firebase';

const Login = ({ navigation }) => {

    const [correo, setCorreo] = useState("");
    const [contra, setContra] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged(user =>{
            if(user){
                navigation.navigate("Home")
            }
        })

    }, [])

    const handleLogin = () => {
            signInWithEmailAndPassword(auth, correo, contra)
                .then((userCredential) => {
                    const user = userCredential.user;
                    goToHome();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error.message);
                    console.log(error.code);
                    alert("Credenciales incorrectas");
                    // ..
                });
        
    }
    
    // Función para navegar a la pantalla 'Add'
    const goToRegistro = () => {
        navigation.navigate('Registro');
    }

    const goToHome = () => {
        navigation.navigate('Home')
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.title}>Inicio de Sesión</Text>
            <Text style={styles.title}>Ingrese sus credenciales</Text>
            <TextInput
                placeholder='Correo'
                value={correo}
                onChangeText={text => setCorreo(text)}
                style={styles.input} />
            <TextInput
                placeholder='Contraseña'
                value={contra}
                onChangeText={text => setContra(text)}
                style={styles.input} />
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.Button}>
                <Text style={styles.ButtonText}>Iniciar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={goToRegistro}
                style={styles.Button}>
                <Text style={styles.ButtonText}>Registrarse</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}


// Exporta el componente Registro como predeterminado
export default Login;

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
    input: {

    }
});