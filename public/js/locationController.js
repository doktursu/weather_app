function LocationController(){
    this._model = model;
    this._view = view;

    var _this = this;

    this._view.delButtonClicked.attach(function(){
        _this.delLocation();
    });
}

this._locationViews.forEach
