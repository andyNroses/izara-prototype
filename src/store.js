import React from 'react';
import useGlobalHook from 'use-global-hook';
import ls from 'local-storage';


const steps = [
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
];

const storedState = ls.get('state');
const persistState = (state) => {
  ls('state', JSON.stringify(state));
} 

const initialState = {
  projectName: 'Dolpin ApS',
  steps,
  selectedItems: {},
  itemsArray: []
}

const usedState = storedState && JSON.parse(storedState) || initialState;

const actions = {
  resetItems: (store) => {
    store.setState(initialState);
    persistState(initialState);
  },
  updateProjectName: (store, projectName) => {
    store.setState({ projectName });
    persistState(store.state);
  },
  updateStep: (store, pathname, status) => {
    const steps = store.state.steps;
    for (let i in steps) {
      if (steps[i].path == pathname) {
        steps[i].status = status;
        break;
      }
    }
    store.setState({ steps: steps });
    persistState(store.state);
  },
  updateSelectedItems: (store, items, range) => {
    const selectedItems = store.state.selectedItems;
    selectedItems[`${range.start}-${range.end}`] = items;
    const ranges = Object.keys(selectedItems);
    let itemsArray = [];
    for (let i in ranges) {
      const rangeItems = selectedItems[ranges[i]];
      for (let j in rangeItems) {
        itemsArray.push(rangeItems[j]);
      }
    }
    store.setState({ selectedItems, itemsArray });
    persistState(store.state);
  },
  addItemInfo: (store, item, info) => {
    const itemsArray = store.state.itemsArray;
    for (let i in itemsArray) {
      if (itemsArray[i].name == item.name) {
        itemsArray[i].info = info;
        break;
      }
    }
    store.setState({ itemsArray });
    persistState(store.state);
  },
  resetSteps: (store, pathname) => {
    const steps = store.state.steps;
    let status = 'process';
    for (let i in steps) {
      steps[i].status = status;
      if (steps[i].path == pathname) {
        status = 'wait';
      }
    }
    store.setState({ steps });
    persistState(store.state);
  }
};

const useGlobal = useGlobalHook(React, usedState, actions);

export default useGlobal;