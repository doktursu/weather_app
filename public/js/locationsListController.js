function LocationsListController(model, view, weatherModel){
    this._model = model;
    this._view = view;
    this._weatherModel = model;
    this._locationViews

    var _this = this;

    this._view.listModified.attach(function(sender, args){
        _this.updateSelected(args.index);
    });

    this._view.addButtonClicked.attach(function(){
        _this.addLocation();
    });

    this._view.delButtonClicked.attach(function(){
        _this.delLocation();
    });

///////////////////////////////////////////////////
    this._view.delButtonClicked.attach(function(){
        _this.delLocation();
    });
}

LocationsListController.prototype = {
    addLocation: function(){
        var data, location;

        data = this._weatherModel.getData();
        if(data){
            model = new LocationModel(data);
            view = new LocationView(model);
            view.delButtonClicked.attach(function(){
                _this.delLocation(view._model)
            })
            this._model.addLocation(model);
        }
    },

    delLocation: function(model){
        this._model.removeLocation(model);
    },

    updateSelected: function(index){
        this._model.setSelectedIndex(index);
    }
};