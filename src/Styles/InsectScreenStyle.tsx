import { StyleSheet } from "react-native";

//Todos los componentes tienen el position relative
export const styles = StyleSheet.create({
  sectionSafeAreaView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sectionViewContainer: {
    width: '70%',
    height: '50%',
    marginTop: 40
  },
  sectionTextTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: 'purple',
    fontWeight: 'bold',
    marginTop: 20
  },
  sectionLabelInsect: {
    fontSize: 18,
    color: 'black',
    marginTop: 40,
    fontWeight: 'bold'
  },
  sectionInputName: {
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'purple',
    fontSize: 18,
    marginTop: 15,
    color: 'black',
    paddingLeft: 10
  },
  sectionInputQuantity: {
    fontSize: 18,
    width: '50%',
    height: 40,
    color: 'black',
    borderWidth: 2,
    borderColor: 'purple',
    marginTop: 15,
    borderRadius: 5,
    paddingLeft: 10
  },
  sectionViewButtonSave: {
    backgroundColor: '#A569BD',
    width: 100,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    position: 'absolute',
    top: 80,
    left: 170
  },
  sectionTextSave: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  sectionViewButtonClean: {
    backgroundColor: '#A569BD',
    width: 100,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    position: 'absolute',
    top: 80,
    right: 160
  },
  sectionTextClean: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  sectionInsect: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 60
  },
  sectionTableHead: {
    backgroundColor: '#A569BD',
    display: 'flex',
    width: '70%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 5
  },
  sectionTableTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  sectionTableRow: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionRowSubtitle: {
    fontSize: 18,
    color: 'black',
    paddingHorizontal: 10
  }
});

