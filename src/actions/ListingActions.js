import dispatcher from '../dispatchers/Dispatcher';

export function createLocation(){
    dispatcher.dispatch({
      type: 'CREATE_LOCATION',
      name: name,
      // address: address,
      // city: city,
      // state: state,
      // image: image,
      // description: description
    })
}
