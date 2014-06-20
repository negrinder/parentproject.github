exports.definition = {
    config: {
        columns: {
            titolo: "string",
            link: "string",
            data_pubblicazione: "string",
            immagine: "string",
            categoria: "string",
            descrizione: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "Notizia"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Notizia", exports.definition, []);

collection = Alloy.C("Notizia", exports.definition, model);

exports.Model = model;

exports.Collection = collection;