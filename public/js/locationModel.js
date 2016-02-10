function LocationModel(data){
    this._data = data;
};

LocationModel.prototype = {
    getData: function(){
        return this._data;
    }
};