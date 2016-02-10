function WeatherController(model, view){
    this._model = model;
    this._view = view;

    var _this = this;

    this._view.searchButtonClicked.attach(function(){
        _this.searchLocation();
    });


    // this._view.listModified.attach(function(sender, args){
    //     _this.updateSelected(args.index);
    // });


    // this._view.delButtonClicked.attach(function(){
    //     _this.delLocation();
    // });
}

WeatherController.prototype = {

    searchLocation: function(){
        var city, location;

        city = this._view._elements.input.value;
        if(city){
            this._model.setLocationTo(city);
        }
    }

//////////////////////////////////////////////////////////////////////////////////

    // addLocation: function(){
    //     var location = this._view._elements.input.value;
    //     if(location){
    //         this._model.addLocation(location);
    //     }
    // },

    // delLocation: function(){
    //     var index;

    //     index = this._model.getSelectedIndex();
    //     if(index !== -1){
    //         this._model.removeLocationAt(this._model.getSelectedIndex());
    //     }
    // },

    // updateSelected: function(index){
    //     this._model.setSelectedIndex(index);
    // }
};