import * as React from 'react';
import { StyleSheet, View, Button, Text, TextInput, TouchableOpacity, value } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {onChangeText} from 'react-native';
import { ImageBackground, Image, AppRegistry} from 'react-native';



function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#DEB887' }}>
          
      <Text style={style.header}>STOCK BAJU</Text>
      <Text style={style.title}>Silahkan Login</Text>
      
      <Text>Email   <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 3, marginBottom: 5 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder = "Masukkan email Anda..."
      ></TextInput></Text>
      
      <Text>Password  <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 3, marginBottom: 5 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder = "Masukkan password Anda..."
      ></TextInput></Text>

      <Button style ={{marginTop:20}}
        title="Login"
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Home',
              params: {
                user: 'Anggun',
              },
            })
          )
        }
      />

      <Button style={{marginTop:20}}
        title="Sign Up"
        onPress={() => navigation.dispatch(CommonActions.goBack())}
      />

     
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E9967A' }}>
      <Text style={style.homescreen}>Halaman Utama</Text>

      <Button style={{marginTop: 40}}
        title="Daftar Baju"
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Profile',
              params: {
                user: 'Anggun',
              },
            })
          )
        }
      />
    
      <Button style={style.button}
        title="Log out"
        onPress={() => navigation.dispatch(CommonActions.goBack())}
      />

    
    </View>
  );
}

function HalamanPeminjamScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#A9A9A9' }}>

      <Text style={style.title}>Halaman Daftar Peminjam</Text>

    <text> Nama Peminjam <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 3, marginBottom: 5 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder = "..........."
      ></TextInput></text>

    <text> Tanggal Peminjaman <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 3, marginBottom: 5 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder = "..........."
      ></TextInput></text>

    <text> Tanggal Pengembalian <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 3, marginBottom: 5 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder = "..........."
      ></TextInput></text>

    <text> No.Telp <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 3, marginBottom: 5 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder = "..........."
      ></TextInput></text>

    <text> Alamat <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 3, marginBottom: 5 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder = "..........."
      ></TextInput></text>

      <Button style={style.button}
        title="Submit"
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Profile',
              params: {
                user: 'Anggun',
              },
            })
          )
        }
      />
      <Button style={style.button}
        title="Kembali"
        onPress={() => navigation.dispatch(CommonActions.goBack())}
      />
    </View>
  );
}

function DaftarBukuScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#7B68EE' }}>
     
      <Text style={style.title}>
        STOCK BAJU
      </Text>
      <Text>
      Merk Baju  :
      </Text>

      <Text>
      Jenis Baju  :
      </Text>

      <Text>
      Ukuran Baju  :
      </Text>

      <Text>
      Harga Baju :
      </Text>
  
      <Button
        title="Kembali"
        onPress={() =>
          navigation.dispatch({
            ...CommonActions.goBack(),
            source: route.key,
            target: route?.params?.key,
          })
        }
      />
    </View>
  );
}

const Stack = createStackNavigator();
const UselessTextInput = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
}

const image = { uri: "https://reactjs.org/logo-og.png" };

const style = StyleSheet.create ({


  header: {
    fontSize: 25,
    marginBottom:40,
    color: ''
  },

  title: {
    fontSize: 24,
    color : '#A52A2A',
    marginBottom: 20,
  },

  homescreen: {
    fontSize: 25,
    color: 'brown',
    marginBottom: 40
  },
  
  button: {
    marginTop: 20,
  },

  

});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={DaftarBukuScreen} />
        <Stack.Screen name="Detail" component={HalamanPeminjamScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
