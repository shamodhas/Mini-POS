export class Customer {
    constructor(customer_id, customer_nic, customer_name, customer_salary, customer_address) {
        this._customer_id = customer_id;
        this._customer_nic = customer_nic;
        this._customer_name = customer_name;
        this._customer_salary = customer_salary;
        this._customer_address = customer_address;
    }

    set customer_id(customer_id) {
        this._customer_id = customer_id;
    }

    get customer_id() {
        return _customer_id;
    }

    set customer_nic(customer_nic) {
        this._customer_nic = customer_nic;
    }

    get customer_nic() {
        return _customer_nic;
    }

    set customer_name(customer_name) {
        this._customer_name = customer_name;
    }

    get customer_name() {
        return _customer_name;
    }

    set customer_salary(customer_salary) {
        this._customer_salary = customer_salary;
    }

    get customer_salary() {
        return _customer_salary;
    }

    set customer_address(customer_address) {
        this._customer_address = customer_address;
    }

    get customer_address() {
        return _customer_address;
    }
}