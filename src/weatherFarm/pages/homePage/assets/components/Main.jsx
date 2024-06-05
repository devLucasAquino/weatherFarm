import React from 'react';

import { useState } from 'react';

import { View, Text } from 'react-native';

const Main = ( {children, temp} ) =>{

    const dayWeek = [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

    const initHours = new Date().getDay();
    const initMinutes = new Date().getMinutes();

    const [hours, setHours] = useState(initHours);
    const [minutes, setMinutes] = useState(initMinutes)

    return(
        <View style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
                    <Text style={{
                        fontSize: 30,
                        color: 'white',
                        fontWeight: 500,
                    }}>{children}</Text>

                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            fontSize: 60,
                            color: 'white',
                        }}>--------------</Text>


                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 20,
                        }}>

                            <Text style={{
                                fontSize: 90,
                                color: 'white',
                                fontWeight: 800,
                            }}>{temp}</Text>


                            <View style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 35,
                                    color: 'white',
                                    fontWeight: 800,
                                }}>{dayWeek[new Date().getDay()]}</Text>
                                <Text style={{
                                    fontSize: 25,
                                    color: 'white',
                                    fontWeight: 800,
                                }}>{hours !== initHours ? setHours(new Date().getHours()) : hours}h
                                   {minutes !== initMinutes ? setMinutes(new Date().getMinutes()) : minutes}m</Text>
                            </View>


                        </View>

                    <Text style={{
                            fontSize: 60,
                            color: 'white',
                        }}>--------------</Text>

                    </View>



        </View>
    )
}

export default Main;