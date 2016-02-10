function WeatherView(model, elements){
    this._model = model;
    this._elements = elements;


    this.searchButtonClicked = new Event(this);


    this.listModified = new Event(this);
    this.delButtonClicked = new Event(this);

    var _this = this;

    // attach model listeners
    this._model.locationChanged.attach(function(){
        _this.rebuildView();
    });

    // attach listeners to HTML controls
    this._elements.searchButton.onclick = (function(){
        _this.searchButtonClicked.notify();
    });

//////////////////////////////////////////////

    // this._model.locationRemoved.attach(function(){
    //     _this.rebuildList();
    // });

    // this._elements.list.onchange = (function(e){
    //     _this.listModified.notify({ index: e.target.selectIndex });
    // });
    // this._elements.delButton.onclick = (function(){
    //     _this.delButtonClicked.notify();
    // });
}

WeatherView.prototype = {
    show: function(){
        this.rebuildView();
    },

    rebuildView: function(){
        var view, data, display;

        view = this._elements.view;
        data = this._model.getData();
        display = "<h4>" + data.name + "</h4><p>Weather Now: " + data.weather[0].main + "</p><p><i>" + data.weather[0].description + "</i></p>";

        view.innerHTML = display;
    },
};















