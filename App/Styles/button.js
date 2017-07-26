
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

class Button extends Component {
  render() {
    return(
      <TouchableOpacity style={styles.button}
        onPress={()=>{this.props.onPress(this.props.name, this.props.code)}}>
        <Text>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  button:{
    // margin: 10,
    // height: 50,
    // width: 100,
    // borderWidth: 1,
    // borderRadius: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'lightgray'
    margin: 10,
    backgroundColor: '#f88fb0',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }
});

export default Button;