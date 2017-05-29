import dispatcher from '../dispatchers/Dispatcher';

export function createLocation(newListing){
    dispatcher.dispatch({
      type: 'CREATE_LOCATION',
      listing: newListing
      // passing through the whole object in listing to be parsed through later.
      
      // name: newListing.name,
      // city: newListing.city,
      // address: newListing.address,
      // state: newListing.state,
      // description: newListing.description,
      // image: newListing.image
    })
}
