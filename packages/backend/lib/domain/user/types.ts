import { objectType, queryType } from 'nexus'



export const Hello = objectType({
    name:"hello",
    definition(t) {
        t.string('name')
    }
});
