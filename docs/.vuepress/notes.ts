import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

 
const bookNote = defineNoteConfig({
  dir: 'book',
  link: '/book',
  sidebar: ['/notes/study/book/README.md','/notes/study/book/Java并发编程的艺术/README.md'],
})

const Java并发编程的艺术 = defineNoteConfig({
  dir: 'book/javabfbcys',
  link: '/book/javabfbcys/',
  sidebar: ['/book/','/book/javabfbcys/'],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [bookNote,Java并发编程的艺术],
})
