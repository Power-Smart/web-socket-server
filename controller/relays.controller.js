import { clients, wss } from "../init.js";

import axios from axios;
import _ from 'lodash';



export const switchRelays = async (req,res) => {

    let notFoundRelays = [];

    try{

        const {switchingScheme, sentTime} = req.body;

        if(_.isEmpty(switchingScheme)){
            throw new Error("Cannot Switch. Empty body");
        }

        try{
            await Promise.all(Object.entries(switchingScheme).forEach(([key, value])=>{
                
                if(clients.clientList.hasOwnPropert(key)){
                    clients.clientList[key].send(value);
                }else{
                    notFoundRelays.push({key: value});
                }

                if(!_.isEmpty(notFoundRelays)){
                    res.status(200).send();
                }
            }));

        }catch(error){
            throw new Error(error.message);
        }

    }catch(error){

    }
    
}