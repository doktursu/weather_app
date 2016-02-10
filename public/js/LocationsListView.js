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
        var list, locations, key, option, div;

        list = this._elements.list;
        list.innerHTML = '';

        locations = this._model.getLocations();
        for(key in locations){
            if(locations.hasOwnProperty(key)){
                div = new LocationView(locations[key], this);
                list.appendChild(div);
            }
        }
        this._model.setSelectedIndex(-1);
    }
};

