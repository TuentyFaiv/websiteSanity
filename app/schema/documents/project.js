import { format } from 'date-fns';
import { MdComputer } from 'react-icons/md';

export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: MdComputer,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'author'
        }
      ]
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
    {
      name: 'content',
      title: 'Project description',
      type: 'block_content'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'list_technologies',
      type: 'list',
      title: 'List technologies'
    },
    {
      name: 'url_public',
      type: 'url',
      title: 'URL Public'
    },
    {
      name: 'likes',
      type: 'number',
      title: 'Likes'
    },
    {
      name: 'dislikes',
      type: 'number',
      title: 'Dislikes'
    },
    {
      name: 'shared',
      type: 'number',
      title: 'Shareds'
    },
    {
      name: 'comments',
      type: 'array',
      of: [
        {
          type: 'comment'
        }
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
      slug: 'slug.current',
      media: 'mainImage'
    },
    prepare({ title = "Without Title", date, slug = "without-title", media }) {
      const path = `/${date.split('-')[0]}-${date.split('-')[1]}/${slug}`;

      return {
        title,
        media,
        subtitle: date ? path : 'Missing publishing date'
      };
    }
  }
}