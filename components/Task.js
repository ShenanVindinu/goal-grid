import { View, Text, StyleSheet } from 'react-native';

import React from 'react';

const Task = (props) => {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

})

export default Task;