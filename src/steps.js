const steps = {
    '/create-project': {
        prev: null,
        next: { label: 'Create new project', to:  '/item-list' }
    },
    '/item-list': {
        prev: { label: 'Back', to: '/create-project' },
        next: null
    }
}

export default steps;