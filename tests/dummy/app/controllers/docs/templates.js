import Ember from 'ember';

export default Ember.Controller.extend({
  lat: 45.528178,
  lng: -122.670059,
  zoom: 14,

  restaurants: [
    {
      name: 'Sinju Restaurant',
      rating: 4,
      lat: 45.528531,
      lng: -122.681682,
    },
    {
      name: 'Burgerville',
      rating: 3.8,
      lat: 45.530970,
      lng: -122.661968
    },
    {
      name: 'Le Pigeon',
      rating: 4.5,
      lat: 45.522752,
      lng: -122.657979
    },
  ]

});
