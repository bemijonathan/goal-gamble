import {queryType} from "nexus";
import {Hello} from "./types";
import {queryField} from "@nexus/schema";

export const hello =  queryField('hello', {
    type: 'Hello',
    resolve(){
        return {name: 'Hello'}
    }
})
