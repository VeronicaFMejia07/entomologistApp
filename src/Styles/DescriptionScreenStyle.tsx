import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerDescription: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerName: {
    flexDirection: 'row',
    marginTop: 100,
  },
  nameTitle: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
  },
  nameDescription: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'black',
  },
  containerQuantity: {
    flexDirection: 'row',
  },
  quantityTitle: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    right: 30,
  },
  containerImage: {
    position: 'absolute',
    top: 290,
  },
  image: {
    width: 400,
    height: 400,
    opacity: 0.3,
  },
});
