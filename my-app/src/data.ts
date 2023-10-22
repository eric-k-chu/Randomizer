
let data: Record<string, string[]> = {
  'class-1': ['bob', 'john', 'joe'],
  'class-2': ['bob', 'john', 'joe'],
  'class-3': ['bob', 'john', 'joe'],
  'class-4': ['bob', 'john', 'joe'],
  'class-5': ['bob', 'john', 'joe'],
  'class-6': ['bob', 'john', 'joe'],
  'class-7': ['bob', 'john', 'joe'],
}

const localData = localStorage.getItem('data');

if (localData) {
  data = JSON.parse(localData);
}

window.addEventListener('beforeunload', () => localStorage.setItem('data', JSON.stringify(data)))

export default data