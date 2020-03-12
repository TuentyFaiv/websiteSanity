export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub repo Studio',
            value: 'https://github.com/TuentyFaiv/websiteSanity.git',
            category: 'Code'
          },
          {
            title: 'GitHub repo Frontend',
            value: 'https://github.com/TuentyFaiv/website.git',
            category: 'Code'
          },
          { title: 'Frontend', value: '<#<deployments.web.url>#>', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent content', order: '_createdAt desc', types: ['blog', 'project'] },
      layout: { width: 'medium' }
    },
    {
      name: 'sanity-tutorials'
    }
  ]
}
