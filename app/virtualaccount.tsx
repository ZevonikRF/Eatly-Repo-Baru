import React, { useState, useEffect} from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function VirtualAccount(){
  const router = useRouter(); 
  const totalPrice = 25000; 
  const datePay = '04 June 2024'; 
  const timePay = '20.00'; 
  const noTelp = '088376209123'; 
  const [currentDate, setCurrentDate] = useState('');
  const okayVA = () => {
    // okay payment done
    router.push('/success');
  };

  useEffect(() => {
    var date = new Date().getDate()
    var month = new Date().getMonth()
    var year =  new Date().getFullYear()
    var hours =  new Date().getHours() + 1
    var min =  new Date().getMinutes()
    var sec =  new Date().getSeconds()
    setCurrentDate(date+'/'+month+'/'+year+' '+hours+':'+min+':'+sec)
  },[])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Virtual Account</Text>
      
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Total payment</Text>
          <Text style={styles.value}>Rp {totalPrice}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Pay on</Text>
          <Text style={styles.value}>{currentDate}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Bank BCA</Text>
          <Text style={styles.value}>Rp {totalPrice}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>No. Rek/Virtual Account</Text>
          <Text style={styles.value}>133 {noTelp}</Text>
        </View>
      </View>

      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsTitle}>Petunjuk Transfer mBanking</Text>
        <Text style={styles.instructionsText}>1. Pilih m-Transfer &gt; BCA Virtual Account.</Text>
        <Text style={styles.instructionsText}>2. Masukkan nomor Virtual Account dan pilih Send.</Text>
        <Text style={styles.instructionsText}>3. Periksa informasi yang tertera di layar. Jika sudah benar, pilih ya.</Text>
        <Text style={styles.instructionsText}>4. Masukkan PIN m-BCA Anda dan pilih OK.</Text>
        <Text style={styles.instructionsText}>5. Jika transaksi gagal, mohon ulangi transaksi.</Text>
      </View>

      <TouchableOpacity onPress={okayVA} style={styles.button}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFEFE7',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  infoBox: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  instructionsContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructionsText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  button: {
    width: '100%',
    backgroundColor: '#ff9d7b',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});