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
          title: 'Select List Items',
          path: '/item-list',
          status: 'wait',
          icon: 'check-square',
      },
      {
        title: 'Add Item Information',
        path: '/item-info',
        status: 'wait',
        icon: 'info-circle',
      },
      {
        title: 'Review List',
        path: '/review-list',
        status: 'wait',
        icon: 'check',
      },
      {
        title: 'Report',
        path: '/report',
        status: 'wait',
        icon: 'file-text',
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
  },
  addItemInfo: (store, item, info) => {
    const selectedItems = store.state.selectedItems;
    for (let i in selectedItems) {
      if (selectedItems[i].name == item.name) {
        selectedItems[i].info = info;
        break;
      }
    }
    store.setState({ selectedItems: selectedItems });
  }
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;