
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (username.trim().length === 0 || password.trim().length === 0) {
      setMessage('❌ Please enter both username and password.');
    } else if (username === 'admin' && password === '1234') {
      setMessage('✅ Login successful!');
    } else {
      setMessage('❌ Invalid credentials. Try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, please log in</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Button title="Login" onPress={handleLogin} />

        <Text
          style={[styles.message,message.includes('✅') ? styles.success : styles.error,]}>
          {message}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'lightgrey',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  message: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  success: {
    color: 'green',
  },
  error: {
    color: 'red',
  },
});
