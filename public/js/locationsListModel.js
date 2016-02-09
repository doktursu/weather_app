function LocationsListModel(locations){
    this._locations = locations;
    this._selectedIndex = -1;

    this.locationAdded = new Event(this);
    this.locationRemoved = new Event(this);
    this.selectedIndexChanged = new Event(this);
}

LocationsListModel.prototype = {
    getLocations: function(){
        return [].concat(this._locations);
    },

    addLocation: function(location){
        this._locations.push(location);
        this.locationAdded.notify(this._locations);
    },

    removeLocationAt: function(index){
        var location;

        location = this._locations[index];
        this._locations.splice(index, 1);
        this.locationRemoved.notify({ location: location });
        if(index === this._selectedIndex){
            this.setSelectedIndex(-1);
        }
    },

    getSelectedIndex: function(){
        return this._selectedIndex;
    },

    setSelectedIndex: function(index){
        var previousIndex;

        previousIndex = this._selectedIndex;
        this._selectedIndex = index;
        this.selectedIndexChanged.notify({ previous : previousIndex });
    }
};