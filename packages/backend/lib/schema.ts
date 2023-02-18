// api/schema.ts
import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import { join } from 'path'
// import * as types from './domain'

export const schema = makeSchema({
  types: {

  },
  outputs: {
    typegen:join(__dirname, '../generated/nexus-typegen.ts'),
    schema:join(__dirname, '../schema.graphql'),
  },
  plugins: [
    nexusPrisma(
    //     {
    //   experimentalCRUD: true,
    //   inputs: {
    //     prismaClient: '',
    //   }
    // }
    )
  ],
  // asdf
})
