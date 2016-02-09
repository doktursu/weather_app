function LocationsListView(model, elements){
    this._model = model;
    this._elements = elements;

    this.listModified = new Event(this);
    this.addButtonClicked = new Event(this);
    this.delButtonClicked = new Event(this);

    var _this = this;

    // attach model listeners
    this._model.locationAdded.attach(function(){
        _this.rebuildList();
    });
    this._model.locationRemoved.attach(function(){
        _this.rebuildList();
    });

    // attach listeners to HTML controls
    this._elements.list.onchange = (function(e){
        _this.listModified.notify({ index: e.target.selectIndex });
    });
    this._elements.addButton.onclick = (function(){
        _this.addButtonClicked.notify();
    });
    this._elements.delButton.onclick = (function(){
        _this.delButtonClicked.notify();
    });
}

LocationsListView.prototype = {
    show: function(){
        this.rebuildList();
    },

    rebuildList: function(){
        var list, locations, key, option;

        list = this._elements.list;
        list.innerHTML = '';

        locations = this._model.getLocations();
        for(key in locations){
            if(locations.hasOwnProperty(key)){
                option = document.createElement('option');
                option.innerHTML = locations[key];
                list.appendChild(option);
            }
        }
        this._model.setSelectedIndex(-1);
    }
};

function LocationsListController(model, view){
    this._model = model;
    this._view = view;

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
}

LocationsListController.prototype = {
    addLocation: function(){
        var location = this._view._elements.input.value;
        if(location){
            this._model.addLocation(location);
        }
    },

    delLocation: function(){
        var index;

        index = this._model.getSelectedIndex();
        if(index !== -1){
            this._model.removeLocationAt(this._model.getSelectedIndex());
        }
    },

    updateSelected: function(index){
        this._model.setSelectedIndex(index);
    }
};















