import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  ScrollContainer: {
    width: '100%',
    height: '100%',
    padding: 15,
  },

  Logo: {
    marginTop: 30,
  },

  Empty: {
    alignSelf: 'center',
    color: '#999',
    fontSize: 24,
    fontWeight: 'bold',
  },

  CardsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500,
  },

  Card: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    marginVertical: 15,
    overflow: 'hidden',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  Avatar: {
    flex: 1,
    height: 300,
  },

  Footer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  Name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  Bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 18,
  },

  ButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Button: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFF',
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  ButtonNew: {
    height: 50,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 4,
    backgroundColor: '#46FFF6',
  },

  TextButton: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Styles;