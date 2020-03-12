export default {
  name: 'block_content',
  title: 'Description',
  type: 'array',
  of: [
    { type: 'block' },
    {
      type: 'image',
      options: { hotspot: true }
    }
  ]
};