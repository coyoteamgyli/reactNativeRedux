/**
 * Created by cong on 16/6/29.
 * @flow
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import * as action from '../actions/changeCount';
import styles from '../styles';
class app extends Component {
    render() {
        const {dispatch, newCount} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                        dispatch(action.changeCountAction(newCount.count+1));
                }}>
                    <Text>点击自动加1:{newCount.count}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                        dispatch(action.changeredAction(newCount.red-1));
                }}>
                    <Text>点击自动减1:{newCount.red}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
function mapStateToProps(state) {
    const {newCount} = state;
    return {
        newCount
    }
}
export default connect(mapStateToProps)(app);