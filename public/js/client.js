window.onload = function(){
    var model = new LocationsListModel(['London', 'Edinburgh']);
    var view = new LocationsListView(model, {
        list: document.querySelector('#list'),
        input: document.querySelector('#inputLocation'),
        addButton: document.querySelector('#addLocation'),
        delButton: document.querySelector('#delLocation')
    });
    console.log(view);
    var controller = new LocationsListController(model, view);
    console.log(controller);
    view.show();

}