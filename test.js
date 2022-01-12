function TestScreen() {  

  useEffect(() => {
    getUsers();
  })

  const createUser = () => {
    // isiannya nama, nim, prodi dari textinput
    firestore()
    .collection('Users')
    .doc(nim)
    .set({
      nama: nama,
      prodi: prodi,
    })
    .then(() => {
      console.log('User added!');
    });
  }

  const [users, setUsers] = React.useState([]);
  const [nama, setNama] = React.useState('');
  const [nim, setNim] = React.useState('');
  const [prodi, setProdi] = React.useState('');

  const getUsers = () => {
    firestore().collection('Users').get().then(querySnapshot => {
      const users = [];
      querySnapshot.forEach(doc => {
        // console.log(doc.id);
        // Data tiap dokumen, dimasukkan ke array state lalu dimasukkan ke data flatlist
        users.push({
          ...doc.data(),
          key: doc.id,
        });
      });
      setUsers(users);
    });
  }
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="NIM"
        onChangeText={(text) => setNim(text)} 
      />
      <TextInput
        placeholder="Nama"
        onChangeText={(text) => setNama(text)} 
      />
      <TextInput
        placeholder="Prodi"
        onChangeText={(text) => setProdi(text)} 
      />
      <Button
        title = "Tambah User"
        onPress={() => createUser()}
      />
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 16, marginTop: 16 }}>
            <Text>Nama: {item.nama}</Text>
            <Text>NIM: {item.nim}</Text>
            <Text>Prodi: {item.prodi}</Text>
          </View>
        )}
      />
    </View>
  );
}

