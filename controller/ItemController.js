import {Item} from "../model/item.js";
import {getAllItemDB, saveItemDB, updateItemDB, deleteItemDB} from "../DB/db.js";

export class ItemController {
    constructor() {
        $('#btnItemSave').click(this.handleSaveItemValidation.bind(this));
        $('#btnItemUpdate').click(this.handleUpdateItemValidation.bind(this));
        $('#btnItemDelete').click(this.handleDeleteItemValidation.bind(this));

        this.handleSaveItem.bind(this);
        this.handleLoadItem();
    }

    handleLoadItem() {
        let item_data_arr = getAllItemDB();

        $('#tblItemBody').empty();

        item_data_arr.map((result, index) => {
            var row = "<tr class='row-data'>" +
                "<td>" + result._item_code + "</td>" +
                "<td>" + result._item_name + "</td>" +
                "<td>" + result._item_price + "</td>" +
                "<td>" + result._item_quantity + "</td>" +
                "</tr>";
            $('#tblItemBody').append(row);
        })
    }

    handleSaveItemValidation() {
        var item_code = $('#txtNewItemCode').val();
        var item_name = $('#txtNewItemName').val();
        var item_price = $('#txtNewItemPrice').val();
        var item_quantity = $('#txtNewItemQuantity').val();

        const regexNumber = /^\d+$/;

        !regexNumber.test(item_code) ?
            alert('Invalid Id') :
            (!item_name) ?
                alert('Invalid Name') :
                (!item_price) ?
                    alert('Invalid Price') :
                    !regexNumber.test(item_quantity) ?
                        alert('Invalid Quantity') :
                            this.handleSaveItem();
    }

    handleSaveItem() {
        var item_code = $('#txtNewItemCode').val();
        var item_name = $('#txtNewItemName').val();
        var item_price = $('#txtNewItemPrice').val();
        var item_quantity = $('#txtNewItemQuantity').val();

        let item = new Item(
            item_code,
            item_name,
            item_price,
            item_quantity
        );

        saveItemDB(item);
        this.handleLoadItem();
    }

    handleUpdateItemValidation() {
        var item_code = $('#txtEditItemCode').val();
        var item_name = $('#txtEditItemName').val();
        var item_price = $('#txtEditItemPrice').val();
        var item_quantity = $('#txtEditItemQuantity').val();

        const regexNumber = /^\d+$/;

        (getAllItemDB().findIndex(item => item.customer_id === item_code ) < 0) ?
            alert("not found item") :
            (!item_name) ?
                alert('Invalid Name') :
                (!item_price) ?
                    alert('Invalid Price') :
                    !regexNumber.test(item_quantity) ?
                        alert('Invalid Quantity') :
                        this.handleUpdateItem();
    }

    handleUpdateItem() {
        var item_code = $('#txtEditItemCode').val();
        var item_name = $('#txtEditItemName').val();
        var item_price = $('#txtEditItemPrice').val();
        var item_quantity = $('#txtEditItemQuantity').val();

        let item = new Item(
            item_code,
            item_name,
            item_price,
            item_quantity
        );

        updateItemDB(item);
        this.handleLoadItem();
    }

    handleDeleteItemValidation(){
        var item_code = $('#txtEditItemCode').val();
        (getAllItemDB().findIndex(item => item.customer_id === item_code ) < 0) ?
            alert("not found item") :
            this.handleDeleteItem();
    }

    handleDeleteItem() {
        var item_code = $('#txtEditItemCode').val();
        var item_name = $('#txtEditItemName').val();
        var item_price = $('#txtEditItemPrice').val();
        var item_quantity = $('#txtEditItemQuantity').val();

        let item = new Item(
            item_code,
            item_name,
            item_price,
            item_quantity
        );

        deleteItemDB(item);
        this.handleLoadItem();
    }
}

new ItemController();
