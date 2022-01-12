import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import firestore from '@react-native-firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MapView,{Marker} from 'react-native-maps';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#0A44D9'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Registrasi Akun"
          component={RegistrationScreen}
          options={{
            headerStyle: {
              backgroundColor: '#0A44D9'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Front Page"
          component={HomeTab}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#0A44D9'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{
            headerStyle: {
              backgroundColor: '#0A44D9'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Hasil Pencarian"
          component={SearchResultScreen}
          options={{
            headerStyle: {
              backgroundColor: '#0A44D9'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Rincian Hotel"
          component={BookingScreen}
          options={{
            headerStyle: {
              backgroundColor: '#0A44D9'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{
            headerStyle: {
              backgroundColor: '#0A44D9'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            title: "Pembayaran",
            headerStyle: {
              backgroundColor: '#0A44D9'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Payment Success"
          component={PaymentSuccessScreen}
          options={{
            title: "Pembayaran",
            headerStyle: {
              backgroundColor: '#0A44D9'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Payment Detail"
          component={PaymentDetailScreen}
          options={{
            title: "Rincian Pesanan",
            headerStyle: {
              backgroundColor: '#0A44D9'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Proof of Payment"
          component={ProofofPaymentScreen}
          options={{
            title: "Rincian Pesanan",
            headerStyle: {
              backgroundColor: '#0A44D9'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Valid Proof of Payment"
          component={ValidProofofPaymentScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#0A44D9'
            },
            headerTintColor: 'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTab() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: '#C3C3C3' }}
      labeled={false}
    >
      <Tab.Screen
        name = "Layar Utama"
        component = {HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name = "Transaction History"
        component = {TransactionHistoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="swap-vertical-bold" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name = "Profile"
        component = {ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function LoginScreen({navigation}) {
  
  // Filter email
  const findEmail = () => {
    firestore()
    .collection('Users')
    // Filter
    .where('email', '==', email)
    .get()
    .then(() => {
      console.log('User found!');
    })
  }

  const [email, setEmail]       = React.useState(''); 
  
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./icon/Logo.png')} />
      </View>
      <View style={{ flex: 1 }}>
        <TextInput
          style={{ borderWidth: 1, borderColor: '#C3C3C3', borderRadius: 5, paddingLeft: 20, marginBottom: 25, marginHorizontal: 24  }}
          placeholder = "Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder = "Password"
          style={{ borderWidth: 1, borderColor: '#C3C3C3', borderRadius: 5, paddingLeft: 20, marginBottom: 25, marginHorizontal: 24  }}
        />
        <View style={{ marginHorizontal: 100, marginBottom: 16 }}>
          <Button
            onPress={() => {
              findEmail()
              navigation.navigate("Front Page")
            }}
            title = "Login"
            color = "#5A88FF"
          />
        </View>
        <View style={{ marginHorizontal: 50 }}>
          <Button
            onPress={() => {
              
              navigation.navigate("Registrasi Akun")
            }}
            title = "Registrasi"
            color = "#5A88FF"
          />
        </View>
      </View>
    </View>
  );
}

function RegistrationScreen({navigation}){

  // Input data ke firebase
  const createUser = () => {
    firestore()
    .collection('Users')
    .add({
      email: email,
      password: password,
      nama: nama,
      nohp: nohp,
    })
    .then(() => {
      console.log('User added!');
    });
  }

  // Deklarasi variable users
  const [email, setEmail]       = React.useState(''); 
  const [password, setPassword] = React.useState(''); 
  const [nama, setNama]         = React.useState(''); 
  const [nohp, setNohp]          = React.useState(''); 
  
  return (
    <View style={{ flex: 1, marginHorizontal: 30, justifyContent: 'center' }}>
      <TextInput
        style = {{ borderWidth: 1, borderColor: '#C3C3C3', borderRadius: 5, paddingLeft: 20, marginBottom: 25 }}
        placeholder = "Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style = {{ borderWidth: 1, borderColor: '#C3C3C3', borderRadius: 5, paddingLeft: 20, marginBottom: 25 }}
        placeholder = "Kata Sandi"
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style = {{ borderWidth: 1, borderColor: '#C3C3C3', borderRadius: 5, paddingLeft: 20, marginBottom: 25 }}
        placeholder = "Nama"
        onChangeText={(text) => setNama(text)}
      />
      <TextInput
        style = {{ borderWidth: 1, borderColor: '#C3C3C3', borderRadius: 5, paddingLeft: 20, marginBottom: 25 }}
        placeholder = "No Handphone"
        onChangeText={(text) => setNohp(text)}
      />
      <Button
        onPress={() => {
          createUser()
          navigation.navigate("Login")
        }}
        title = "SUBMIT"
        color = "#5A88FF"
      />
    </View>
  );
}

function HomeScreen({navigation}){
  
  const Lokasi = [
    { label: 'Bandung',     value: 'Bandung' },
    { label: 'Jakarta',     value: 'Jakarta' },
    { label: 'Tangerang',   value: 'Tangerang' },
    { label: 'Bogor',       value: 'Bogor' },
    { label: 'Karawang',    value: 'Karawang' },
    { label: 'Purwakarta',  value: 'Purwakarta' },
    { label: 'Jogjakarta',  value: 'Jogjakarta' },
    { label: 'Cirebon',     value: 'Cirebon' },
  ];

  const TipeKamar = [
    { label: 'Single', value: 'single' },
    { label: 'Double', value: 'Double' },
    { label: 'Family', value: 'Family' },
  ];

  const [valueLokasi, setValueLokasi] = useState(null);
  const [valueKamar, setValueKamar] = useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  }

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  }
  
  return (
    <View style={{flex: 1, marginHorizontal: 25, marginTop: 50 }}>
      <Dropdown
        style={{ margin: 16, height: 50, borderBottomColor: 'gray', borderBottomWidth: 0.5 }}
        placeholderStyle={{ fontSize: 16 }}
        selectedTextStyle={{ fontSize: 16 }}
        inputSearchStyle={{ height: 40, fontSize: 16 }}
        iconStyle={{ width: 20, height: 20 }}
        data={Lokasi}
        search
        maxHeight={300}
        labelField='label'
        valueField='value'
        placeholder='Lokasi Hotel?'
        searchPlaceholder='Search...'
        value={valueLokasi}
        onChange={item => {
          setValueLokasi(item.value);
        }}
        renderLeftIcon={() => (
          <MaterialCommunityIcons style={{ marginRight: 10 }} name='home-search' color='black' size={20} />
        )}
      />
      <Text
          style = {{ textDecorationLine: 'underline', fontSize: 16, marginLeft: 15 }}
          onPress={() => {
            navigation.navigate("Map")
          }}
        >
          Maps
        </Text>
      <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 10 }}>
        <MaterialCommunityIcons style={{ marginRight: 10 }} name='calendar' color='black' size={20} />
        <Text
          style = {{ textDecorationLine: 'underline', fontSize: 16 }}
          onPress={showDatePicker}
        >
          Waktu Pemesanan?
        </Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <Dropdown
        style={{ margin: 16, height: 50, borderBottomColor: 'gray', borderBottomWidth: 0.5 }}
        placeholderStyle={{ fontSize: 16 }}
        selectedTextStyle={{ fontSize: 16 }}
        inputSearchStyle={{ height: 40, fontSize: 16 }}
        iconStyle={{ width: 20, height: 20 }}
        data={TipeKamar}
        search
        maxHeight={300}
        labelField='label'
        valueField='value'
        placeholder='Tipe Kamar?'
        searchPlaceholder='Search...'
        value={valueKamar}
        onChange={item => {
          setValueKamar(item.value);
        }}
        renderLeftIcon={() => (
          <MaterialCommunityIcons style={{ marginRight: 10 }} name='bed' color='black' size={20} />
        )}
      />
      <View style={{ marginTop: 50, marginHorizontal: 100 }}>
        <Button
          onPress={() => {
            navigation.navigate("Hasil Pencarian")
          }}
          title = "Cari"
          color = "#5A88FF"
        />
      </View>
    </View>
  );
}

function MapScreen(){
  
  const styles = StyleSheet.create({
    wrapper:{
      ...StyleSheet.absoluteFillObject
    },
    map:{
      ...StyleSheet.absoluteFillObject
    }
  })  
  
  return(
    <View style={styles.wrapper}>
      <MapView style={styles.map} initialRegion={{
        latitude: -6.973414739115744,
        longitude: 107.63153752406423,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
        }}>
          <Marker coordinate={{latitude:-6.975566613012193, longitude:107.62960447751459}} />
      </MapView>
    </View>
  )
}

function SearchResultScreen({navigation}){
  
  useEffect(() => {
    getHotels();
  })

  const [hotels, setHotels] = React.useState([]);

  const getHotels = () => {
    firestore().collection('Hotels').get().then(querySnapshot => {
      const hotels = [];
      querySnapshot.forEach(doc => {
        // console.log(doc.id);
        // Data tiap dokumen, dimasukkan ke array state lalu dimasukkan ke data flatlist
        hotels.push({
          ...doc.data(),
          key: doc.id,
        });
      });
      setHotels(hotels);
    });
  }

  return(
    <View style={{ flex: 1 }}>
      <FlatList
        data={hotels}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              navigation.navigate("Rincian Hotel")
            }}
          >
          <View style={{ backgroundColor: 'white', elevation: 5, flexDirection: 'row', marginHorizontal: 10, marginTop: 30 }}>
            <Image source={require('./gambar/hotelprambors.png')} />
            <View style={{ flex: 1, padding: 5 }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 18 }}>{item.Nama}</Text>
                <MaterialCommunityIcons name = 'heart-outline' size={18} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'map-marker-radius-outline' size={18} color='black' />
                <Text style={{ color: 'black', fontSize: 14 }}>{item.Lokasi}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <Text style={{ color: 'black', fontSize: 16, marginHorizontal: 5 }}>{item.Bintang} Stars</Text>
                <MaterialCommunityIcons name = 'thumb-up-outline' size={24} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>{item.Rating}</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>{item.Harga}</Text>
                <Text style={{ color: 'black', fontSize: 12 }}>Includes Taxes</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        )}
      />
    </View>
  )
}

function BookingScreen({navigation}){
  return(
    <View style={{flex: 1}}>
      <View style={{ marginHorizontal: 40, marginTop: 10 }}>
      <Image
        style={{ alignSelf: 'center' }}
        source={require('./gambar/rincianhotel.png')}
      />
      <Text style={{ color: 'black', fontSize: 18 }}>RedHouse Sukabirus</Text>
      <View style={{ flexDirection: 'row' }}>
        <MaterialCommunityIcons name = 'map-marker-radius-outline' size={24} color='black' />
        <Text style={{ color: 'black', fontSize: 14 }}>Bandung, Jawa Barat</Text>
      </View>
      <Text style={{ color: 'black', fontSize: 14, marginTop: 5 }}>Rating</Text>
      <View style={{ flexDirection: 'row' }}>
        <MaterialCommunityIcons name = 'star' size={24} color='black' />
        <MaterialCommunityIcons name = 'star' size={24} color='black' />
        <MaterialCommunityIcons name = 'star' size={24} color='black' />
        <MaterialCommunityIcons name = 'star-half' size={24} color='black' />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ color: 'black', fontSize: 14 }}>Fasilitas : </Text>
        <View>
          <Text style={{ color: 'black', fontSize: 14 }}>- Kasur ukuran besar</Text>
          <Text style={{ color: 'black', fontSize: 14 }}>- Shower</Text>
          <Text style={{ color: 'black', fontSize: 14 }}>- AC</Text>
          <Text style={{ color: 'black', fontSize: 14 }}>- TV</Text>
          <Text style={{ color: 'black', fontSize: 14 }}>- Kulkas mini bar </Text>
        </View>
      </View>
      </View>
      <View style={{ marginTop: 50, marginHorizontal: 75 }}>
        <Button
          onPress={() => {
            navigation.navigate("Checkout")
          }}
          title = "Lanjutkan ke pembayaran"
          color = "#5A88FF"
        />
      </View>
    </View>
  )
}

function CheckoutScreen({navigation}){
  return(
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 10, flexDirection: 'row', marginHorizontal: 40, alignItems: 'center' }}>
        <Image
          source={require('./gambar/hoteltherich.png')}
          style={{ width: 125, height: 100 }}
        />
        <View style={{ paddingLeft: 15 }}>
          <Text style={{ fontSize: 14, color: 'black' }}>RedHouse Sukabirus</Text>
          <Text style={{ fontSize: 14, color: 'black' }}>RP. 1.000.000</Text>
          <Text style={{ fontSize: 14, color: 'black' }}>1 Malam</Text>
          <Text style={{ fontSize: 14, color: 'black' }}>Standard Double Room</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 40, marginTop: 30 }}>
        <Text style={{ fontSize: 14, color: 'black' }}>Rincian saat ini :</Text>
        <Text style={{ fontSize: 14, color: 'black' }}>1 orang</Text>
        <Text style={{ fontSize: 14, color: 'black' }}>1 hari</Text>
        <Text style={{ fontSize: 14, color: 'black' }}>1 tempat tidur</Text>
        <Text style={{ fontSize: 14, color: 'black' }}>Check-in pada 23 Maret 2022</Text>
        <Text style={{ fontSize: 14, color: 'black' }}>Check-out pada 24 Maret 2022</Text>
      </View>
      <View style={{ marginTop: 80, marginHorizontal: 110 }}>
        <Button
          onPress={() => {
            navigation.navigate("Payment")
          }}
          title = "Checkout"
          color = "#5A88FF"
        />
      </View>
    </View>
  )
}

function PaymentScreen({navigation}){
  return(
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', paddingTop: 30 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Lakukan pembayaran sebesar :</Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>1.005.000,-</Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Lakukan pembayaran via :</Text>
      </View>
      <View style={{ borderColor: 'black', borderWidth: 1, marginHorizontal: 15, marginTop: 15, flexDirection: 'row', padding: 20, alignItems: 'center' }}>
          <MaterialCommunityIcons name = 'bank' size={30} color='black' />
          <View style={{ paddingLeft: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Bank BDO</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>Virtual Account</Text>
          </View>
      </View>
      <View style={{ borderColor: 'black', borderWidth: 1, marginHorizontal: 15, marginTop: 15, flexDirection: 'row', padding: 20, alignItems: 'center' }}>
          <MaterialCommunityIcons name = 'cash' size={30} color='black' />
          <View style={{ paddingLeft: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Saldo</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>Saldo saat ini : Rp. 1.500.000</Text>
          </View>
      </View>
      <View style={{ marginTop: 30, marginHorizontal: 110 }}>
        <Button
          onPress={() => {
            navigation.navigate("Payment Success")
          }}
          title = "Bayar"
          color = "#5A88FF"
        />
      </View>
    </View>
  )
}

function PaymentSuccessScreen({navigation}){
  return(
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', paddingTop: 30 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Selamat! Pesanan anda sudah berhasil!</Text>
        <Image
          style={{ marginTop: 25, width: 248, height: 205 }}
          source={require('./icon/Logo.png')}
        />
      </View>
      <View style={{ marginTop: 30, marginHorizontal: 60 }}>
        <Button
          onPress={() => {
            navigation.navigate("Payment Detail")
          }}
          title = "Cetak Bukti Pembayaran"
          color = "#5A88FF"
        />
      </View>
      <View style={{ marginTop: 30, marginHorizontal: 75 }}>
        <Button
          onPress={() => {
            navigation.navigate("Layar Utama")
          }}
          title = "Kembali ke halaman awal"
          color = "#5A88FF"
        />
      </View>
    </View>
  )
}

function PaymentDetailScreen({navigation}){
  return(
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 10, flexDirection: 'row', marginHorizontal: 40, alignItems: 'center' }}>
        <Image
          source={require('./gambar/rincianhotel.png')}
          style={{ width: 125, height: 100 }}
        />
        <View style={{ paddingLeft: 15 }}>
          <Text style={{ fontSize: 14, color: 'black' }}>RedHouse Sukabirus</Text>
          <Text style={{ fontSize: 14, color: 'black' }}>RP. 1.000.000</Text>
          <Text style={{ fontSize: 14, color: 'black' }}>1 Malam</Text>
          <Text style={{ fontSize: 14, color: 'black' }}>Standard Double Room</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 40, marginTop: 30 }}>
        <Text style={{ fontSize: 14, color: 'black' }}>Rincian saat ini :</Text>
        <Text style={{ fontSize: 14, color: 'black' }}>1 orang</Text>
        <Text style={{ fontSize: 14, color: 'black' }}>1 hari</Text>
        <Text style={{ fontSize: 14, color: 'black' }}>1 tempat tidur</Text>
        <Text style={{ fontSize: 14, color: 'black' }}>Check-in pada 23 Maret 2022</Text>
        <Text style={{ fontSize: 14, color: 'black' }}>Check-out pada 24 Maret 2022</Text>
        <Text style={{ fontSize: 14, color: 'black', marginTop: 20 }}>Cetak bukti pembayaran</Text>
      </View>
      <View style={{ marginTop: 20, marginHorizontal: 125 }}>
        <Button
          onPress={() => {
            navigation.navigate("Proof of Payment")
          }}
          title = "Klik di sini"
          color = "#5A88FF"
        />
      </View>
    </View>
  )
}

function ProofofPaymentScreen({navigation}){
  return(
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'white', elevation: 5, marginHorizontal: 30, marginVertical: 20, paddingHorizontal: 15, paddingTop: 10 }}>
        <View style={{ flexDirection: 'row', paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: '#C3C3C3' }}>
          <Image
            source={require('./gambar/rincianhotel.png')}
            style={{ width: 125, height: 100 }}
          />
          <View style={{ marginLeft: 10, marginTop: 5 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>RedHouse Sukabirus</Text>
            <Text style={{ fontSize: 12, color: 'black' }}>Bandung, Jawa Barat</Text>
          </View>
        </View>
        <View style={{ marginTop: 15, marginHorizontal: 80, marginBottom: 7 }}>
          <Button
            onPress={() => {
              navigation.navigate("Layar Utama")
            }}
            title = "Pesan Lagi"
            color = "#5A88FF"
          />
        </View>
      </View>
      <View style={{ backgroundColor: 'white', elevation: 5, marginHorizontal: 30, marginTop: 25, paddingHorizontal: 15, paddingTop: 10, paddingBottom: 40 }}>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#C3C3C3', paddingBottom: 10, marginBottom: 5 }}>
            <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>Detail Paket</Text>
            <Text style={{ color: 'black', fontSize: 12 }}>Booking Standart Double Room</Text>
            <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>Masa Berlaku</Text>
            <Text style={{ color: 'black', fontSize: 12 }}>Berlaku untuk 23 Mar 2022 - 24 Mar 2022</Text>
        </View>
        <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>Info Pemesanan</Text>
        <Text style={{ color: 'black', fontSize: 12 }}>MR. BASTIAN</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => {
          navigation.navigate("Valid Proof of Payment")
        }}
      >
        <View style={{ backgroundColor: 'white', elevation: 5, alignItems: 'center', justifyContent: 'center', marginHorizontal: 30, marginTop: 25, height: 75 }}>
          <MaterialCommunityIcons name = 'script-text-outline' size={24} color='black' />
          <Text style={{ fontSize: 14, color: '#0A44D9', fontWeight: 'bold' }}>Bukti Pembayaran</Text>
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#0A44D9', backgroundColor: 'white', marginTop: 40, flex: 1, padding: 10 }}>
        <View>
          <Text style={{ fontSize: 12, color: 'black' }}>Total Pembayaran</Text>
          <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold' }}>Rp. 1.000.000</Text>
        </View>
        <MaterialCommunityIcons name = 'chevron-down' size={24} color='black' />
        <Text style={{ fontSize: 12, color: '#0A44D9', fontWeight: 'bold', marginLeft: 130 }}>Bagikan Bukti Pembayaran</Text>
      </View>
    </View>
  )
}

function ValidProofofPaymentScreen({navigation}){
  return(
    <View style={{ flex: 1 }}>
      <View style={{ height: 120, backgroundColor: '#DCE4F9', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', elevation: 5 }}>
        <Text style={{ fontSize: 24, color: 'black' }}>NginApp</Text>
        <Image
          source={require('./icon/Logo.png')}
          style={{ width: 62, height: 47, marginLeft: 10 }}
        />
      </View>
      <View style={{ height: 40, borderBottomWidth: 1, alignItems: 'center', justifyContent: 'center', borderBottomColor: 'grey' }}>
        <Text style={{ fontSize: 12, color: 'black' }}>Waktu: 01/11/2021 15:01:13</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', marginTop: 15 }}>Status Transaksi</Text>
          <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', marginTop: 15 }}>Metode Pembayaran</Text>
          <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', marginTop: 15 }}>Jumlah</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{ color: 'black', fontSize: 12, marginTop: 15 }}>Berhasil</Text>
          <Text style={{ color: 'black', fontSize: 12, marginTop: 15 }}>Virtual Account</Text>
          <Text style={{ color: 'black', fontSize: 12, marginTop: 15 }}>Rp. 1.000.000,00</Text>
        </View>
      </View>
      <Image
          source={require('./gambar/qrcode.png')}
          style={{ alignSelf: 'center', marginTop: 32 }}
        />
      <View style={{ marginTop: 50, marginHorizontal: 120, marginBottom: 7 }}>
        <Button
          onPress={() => {
            navigation.navigate("Layar Utama")
          }}
          title = "Selesai"
          color = "#5A88FF"
        />
      </View>
    </View>
  )
}

function TransactionHistoryScreen(){
  return (
    <View style={{ flex: 1, backgroundColor: '#F0F0F0', paddingHorizontal: 20, paddingTop: 26 }}>
      <ScrollView>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'bed' size={24} color='black' />
          <View>
            <Text style={{ color: 'black' }}>Rp. 1.000.000</Text>
            <Text style={{ color: 'black' }}>Standard Double Room</Text>
            <Text style={{ color: 'black' }}>1 orang</Text>
            <Text style={{ color: 'black' }}>Sukabirus - Jawa Barat</Text>
          </View>
          <Text style={{ color: 'black' }}>15-01-2022</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'bed' size={24} color='black' />
          <View>
            <Text style={{ color: 'black' }}>Rp. 1.000.000</Text>
            <Text style={{ color: 'black' }}>Standard Double Room</Text>
            <Text style={{ color: 'black' }}>1 orang</Text>
            <Text style={{ color: 'black' }}>Sukabirus - Jawa Barat</Text>
          </View>
          <Text style={{ color: 'black' }}>15-01-2022</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'bed' size={24} color='black' />
          <View>
            <Text style={{ color: 'black' }}>Rp. 1.000.000</Text>
            <Text style={{ color: 'black' }}>Standard Double Room</Text>
            <Text style={{ color: 'black' }}>1 orang</Text>
            <Text style={{ color: 'black' }}>Sukabirus - Jawa Barat</Text>
          </View>
          <Text style={{ color: 'black' }}>15-01-2022</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'bed' size={24} color='black' />
          <View>
            <Text style={{ color: 'black' }}>Rp. 1.000.000</Text>
            <Text style={{ color: 'black' }}>Standard Double Room</Text>
            <Text style={{ color: 'black' }}>1 orang</Text>
            <Text style={{ color: 'black' }}>Sukabirus - Jawa Barat</Text>
          </View>
          <Text style={{ color: 'black' }}>15-01-2022</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'bed' size={24} color='black' />
          <View>
            <Text style={{ color: 'black' }}>Rp. 1.000.000</Text>
            <Text style={{ color: 'black' }}>Standard Double Room</Text>
            <Text style={{ color: 'black' }}>1 orang</Text>
            <Text style={{ color: 'black' }}>Sukabirus - Jawa Barat</Text>
          </View>
          <Text style={{ color: 'black' }}>15-01-2022</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'bed' size={24} color='black' />
          <View>
            <Text style={{ color: 'black' }}>Rp. 1.000.000</Text>
            <Text style={{ color: 'black' }}>Standard Double Room</Text>
            <Text style={{ color: 'black' }}>1 orang</Text>
            <Text style={{ color: 'black' }}>Sukabirus - Jawa Barat</Text>
          </View>
          <Text style={{ color: 'black' }}>15-01-2022</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'bed' size={24} color='black' />
          <View>
            <Text style={{ color: 'black' }}>Rp. 1.000.000</Text>
            <Text style={{ color: 'black' }}>Standard Double Room</Text>
            <Text style={{ color: 'black' }}>1 orang</Text>
            <Text style={{ color: 'black' }}>Sukabirus - Jawa Barat</Text>
          </View>
          <Text style={{ color: 'black' }}>15-01-2022</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'bed' size={24} color='black' />
          <View>
            <Text style={{ color: 'black' }}>Rp. 1.000.000</Text>
            <Text style={{ color: 'black' }}>Standard Double Room</Text>
            <Text style={{ color: 'black' }}>1 orang</Text>
            <Text style={{ color: 'black' }}>Sukabirus - Jawa Barat</Text>
          </View>
          <Text style={{ color: 'black' }}>15-01-2022</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'bed' size={24} color='black' />
          <View>
            <Text style={{ color: 'black' }}>Rp. 1.000.000</Text>
            <Text style={{ color: 'black' }}>Standard Double Room</Text>
            <Text style={{ color: 'black' }}>1 orang</Text>
            <Text style={{ color: 'black' }}>Sukabirus - Jawa Barat</Text>
          </View>
          <Text style={{ color: 'black' }}>15-01-2022</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'bed' size={24} color='black' />
          <View>
            <Text style={{ color: 'black' }}>Rp. 1.000.000</Text>
            <Text style={{ color: 'black' }}>Standard Double Room</Text>
            <Text style={{ color: 'black' }}>1 orang</Text>
            <Text style={{ color: 'black' }}>Sukabirus - Jawa Barat</Text>
          </View>
          <Text style={{ color: 'black' }}>15-01-2022</Text>
      </View>
      </ScrollView>
    </View>
  );
}

function ProfileScreen({navigation}){
  return (
    <View style={{ flex: 1}}>
      <View style={{ flexDirection: 'row', marginHorizontal:  25, marginTop: 25 }}>
        <MaterialCommunityIcons style={{ }} name='account-circle' color='black' size={150 } />
        <View style={{ paddingTop: 15}}>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Bastian</Text>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>23 Tahun</Text>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Wiraswasta</Text>
        </View>
      </View>
      <View style={{ flex: 1, marginLeft: 25, marginRight: 250, marginBottom: 50, justifyContent: 'space-evenly' }}>
        <Button
          title = "Edit Profil"
          color = "#5A88FF"
        />
        <Button
          title = "Alamat"
          color = "#5A88FF"
        />
        <Button
          title = "Pengaturan"
          color = "#5A88FF"
        />
        <Button
          title = "Bantuan"
          color = "#5A88FF"
        />
        <Button
          onPress={() => {
            navigation.navigate("Login")
          }}
          title = "Keluar"
          color = "#5A88FF"
        />
      </View>
    </View>
  );
}