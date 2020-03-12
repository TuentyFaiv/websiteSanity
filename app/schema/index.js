import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import workflow types
import workflowMetadata from './workflow/metadata'

// Import custom types

import project from './documents/project';
import blog from './documents/blog';
import author from './documents/author'
import figure from './objects/figure';
import list from './objects/listTechnologies';
import comment from './objects/comment';
import blockContent from './objects/blockContent';

export default createSchema({
  name: 'tuentyfaiv-workflow',
  types: schemaTypes.concat([
    project,
    author,
    blog,
    figure,
    list,
    comment,
    blockContent,
    workflowMetadata
  ])
})
