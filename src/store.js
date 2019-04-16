import React from 'react';
import useGlobalHook from 'use-global-hook';

const initialState = {
  steps: [
      {
          title: 'Create New Project',
          path: '/create-project',
          status: 'process',
          icon: 'folder-add',
      },
      {
          title: 'Slect List Items',
          path: '/item-list',
          status: 'wait',
          icon: 'check-square',
      }
  ],
  selectedItems: []
}

const actions = {
  updateStep: (store, pathname, status) => {
    const steps = store.state.steps;
    for (let i in steps) {
      if (steps[i].path == pathname) {
        steps[i].status = status;
        break;
      }
    }
    store.setState({ steps: steps });
  },
  updateSelectedItems: (store, items) => {
    store.setState({ selectedItems: store.state.selectedItems.concat(items) });
  }
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;