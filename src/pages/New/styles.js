import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Input: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    height: 48,
    width: '80%',
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },

  Button: {
    marginTop: 10,
    borderRadius: 4,
    height: 48,
    width: '80%',
    backgroundColor: '#46fff6',
    alignItems: 'center',
    justifyContent: 'center'
  },

  TextButton: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Styles;