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

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var biojs_vis_proteinOverview = require('../..');


describe('biojs-vis-proteinOverview module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(biojs_vis_proteinOverview.hello('biojs'), ("hello biojs"));
      
      // alternative styles
        biojs_vis_proteinOverview.hello('biojs').should.equal("hello biojs");
    });
  });
});
