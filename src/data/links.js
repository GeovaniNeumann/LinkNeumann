const WHATSAPP_NUMBER = '5541997552818'
const WHATSAPP_MESSAGE =
  'Olá! Vim pelo seu link e gostaria de um orçamento para um site.'

export const profile = {
  name: '@NeumannWebSolutions',
  bio: 'Ajudo pequenos negócios a venderem mais com sites profissionais e modernos.\nOrçamento rápido no link abaixo ⬇️',
}

export const socials = {
  instagram: 'https://www.instagram.com/neumann_web_solutions/',
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  site: 'https://www.neumannwebsolutions.com.br/',
}

export const links = [
  {
    id: 'whatsapp',
    label: 'Peça seu orçamento no WhatsApp',
    href: socials.whatsapp,
    icon: 'whatsapp',
    highlight: true,
  },
  {
    id: 'site',
    label: 'Neumann Web Solutions',
    href: socials.site,
    icon: 'globe',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: socials.instagram,
    icon: 'instagram',
  },
]
