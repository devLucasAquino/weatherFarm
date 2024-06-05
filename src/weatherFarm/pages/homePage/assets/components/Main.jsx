import React from 'react';

import { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Main = ( {children, temp} ) =>{

    const dayWeek = [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

    const initHours = new Date().getDay();
    const initMinutes = new Date().getMinutes();

    const [hours, setHours] = useState(initHours);
    const [minutes, setMinutes] = useState(initMinutes)

    return(
        <View style={styles.container}>
                    <Text style={styles.cityName}>{children}</Text>

                    <View style={styles.view}>
                        <Text style={styles.dash}>--------------</Text>


                        <View style={styles.tempData}>

                            <Text style={styles.temperature}>{temp}</Text>


                            <View style={styles.view}>
                                <Text style={styles.dayWeek}>
                                    {dayWeek[new Date().getDay()]}
                                </Text>

                                <Text style={styles.hoursMinutes}>
                                    {hours !== initHours ? 
                                        setHours(new Date().getHours()) : hours}h
                                    {minutes !== initMinutes ? 
                                        setMinutes(new Date().getMinutes()) : minutes}m
                                </Text>
                            </View>


                        </View>

                    <Text style={styles.dash} >--------------</Text>

                    </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cityName : {
        fontSize: 30,
        color: 'white',
        fontWeight: 500,
    },
    view : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dash : {
        fontSize: 60,
        color: 'white',
    },
    tempData : {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
    },
    dayWeek : {
        fontSize: 35,
        color: 'white',
        fontWeight: 800,
    },
    hoursMinutes :{
        fontSize: 25,
        color: 'white',
        fontWeight: 800,
    },
    temperature : {
        fontSize: 90,
        color: 'white',
        fontWeight: 800,
    }




})

export default Main;