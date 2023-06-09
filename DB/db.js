const customerData = "CUSTOMER_DATA"; // local storage saved key
const itemData = "ITEM_DATA"; // local storage saved key

export function getAllCustomerDB() {
    let customer_pre_data_arr = localStorage.getItem(customerData);
    let customer_data_arr = [];
    if (customer_pre_data_arr) {
        customer_data_arr = JSON.parse(customer_pre_data_arr);
    }
    return customer_data_arr;
}

export function saveCustomerDB(customer) {
    let customer_pre_data_arr = localStorage.getItem(customerData);
    let customer_data_arr = [];
    if (customer_pre_data_arr) {
        customer_data_arr = JSON.parse(customer_pre_data_arr);
    }
    customer_data_arr.push(customer);
    localStorage.setItem(customerData, JSON.stringify(customer_data_arr));
}

export function updateCustomerDB(customer) {
    let customer_data_arr = getAllCustomerDB();
    let index = customer_data_arr.findIndex(existsCustomer => existsCustomer.customer_id === customer.customer_id )
    customer_data_arr[index].id = customer.customer_id;
    customer_data_arr[index].customer_nic = customer.customer_nic;
    customer_data_arr[index].customer_name = customer.customer_name;
    customer_data_arr[index].customer_salary = customer.customer_salary;
    customer_data_arr[index].customer_address = customer.customer_address;
    localStorage.setItem(customerData, JSON.stringify(customer_data_arr));
}

export function deleteCustomerDB(customer) {
    let customer_data_arr = getAllCustomerDB();
    customer_data_arr.splice(customer_data_arr.findIndex(existsCustomer => existsCustomer.customer_id === customer.customer_id), 1)
    localStorage.setItem(customerData, JSON.stringify(customer_data_arr));
}

export function getAllItemDB() {
    let item_pre_data_arr = localStorage.getItem(itemData);
    let item_data_arr = [];
    if (item_pre_data_arr) {
        item_data_arr = JSON.parse(item_pre_data_arr);
    }
    return item_data_arr;
}

export function saveItemDB(item) {
    let customer_pre_data_arr = localStorage.getItem(itemData);
    let customer_data_arr = [];
    if (customer_pre_data_arr) {
        customer_data_arr = JSON.parse(customer_pre_data_arr);
    }
    customer_data_arr.push(item);
    localStorage.setItem(itemData, JSON.stringify(customer_data_arr));
}

export function updateItemDB(item) {
    let item_data_arr = getAllItemDB();
    let index = item_data_arr.findIndex(existsItem => existsItem.item_code === item.item_code )
    item_data_arr[index].id = item.item_code;
    item_data_arr[index].item_name = item.item_name;
    item_data_arr[index].item_price = item.item_price;
    item_data_arr[index].item_quantity = item.item_quantity;
    localStorage.setItem(itemData, JSON.stringify(item_data_arr));
}

export function deleteItemDB(item) {
    let item_data_arr = getAllItemDB();
    item_data_arr.splice(item_data_arr.findIndex(existsItem => existsItem.item_code === item.item_code), 1)
    localStorage.setItem(itemData, JSON.stringify(item_data_arr));
}

