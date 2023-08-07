import { clients, wss } from "../init.js";

import axios from axios;
import _ from 'lodash';



export const switchRelays = async (req,res) => {

    let notFoundRelays = [];
    let foundRelays = [];

    try{

        const {switchingScheme} = req.body;

        if(_.isEmpty(switchingScheme)){
            throw new Error("Cannot Switch. Empty body");
        }

        try{
            await Promise.all(Object.entries(switchingScheme).forEach(([key, value])=>{
                
                if(clients.clientList.hasOwnPropert(key)){
                    clients.clientList[key].send(value);
                    foundRelays.push({key: value});

                }else{
                    notFoundRelays.push({key: value});
                }

            }));

        }catch(error){
            throw new Error(error.message);
        }

    }catch(error){

    }
    
}