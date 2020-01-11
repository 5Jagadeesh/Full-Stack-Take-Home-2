const fs = require('fs');
const data = fs.readFileSync('./data/employees.json');
var uuid = require('uuid-random');
const request = require('request');
const jsdom = require("jsdom");
const {JSDOM} = jsdom;

/*Get the Fav quote*/
const fav_quote =  ()=> {
    return new Promise((resolve, reject) => {
        request(
            {
                url: process.env.getFavQuote
            }, (err, httpResp, body) => {
                if (!err && httpResp.statusCode === 200) {
                    resolve(JSON.parse(body));
                } else {
                    reject (err);
                }
            });
    })
};

/*Get the Fav Joke*/
const fav_joke = ()=> {
    return new Promise((resolve, reject) => {
        request(
            {
                url: process.env.getFavJoke,
                //rejectUnauthorized: false
            }, (err, httpResp, body) => {
                if (!err && httpResp.statusCode === 200) {
                    const dom = new JSDOM(`${httpResp.body}`);
                    resolve (dom.window.document.querySelectorAll("p.subtitle")[0].innerHTML);
                } else {
                    reject(err);
                }
            });
    })
};
const postEmployee = (req)=> {
    return new Promise(async (resolve, reject) => {
        const employees = JSON.parse(data);
        /*Get the Fav quote*/
        const quote = await fav_quote().catch(err=>{
            reject (`Fav_Quote_Error, ${err}`);
        });
        /*Get the Fav Joke*/
        const joke = await  fav_joke().catch(err=>{
            reject (`Fav_Joke_Error, ${err}`);
        });
        //Update json with new employee
        const id = uuid();
        await employees.Employees.push({
            _id: id,
            "firstName": req.firstName,
            "lastName": req.lastName,
            "hireDate": req.hireDate,
            "role": req.role,
            "favoriteJoke": joke ? joke :"",
            "favoriteQuote": quote ? quote.toString() :""
        });
        fs.writeFile('./data/employees.json', JSON.stringify(employees),(err)=>{
            if(err){
                reject(`Failed to write to database ${err}`);
            }else{
                resolve({
                    Message : "New employee added successfully",
                    EmployeeId: id
                });
            }
        });
    });
};

/*Update Employee info*/
const updateEmployee = async (id,info)=> {
    return new Promise(async (resolve, reject) => {

        const employees = JSON.parse(data);
        let exist = false;
        await employees.Employees.filter((employee, index) => {

            if (employee._id === id) {
                exist = true;
               /* employees.Employees[index].firstName = info.firstName ? info.firstName : employees.Employees[index].firstName;
                employees.Employees[index].lastName = info.lastName ? info.lastName : employees.Employees[index].lastName;
                employees.Employees[index].role = info.role ? info.role : employees.Employees[index].role;
                employees.Employees[index].hireDate = info.hireDate ? info.hireDate : employees.Employees[index].hireDate;
                employees.Employees[index].favoriteQuote = info.favoriteQuote ? info.favoriteQuote : employees.Employees[index].favoriteQuote;
                employees.Employees[index].firstFavoriteJoke = info.firstFavoriteJoke ? info.firstFavoriteJoke : employees.Employees[index].firstFavoriteJoke;
                employees.Employees[index].secondFavoriteJoke = info.secondFavoriteJoke ? info.secondFavoriteJoke : employees.Employees[index].secondFavoriteJoke;*/
               info._id = id;
               employees.Employees[index] = info;
            }

        });
        if(!exist){
            reject (`Employee Id ${id} does not exist`);
        }
        fs.writeFile('./data/employees.json', JSON.stringify(employees), (err) => {
            if (err) {
                reject( `Failed to write to database, ${err}`);
            } else {
                resolve({
                    Message: "Successfully Updated employee information",
                    EmployeeId: id
                });
            }
        });
    });
};

const getAllEmployees = ()=>{
    return new Promise(async (resolve, reject) => {
        const employees = JSON.parse(data);
        resolve ({
            "Count": employees.Employees.length,
            "Employees":employees.Employees
        })
    });
};

const getEmployeeById = (id)=>{
    return new Promise(async (resolve, reject) => {
        const employees = JSON.parse(data);
        const emp = await employees.Employees.filter(employee=>{
            return employee._id === id;
        });
        resolve(emp);
    });
};

const deleteEmployeeById = (id)=>{
    return new Promise(async (resolve, reject) => {
        const employees = JSON.parse(data);
        let exists = false;
        await employees.Employees.filter((employee, index)=>{
            if(employee._id === id){
                exists = true;
                employees.Employees.splice(index,1);
                fs.writeFile('./data/employees.json', JSON.stringify(employees), (err) => {
                    if (err) {
                        reject( `Failed to write to database, ${err}`);
                    } else {
                        resolve({
                            "Message": "Successfully removed an employee"
                        })
                    }
                });

            }
        });
        if(!exists){
            reject(`Employee Id ${id} does not exist`);
        }
    });
};

module.exports ={
    postEmployee: postEmployee,
    updateEmployee : updateEmployee,
    getAllEmployees : getAllEmployees,
    getEmployeeById : getEmployeeById,
    deleteEmployeeById: deleteEmployeeById
};
