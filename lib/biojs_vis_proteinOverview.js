var _ = require("underscore");
var d3 = require("d3");
var FTViewer = require("biojs-vis-proteinFeaturesViewer");
/*
 * biojs-vis-proteinOverview
 * https://github.com/ljgarcia/biojs-vis-proteinOverview
 *
 * Copyright (c) 2014 ljgarcia
 * Licensed under the Apache 2 license.
 */

/**
@class biojs_vis_proteinOverview

 Mandatory options:
 element: DOM object that will contain this component
 featuresModel: Features required by biojs-vis-proteinFeatureViewer
 */


var  biojs_vis_proteinOverview;
module.exports = biojs_vis_proteinOverview = function(options){
    _constructor(this, options);
};

/**
 * Private zone
 */
/*
 * Private variables
 * */
var
    _DEFAULT_OPTIONS = {
        width: 1200
    },
    PREFIX = "up_pov_",
    FT_SUFFIX = "ft",
    SEQ_SUFFIX = "seq",
    ST_SUFFIX = "3d"
;
/*
 * Private methods
 * */
var
    /**
     * Constructor, it loads the default values for the options.
     * @param self This instance.
     * @params options Configuration options.
     * @private
     */
    _constructor = function(self, options) {
        var targetID = PREFIX + (new Date().getTime());
        if (options.element == undefined) {
            d3.select("body").append("div").attr("id", targetID);
            options.element = document.getElementById(targetID);
        }
        if ((options.element.id == undefined) || (options.element.id.length === 0)) {
            options.element.id = targetID;
        }
        self.opt = _.extend(_.extend({}, _DEFAULT_OPTIONS), options);
        _createLayout(self);
        _init(self);
    },
    /**
     * Creates a layout to render features, sequence, and 3D structure.
     * TODO: Using a template would be a better idea.
     * @param self This instance.
     * @private
     */
    _createLayout = function(self) {
        var table = d3.select(self.opt.element).append("div")
            .classed(PREFIX + "table", true)
            .attr("width", self.opt.width + "px")
        ;

        table.append("div")
            .classed(PREFIX + "row", true)
            .append("div")
            .classed(PREFIX + FT_SUFFIX, true)
            .attr("id", self.opt.element.id + "_" + FT_SUFFIX)
        ;
        var bottomRow = table.append("div")
            .classed(PREFIX + "row", true)
        ;
        bottomRow.append("div")
            .classed(PREFIX + SEQ_SUFFIX, true)
            .attr("id", self.opt.element.id + "_" + SEQ_SUFFIX)
        ;
        bottomRow.append("div")
            .classed(PREFIX + ST_SUFFIX, true)
            .attr("id", self.opt.element.id + "_" + ST_SUFFIX)
        ;
    },
    /**
     * Initializes the components: ftViewer, sequence, and 3D.
     * @param self This instance.
     * @private
     */
    _init = function(self) {
        var instance = new FTViewer({
            element: document.getElementById(self.opt.element.id + "_" + FT_SUFFIX),
            useTooltips: true,
            width: self.opt.width,
            featuresModel: self.opt.featuresModel,
            transparency: 0.4
        });
    }
;

/*
 * Public Methods
 */

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     biojs_vis_proteinOverview.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


biojs_vis_proteinOverview.hello = function (name) {
  return 'hello ' + name;
};

