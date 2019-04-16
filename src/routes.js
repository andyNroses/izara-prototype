/* Pages */
import CreateProject from './pages/CreateProject';
import ItemList from './pages/ItemList';

/* Routes */
const routes = [
    {
        title: 'Create New Project',
        path: '/create-project',
        status: 'process',
        icon: 'folder-add',
        component: CreateProject
    },
    {
        title: 'Slect List Items',
        path: '/item-list',
        status: 'wait',
        icon: 'check-square',
        component: ItemList
    }
];

export default routes;