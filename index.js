const notes = [
  {
    title: 'Meeting Notes',
    content: 'Discuss project roadmap',
    isPinned: true,
  },
  { title: 'Grocery List', content: 'Buy milk, eggs, bread', isPinned: false },
  {
    title: 'Workout Plan',
    content: 'Push day: Bench, Shoulder Press',
    isPinned: true,
  },
  { title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos', isPinned: false },
];

notes.forEach((note) => {
  console.log(note.title);
});
