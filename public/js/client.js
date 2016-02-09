window.onload = function(){
    var listModel = new LocationsListModel(['London', 'Edinburgh']);
    var listView = new LocationsListView(listModel, {
        list: document.querySelector('#list'),
        input: document.querySelector('#inputLocation'),
        addButton: document.querySelector('#addLocation'),
        delButton: document.querySelector('#delLocation')
    });
    console.log(listView);
    var listController = new LocationsListController(listModel, listView);
    console.log(listController);
    listView.show();


    var model = new LocationModel('London');
    var view = new LocationView(model, {
        view: document.querySelector('#weatherView'),
        input: document.querySelector('#inputLocation'),
        searchButton: document.querySelector('#searchLocation'),
        // addButton: document.querySelector('#addLocation')
    });
    var controller  = new LocationController(model, view);
    // model.get();
    view.show();

}

