/*
 * biojs-vis-proteinOverview
 * https://github.com/ljgarcia/biojs-vis-proteinOverview
 *
 * Copyright (c) 2014 ljgarcia
 * Licensed under the Apache 2 license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// this is your global div instance (see index.html)
var yourDiv = document.getElementById('mocha');

// requires your main app (specified in index.js)
var biojs_vis_proteinOverview = require('../..');

describe('biojs-vis-proteinOverview module', function(){
  describe('#init()', function(){
    it('should fill the textBox', function(){
      var opts = {el: yourDiv, text: 'biojs'};
      var instance = new biojs_vis_proteinOverview(opts);
      assert.equal(yourDiv.textContent,"hello biojs");
    });
  });
});
