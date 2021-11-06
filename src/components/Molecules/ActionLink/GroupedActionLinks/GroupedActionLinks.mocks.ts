import { QuickAction } from '../ActionLink.interface'

export const actionLinks: QuickAction[] = [
  {
    actionLabel: 'Action Link 1',
    href: 'http://saiyan.content-learning.com',
    to: '',
    branded: true,
    target: '_blank',
    links: [],
  },
  {
    actionLabel: 'Action Link 2',
    href: 'http://saiyan.content-learning.com',
    to: '',
    branded: false,
    target: '_blank',
    links: [],
  },
]

export const actionToLinks: QuickAction[] = [
  {
    actionLabel: 'Action To Link 1',
    to: '/profile',
    href: null,
    branded: false,
    target: '_blank',
    links: [],
  },
  {
    actionLabel: 'Action To Link 2',
    to: '/history',
    href: '',
    branded: false,
    target: '_blank',
    links: [
      {
        actionLabel: 'Action Link 1',
        href: 'http://saiyan.content-learning.com',
        to: '',
        branded: true,
        target: '_blank',
        links: [],
      },
      {
        actionLabel: 'Action Link 2',
        href: 'http://saiyan.content-learning.com',
        to: '',
        branded: false,
        target: '_blank',
        links: [],
      },
    ],
  },
]
