function LocationModel(city){
    this._url = 'http://localhost:1234/weather/' + city;
    this._data = this.get();

    this.locationChanged = new Event(this);


    // this.locationAdded = new Event(this);
    // this.locationRemoved = new Event(this);
    // this.selectedIndexChanged = new Event(this);

}

LocationModel.prototype = {

    setLocationTo: function(city){
        this._url = 'http://localhost:1234/weather/' + city;
        this.get();
    },

    get: function(){
        var _this = this;
        var request = new XMLHttpRequest();
        request.open('GET', this._url);
        request.onload = function(){
            _this._data = JSON.parse(request.responseText);
            console.log(_this._data);
            _this.locationChanged.notify(_this._data);
        };
        request.send(null);
    },

    getData: function(){
        return this._data;
    }

    ///////////////////////////////////////////////////////


    // getLocations: function(){
    //     return [].concat(this._locations);
    // },

    // addLocation: function(location){
    //     this._locations.push(location);
    //     this.locationAdded.notify(this._locations);
    // },

    // removeLocationAt: function(index){
    //     var location;

    //     location = this._locations[index];
    //     this._locations.splice(index, 1);
    //     this.locationRemoved.notify({ location: location });
    //     if(index === this._selectedIndex){
    //         this.setSelectedIndex(-1);
    //     }
    // },

    // getSelectedIndex: function(){
    //     return this._selectedIndex;
    // },

    // setSelectedIndex: function(index){
    //     var previousIndex;

    //     previousIndex = this._selectedIndex;
    //     this._selectedIndex = index;
    //     this.selectedIndexChanged.notify({ previous : previousIndex });
    // }
};