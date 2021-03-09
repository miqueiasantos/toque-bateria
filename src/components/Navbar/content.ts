interface MenuItem {
  text: string
  link: string
  anchor?: boolean
}

const content: MenuItem[] = [
  { text: 'Home', link: '' },
  { text: 'Conteúdo', link: 'content' },
  { text: 'O Professor', link: '#teacher', anchor: true },
  { text: 'Planos', link: '#plans', anchor: true },
  { text: 'Área do Aluno', link: '#external' },
]

export default content
