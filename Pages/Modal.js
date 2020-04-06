import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View,Image } from 'react-native';
import Modal from 'react-native-modal';


export default class Modals extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };


  _renderModalContent = () => (
    <View style={styles.modalContent}>
    <View style={{flexDirection:'row',justifyContent:'space-between',paddingBottom:5}}>
       <Text style={{alignSelf:'flex-end',}}>Perşembe, 25 Ağustos</Text>
      <TouchableOpacity onPress={this.toggleModal}><Text style={{color:'#2d3561'}}>X</Text></TouchableOpacity>
      </View>
      <View style={{backgroundColor:'#eae9e9',width:'100%',alignItems:'left',justifyContent: 'center',}}>
      <Text style={{backgroundColor:'gray',width:'100%',justifyContent:'center',paddingHorizontal:10}}>14:00, Derslik3</Text>
      </View>
      <View style={{paddingHorizontal:20,backgroundColor:'#eae9e9',borderBottomEndRadius:10,borderBottomStartRadius:10}}>
      <View style={{flexDirection:'row',paddingTop:20}}>
      <Image style={{marginRight:20,backgroundColor:'lightblue',borderRadius:12,}} source={require('../images/hb.png')}/>
      <View >
      <Text >Yenilikçi fikirler nasıl üretebilirim ?</Text>
      <Text>Çiğdem SEZER, 2 saat</Text>
      </View>
      </View>
      <View style={{flexDirection:'column'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingVertical:20}}>
      <TouchableOpacity><Text style={{color:'#46b3e6'}}>Chat Katıl</Text></TouchableOpacity>
      <View style={{width:1,backgroundColor:'black'}}></View>
      <TouchableOpacity><Text style={{color:'#46b3e6'}}>Takvime ekle</Text></TouchableOpacity>
      </View>
      </View>
      </View>

    </View>
  );

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.toggleModal} ><Text>Open </Text></TouchableOpacity>

        <Modal isVisible={this.state.isModalVisible} style={styles.bottomModal}>
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    flex: 0.3,
    backgroundColor: '#f8f8f6',
    paddingHorizontal: 15,
    padding:5,
    justifyContent: 'center',
    borderTopEndRadius: 22,
    borderTopStartRadius: 22,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
