import {Customer} from "../model/customer.js";
import {getAllCustomerDB, saveCustomerDB, updateCustomerDB, deleteCustomerDB} from "../DB/db.js";

export class CustomerController {
    constructor() {
        $('#btnCustomerSave').click(this.handleSaveCustomerValidation.bind(this));
        $('#btnCustomerUpdate').click(this.handleUpdateCustomerValidation.bind(this));
        $('#btnCustomerDelete').click(this.handleDeleteCustomerValidation.bind(this));

        this.handleSaveCustomer.bind(this);
        this.handleLoadCustomers();
    }

    handleLoadCustomers() {
        let customer_data_arr = getAllCustomerDB();

        $('#tblCustomerBody').empty();

        customer_data_arr.map((result, index) => {
            var row = "<tr class='row-data'>" +
                "<td>" + result._customer_id + "</td>" +
                "<td>" + result._customer_nic + "</td>" +
                "<td>" + result._customer_name + "</td>" +
                "<td>" + result._customer_salary + "</td>" +
                "<td>" + result._customer_address + "</td>" +
                "</tr>";
            $('#tblCustomerBody').append(row);
        })
    }

    handleSaveCustomerValidation() {
        var customer_id = $('#txtNewCustomerID').val();
        var customer_nic = $('#txtNewCustomerNIC').val();
        var customer_name = $('#txtNewCustomerName').val();
        var customer_salary = $('#txtNewCustomerSalary').val();
        var customer_address = $('#txtNewCustomerAddress').val();

        const regexNumber = /^\d+$/;

        !regexNumber.test(customer_id) ?
            alert('Invalid Id') :
            (!customer_nic) ?
                alert('Invalid Nic') :
                (!customer_name) ?
                    alert('Invalid Name') :
                    (!customer_salary) ?
                        alert('Invalid Salary') :
                        (!customer_address) ?
                            alert('Invalid Address') :
                            this.handleSaveCustomer();
    }

    handleSaveCustomer() {
        var customer_id = $('#txtNewCustomerID').val();
        var customer_nic = $('#txtNewCustomerNIC').val();
        var customer_name = $('#txtNewCustomerName').val();
        var customer_salary = $('#txtNewCustomerSalary').val();
        var customer_address = $('#txtNewCustomerAddress').val();

        let customer = new Customer(
            customer_id,
            customer_nic,
            customer_name,
            customer_salary,
            customer_address
        );

        saveCustomerDB(customer);
        this.handleLoadCustomers();
    }

    handleUpdateCustomerValidation() {
        var customer_id = $('#txtEditCustomerID').val();
        var customer_nic = $('#txtEditCustomerNIC').val();
        var customer_name = $('#txtEditCustomerName').val();
        var customer_salary = $('#txtEditCustomerSalary').val();
        var customer_address = $('#txtEditCustomerAddress').val();

        (getAllCustomerDB().findIndex(customer => customer.customer_id === customer_id ) < 0) ?
            alert("not found customer") :
            (!customer_nic) ?
                alert('Invalid Nic') :
                (!customer_name) ?
                    alert('Invalid Name') :
                    (!customer_salary) ?
                        alert('Invalid Salary') :
                        (!customer_address) ?
                            alert('Invalid Address') :
                            this.handleUpdateCustomer();
    }

    handleUpdateCustomer() {
        var customer_id = $('#txtEditCustomerID').val();
        var customer_nic = $('#txtEditCustomerNIC').val();
        var customer_name = $('#txtEditCustomerName').val();
        var customer_salary = $('#txtEditCustomerSalary').val();
        var customer_address = $('#txtEditCustomerAddress').val();

        let customer = new Customer(
            customer_id,
            customer_nic,
            customer_name,
            customer_salary,
            customer_address
        );

        updateCustomerDB(customer);
        this.handleLoadCustomers();
    }

    handleDeleteCustomerValidation(){
        var customer_id = $('#txtEditCustomerID').val();
        (getAllCustomerDB().findIndex(customer => customer.customer_id === customer_id ) < 0) ?
            alert("not found customer") :
            this.handleDeleteCustomer();
    }

    handleDeleteCustomer() {
        var customer_id = $('#txtEditCustomerID').val();
        var customer_nic = $('#txtEditCustomerNIC').val();
        var customer_name = $('#txtEditCustomerName').val();
        var customer_salary = $('#txtEditCustomerSalary').val();
        var customer_address = $('#txtEditCustomerAddress').val();

        let customer = new Customer(
            customer_id,
            customer_nic,
            customer_name,
            customer_salary,
            customer_address
        );

        deleteCustomerDB(customer);
        this.handleLoadCustomers();
    }
}

new CustomerController();
