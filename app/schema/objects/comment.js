export default {
  name: 'comment',
  type: 'object',
  title: 'Comment',
  fields: [
    {
      name: 'nick_twitter',
      type: 'string',
      title: 'Nick Twitter'
    },
    {
      name: 'text_comment',
      type: 'string',
      title: 'Text comment'
    },
    {
      name: 'date_comment',
      type: 'date',
      title: 'Date comment',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today'
      }
    }
  ]
}