***Backend***

**How to run**
1. cd boilerplate
2. Run `npm install`
3. Run  `npm start`
4. The server will run on `https://localhost:3000`

*List of Endpoints*
1. Get the list of all employees

    `http://localhost:3000/api/employees`
2. Get the employee details based on _id 

      `http://localhost:3000/api/employees/_id`
      
      ex: `http://localhost:3000/api/employees/03ed4a97-7dbd-4078-9dc7-3f5de49b5837`
3. Create an employee: 

    method: POST
    url: `http://localhost:3000/api/employees`
    sample request: `{
                    	"firstName" : "Jagadeesh",
                        "lastName" : "T E",
                        "hireDate" : "2019-01-01",
                        "role" : "VP"
                    }`
4. Update the employee information

     method: PUT
        url: `http://localhost:3000/api/employees/_id`
        sample request: `{
                         	"firstName" : "Jagz",
                             "lastName" : "T",
                             "hireDate" : "2020-01-01",
                             "role" : "VP",
                             "favoriteJoke":"joke test",
                             "favoriteQuote":"quote test"
                         }`
5. Delete the employee

    method: Delete
    url: `http://localhost:3000/api/employees/_id`
