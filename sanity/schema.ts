import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import profile from './profile'
import blogs from './blogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project,profile,blogs],
}
