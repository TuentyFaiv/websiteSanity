import { MdPerson } from 'react-icons/md';

export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Author name',
      type: 'string'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontend will require a slug to be set to be able to show the person.',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      description: 'Author info',
      type: 'block_content'
    },
    {
      name: 'image',
      title: 'Image',
      description: 'Author image profile',
      type: 'figure'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}