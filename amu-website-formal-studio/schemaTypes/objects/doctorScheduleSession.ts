import {defineField, defineType} from 'sanity'

const weekdays = [
  ['mon', '週一'],
  ['tue', '週二'],
  ['wed', '週三'],
  ['thu', '週四'],
  ['fri', '週五'],
  ['sat', '週六'],
  ['sun', '週日'],
] as const

export const doctorScheduleSession = defineType({
  name: 'doctorScheduleSession',
  title: '門診時段',
  type: 'object',
  fields: [
    defineField({name: 'label', title: '時段名稱', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'time', title: '時間', type: 'string', validation: (Rule) => Rule.required()}),
    ...weekdays.map(([name, title]) =>
      defineField({
        name,
        title,
        type: 'boolean',
        initialValue: false,
      }),
    ),
  ],
  preview: {
    select: {title: 'label', subtitle: 'time'},
  },
})
