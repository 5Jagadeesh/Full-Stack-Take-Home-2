'use strict';

const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({passError: true});
const schemas = require('../schemas/Schema');
const service = require('../services/employees');


/*Add an employee*/
router.post('', validator.body(schemas.postSchema),
    (req, res, next) => {
   service.postEmployee(req.body).then(resp=>{
       res.status(200).send(resp);
   }).catch(err=>{
       res.status(500).send({
           Message : "Failed to add a new employee",
           Reason : err
       })
   }).catch(next);
});

/*Update an Employee*/
router.put('/:id',validator.body(schemas.putSchema.body),validator.params(schemas.putSchema.params),
 (req,res,next)=>{
    service.updateEmployee(req.params.id, req.body).then(resp=>{
        res.status(200).send(resp);
    }).catch(err=>{
        res.status(500).send({
            Message : "Failed to update",
            Reason : err
        })
    }).catch(next);
});

router.get('',(req,res,next)=>{
   service.getAllEmployees().then(resp=>{
       res.status(200).send(resp)
   }).catch(err=>{
       res.status(500).send({
           Message : "Failed to pull list of employees",
           Reason : err
       })
   }).catch(next);
});

router.get('/:id',validator.params(schemas.putSchema.params),(req,res,next)=>{
    service.getEmployeeById(req.params.id).then(resp=>{
        res.status(200).send(resp)
    }).catch(err=>{
        res.status(500).send({
            Message : "Failed to pull the employees data",
            Reason : err
        })
    }).catch(next);
});

router.delete('/:id',validator.params(schemas.putSchema.params),(req,res,next)=>{
    service.deleteEmployeeById(req.params.id).then(resp=>{
        res.status(200).send(resp)
    }).catch(err=>{
        res.status(500).send({
            Message : "Failed to delete an employee",
            Reason : err
        })
    }).catch(next);
});

module.exports = router;
