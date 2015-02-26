var model = {
    accession: "P00000",
    identifier: "P0_human",
    sequence: sequence,
    categories: [domainsAndSites, structural, topo, ptms, variants]
    //sequence: p51587.sequence,
    //categories: p51587.categories
};

// if you don't specify a html file, the sniper will generate a div
var app = require("biojs-vis-proteinOverview");
var instance = new app({
    element: target,
    featuresModel: model
});
