function LocationView(model, parentView){
    this._model = model;
    this._parentView = parentView
    this._elements = {
        div: document.createElement('div'),
        delButton: document.createElement('button')
    };

    this.delButtonClicked = new Event();

    var _this = this;
    // attach model listeners
    this._model.dataUpdated.attach(function(){
        _this.rebuildList();
    });

    // attach listeners to HTML controls
    this._elements.delButton.onclick = (function(){
        _this.delButtonClicked.notify();
    });
};

LocationView.prototype = {
    render: function(){
        var data, div, button;

        data = this._model.getData();
        div = this._elements.div;
        div.innerHTML = "<h4>" + data.name "</h4>";

        button = this._elements.delButton;
        button.value = 'Delete';
        div.appendChild(button);

        return div;
    },
};