<ScrollView>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate("Rincian Hotel")
          }}
        >
          <View style={{ backgroundColor: 'white', elevation: 5, flexDirection: 'row', marginHorizontal: 10, marginTop: 30 }}>
            <Image source={require('./gambar/redhouse.png')} />
            <View style={{ flex: 1, padding: 5 }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 18 }}>RedHouse Sukabirus</Text>
                <MaterialCommunityIcons name = 'heart-outline' size={18} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'map-marker-radius-outline' size={18} color='black' />
                <Text style={{ color: 'black', fontSize: 14 }}>Bandung, Jawa Barat</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'star-half' size={24} color='black' />
                <MaterialCommunityIcons name = 'thumb-up-outline' size={24} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>7.9 Very Good</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>Rp. 1.000.000</Text>
                <Text style={{ color: 'black', fontSize: 12 }}>Includes Taxes</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate("Rincian Hotel")
          }}
        >
          <View style={{ backgroundColor: 'white', elevation: 5, flexDirection: 'row', marginHorizontal: 10, marginTop: 30 }}>
            <Image source={require('./gambar/hoteltherich.png')} />
            <View style={{ flex: 1, padding: 5 }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Hotel The Rich</Text>
                <MaterialCommunityIcons name = 'heart-outline' size={18} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'map-marker-radius-outline' size={18} color='black' />
                <Text style={{ color: 'black', fontSize: 14 }}>Bandung, Jawa Barat</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'thumb-up-outline' size={24} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>9.5 Very Good</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>Rp. 5.500.000</Text>
                <Text style={{ color: 'black', fontSize: 12 }}>Includes Taxes</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
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
                <Text style={{ color: 'black', fontSize: 18 }}>Hotel Prambors</Text>
                <MaterialCommunityIcons name = 'heart-outline' size={18} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'map-marker-radius-outline' size={18} color='black' />
                <Text style={{ color: 'black', fontSize: 14 }}>Bandung, Jawa Barat</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'thumb-up-outline' size={24} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>9.5 Very Good</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>Rp. 5.500.000</Text>
                <Text style={{ color: 'black', fontSize: 12 }}>Includes Taxes</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate("Rincian Hotel")
          }}
        >
          <View style={{ backgroundColor: 'white', elevation: 5, flexDirection: 'row', marginHorizontal: 10, marginTop: 30 }}>
            <Image source={require('./gambar/redhouse.png')} />
            <View style={{ flex: 1, padding: 5 }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 18 }}>RedHouse Sukabirus</Text>
                <MaterialCommunityIcons name = 'heart-outline' size={18} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'map-marker-radius-outline' size={18} color='black' />
                <Text style={{ color: 'black', fontSize: 14 }}>Bandung, Jawa Barat</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'star-half' size={24} color='black' />
                <MaterialCommunityIcons name = 'thumb-up-outline' size={24} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>7.9 Very Good</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>Rp. 1.000.000</Text>
                <Text style={{ color: 'black', fontSize: 12 }}>Includes Taxes</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate("Rincian Hotel")
          }}
        >
          <View style={{ backgroundColor: 'white', elevation: 5, flexDirection: 'row', marginHorizontal: 10, marginTop: 30 }}>
            <Image source={require('./gambar/hoteltherich.png')} />
            <View style={{ flex: 1, padding: 5 }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Hotel The Rich</Text>
                <MaterialCommunityIcons name = 'heart-outline' size={18} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'map-marker-radius-outline' size={18} color='black' />
                <Text style={{ color: 'black', fontSize: 14 }}>Bandung, Jawa Barat</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'thumb-up-outline' size={24} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>9.5 Very Good</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>Rp. 5.500.000</Text>
                <Text style={{ color: 'black', fontSize: 12 }}>Includes Taxes</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
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
                <Text style={{ color: 'black', fontSize: 18 }}>Hotel Prambors</Text>
                <MaterialCommunityIcons name = 'heart-outline' size={18} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'map-marker-radius-outline' size={18} color='black' />
                <Text style={{ color: 'black', fontSize: 14 }}>Bandung, Jawa Barat</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'thumb-up-outline' size={24} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>9.5 Very Good</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>Rp. 5.500.000</Text>
                <Text style={{ color: 'black', fontSize: 12 }}>Includes Taxes</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate("Rincian Hotel")
          }}
        >
          <View style={{ backgroundColor: 'white', elevation: 5, flexDirection: 'row', marginHorizontal: 10, marginTop: 30 }}>
            <Image source={require('./gambar/redhouse.png')} />
            <View style={{ flex: 1, padding: 5 }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 18 }}>RedHouse Sukabirus</Text>
                <MaterialCommunityIcons name = 'heart-outline' size={18} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'map-marker-radius-outline' size={18} color='black' />
                <Text style={{ color: 'black', fontSize: 14 }}>Bandung, Jawa Barat</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'star-half' size={24} color='black' />
                <MaterialCommunityIcons name = 'thumb-up-outline' size={24} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>7.9 Very Good</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>Rp. 1.000.000</Text>
                <Text style={{ color: 'black', fontSize: 12 }}>Includes Taxes</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate("Rincian Hotel")
          }}
        >
          <View style={{ backgroundColor: 'white', elevation: 5, flexDirection: 'row', marginHorizontal: 10, marginTop: 30 }}>
            <Image source={require('./gambar/hoteltherich.png')} />
            <View style={{ flex: 1, padding: 5 }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 18 }}>Hotel The Rich</Text>
                <MaterialCommunityIcons name = 'heart-outline' size={18} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'map-marker-radius-outline' size={18} color='black' />
                <Text style={{ color: 'black', fontSize: 14 }}>Bandung, Jawa Barat</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'thumb-up-outline' size={24} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>9.5 Very Good</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>Rp. 5.500.000</Text>
                <Text style={{ color: 'black', fontSize: 12 }}>Includes Taxes</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
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
                <Text style={{ color: 'black', fontSize: 18 }}>Hotel Prambors</Text>
                <MaterialCommunityIcons name = 'heart-outline' size={18} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'map-marker-radius-outline' size={18} color='black' />
                <Text style={{ color: 'black', fontSize: 14 }}>Bandung, Jawa Barat</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'star' size={24} color='black' />
                <MaterialCommunityIcons name = 'thumb-up-outline' size={24} color='black' />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>9.5 Very Good</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>Rp. 5.500.000</Text>
                <Text style={{ color: 'black', fontSize: 12 }}>Includes Taxes</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>