const steps = {
    '/create-project': {
        prev: null,
        next: { label: 'Create new project', to:  '/item-list' }
    },
    '/item-list': {
        prev: { label: 'Back', to: '/create-project' },
        next: { label: 'Proceed', to :'/item-info' }
    },
    '/item-info': {
        prev: { label: 'Back', to: '/item-list' },
        next: { label: 'Save', to: '/review-list'}
    },
    '/review-list': {
        prev: { label: 'Back', to: '/item-info' },
        next: { label: 'Export', to: '/report' }
    },
    '/report': {
        prev: { label: '', to: '/review-list' },
        next: null
    }
}

export default steps;