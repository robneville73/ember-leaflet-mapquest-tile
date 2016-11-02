import TileLayer from 'ember-leaflet/components/tile-layer';
import Ember from 'ember';
/* global MQ */

export default TileLayer.extend({

  leafletRequiredOptions: [],

  createLayer() {
    let env = Ember.getOwner(this).resolveRegistration('config:environment');
    let key = env.MapQuestAPI.key || '';
    return MQ.tileLayer({key: key});
  }
});
