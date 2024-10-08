import React, { useState, useContext, createContext } from 'react';
import { View, Text, Button, StyleSheet, Switch, useColorScheme } from 'react-native';

const ThemeContext = createContext();


const ButtonsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const theme = isDarkMode ? darkTheme : lightTheme; 

  return (
    <ThemeContext.Provider value={theme}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.title, { color: theme.text }]}>Tema {isDarkMode ? 'Oscuro' : 'Claro'}</Text>
        
        <ButtonGroup />

        <View style={styles.sliderContainer}>
          <Text style={[styles.text, { color: theme.text }]}>Cambiar Tema</Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
      </View>
    </ThemeContext.Provider>
  );
};

const ButtonGroup = () => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.buttonGroup}>
      <View style={styles.buttonContainer}>
        <Button title="Button 1" onPress={() => {}} color={theme.button} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Button 2" onPress={() => {}} color={theme.button} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Button 3" onPress={() => {}} color={theme.button} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Button 4" onPress={() => {}} color={theme.button} />
      </View>
    </View>
  );
};


const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  button: '#6200ea',
};

const darkTheme = {
  background: '#000000',
  text: '#ffffff',
  button: '#bb86fc',
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  buttonContainer: {
    margin: 10,
    width: '40%',
  },
  sliderContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ButtonsScreen;
