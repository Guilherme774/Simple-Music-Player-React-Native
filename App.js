import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, AsyncStorage, ScrollView, Modal, TouchableHighlight, TextInput } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import { style } from './style'

const image = require('./src/img/img.jpg')

console.disableYellowBox = true

export default function App() {

  const [tarefas, setarTarefas] = useState([]);
  const [modal,setModal] = useState(false);
  const [tarefaAtual,setTarefaAtual] = useState('');


  useEffect(()=>{
    
    (async () => {
      try {
        let tarefasAtual = await AsyncStorage.getItem('tarefas');
        if(tarefasAtual == null)
          setarTarefas([]);
        else
          setarTarefas(JSON.parse(tarefasAtual));
      } catch (error) {
        // Error saving data
      }
    })();
},[])
 

  function deletarTarefa(id){
      let newTarefas = tarefas.filter(function(item){
            return item.id != id;
      });

      setarTarefas(newTarefas);
     
      (async () => {
        try {
          await AsyncStorage.setItem('tarefas', JSON.stringify(newTarefas));
        } catch (error) {
          // Error saving data
        }
      })();
      
  }

  function addTarefa(){
    
    setModal(!modal);

    let id = 0;
    if(tarefas.length > 0){
        id = tarefas[tarefas.length-1].id + 1;
    }

    let tarefa = {id:id,tarefa:tarefaAtual};

    setarTarefas([...tarefas,tarefa]);

   

    (async () => {
      try {
        await AsyncStorage.setItem('tarefas', JSON.stringify([...tarefas,tarefa]));
      } catch (error) {
        // Error saving data
      }
    })();
    
  }



  return (
    <ScrollView style={style.container}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <TextInput onChangeText={text => setTarefaAtual(text)} autoFocus={true}></TextInput>

            <TouchableHighlight
              style={{ ...style.openButton, backgroundColor: "#2196F3" }}
              onPress={() => addTarefa()}
            >
              <Text style={style.textStyle}>Adicionar Tarefa</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <ImageBackground source={image} style={style.imgHeader}>
        <View style={style.overview}>
          <Text style={style.textHeader}>ToDo List - Cosmos Tech</Text>
        </View>
      </ImageBackground>


      {
        tarefas.map((val) => {
          return(
            <View style={style.tarefaSingle}>
              <View style={{flex: 1, width: '100%', padding: 10}}>
                <Text style={{width: '90%'}}> {val.tarefa} </Text>
                <View style={{alignItems: 'flex-end', marginTop: -22, marginBottom: 5}}>
                  <TouchableOpacity onPress={()=> deletarTarefa(val.id)}>
                    <Entypo name="trash" size={25} color="red" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )
        })
      }

      <TouchableOpacity onPress={()=>setModal(true)} style={style.btnAdd}>
        <Text style={style.addText}>+</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </ScrollView>
  );
}