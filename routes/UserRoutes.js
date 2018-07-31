
const express=require('express');
const Router =express.Router();
//var HashMap = require('hashmap');
//var map = new HashMap();

let map_memory={};

//map_memory[userId];
//map_memory[userId]={'userId':'','username':''};

class UserRoutes{

    static getHandler(req,resp){
        let userId=req.params.userId;
        let dataToReturn = map_memory[userId];
        console.log(""+dataToReturn);
        if(dataToReturn!==undefined){

            resp.status(200).send(JSON.stringify(dataToReturn));
        }else{
            resp.status(404).send('User not found');
        }
    }

    static addNewUser(req,resp){
        let uId = req.body.userId;
        let uName = req.body.userName;
        map_memory[uId]={'username':uName};

        if(map_memory[uId]!==undefined){

            console.log(""+map_memory[uId]);
            return resp.status(200).send("User added");
        }else{
            return resp.status(400).send("User addition failed");
        }
    }
}

Router.get('/:userId',UserRoutes.getHandler);
Router.post('/addNewUser',UserRoutes.addNewUser);
//Router['get']('/name/:username',UserRoutes.getHandler);

module.exports=Router;