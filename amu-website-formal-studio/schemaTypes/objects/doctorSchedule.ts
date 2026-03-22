import {defineField, defineType} from 'sanity'

export const doctorSchedule = defineType({
  name: 'doctorSchedule',
  title: '門診班表',
  type: 'object',
  fields: [
    defineField({name: 'morning', title: '早診', type: 'doctorScheduleSession'}),
    defineField({name: 'afternoon', title: '午診', type: 'doctorScheduleSession'}),
    defineField({name: 'evening', title: '晚診', type: 'doctorScheduleSession'}),
  ],
})
