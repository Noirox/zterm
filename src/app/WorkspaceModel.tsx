import {action, computed, observable} from 'mobx';
import * as React from 'react';

export class WorspaceStore {

  @observable
  panes: PaneModel[];

  constructor() {
    this.panes = [
      new PaneModel()
    ];
  }
}

class TabModel implements ITabModel {
  title: string;
  id: string;
  @observable
  content: JSX.Element;

  constructor(opts?: { title: string, id: string, content: JSX.Element }) {
    if (opts) {
      this.title = opts.title;
      this.id = opts.id;
      this.content = opts.content;
    }
  }
}

const undefinedTab = new TabModel();

export class PaneModel {
  private tabCounter = 0;

  @observable
  tabs: ITabModel[] = [];

  @observable
  active: ITabModel = undefinedTab;

  @action
  setActiveTab = (tab: ITabModel) => {
    this.active = tab;
  };

  @action
  getActiveTab = (): ITabModel => {
    return this.active;
  };

  @action
  removeTab = (tab: ITabModel) => {
    const idx = this.tabs.indexOf(tab);
    this.tabs.splice(idx, 1);
    tab.content = null;

    if (tab.id.startsWith('yate-tabs')) {
      this.tabCounter--;
    }

    if (this.tabs.length === 0) {
      this.setActiveTab(undefinedTab);
      return;
    }

    if (this.tabs.length > 0 && (this.active && tab.id === this.active.id)) {
      if (idx < this.tabs.length) {
        this.setActiveTab(this.tabs[idx]);
      } else {
        this.setActiveTab(this.lastTab);
      }
    }
  };

  @action
  addTab = (tab: ITabModel) => {
    if (!tab.id) {
      tab.id = `yate-tabs-${this.tabCounter++}`;
    }

    if (this.containsTab(tab.id)) {
      this.setActiveTab(this.findById(tab.id));
    } else {
      this.tabs.push(tab);
    }
  };

  private containsTab = (tabId: string): boolean =>
    !!this.findById(tabId);

  private findById = (tabId: string): ITabModel =>
    this.tabs.find(tab => tab.id === tabId);

  @computed
  private get lastTab() {
    return this.tabs[this.tabs.length - 1];
  }

  constructor() {
  }
}

export class SimpleBody extends React.Component {

  render() {
    return (<div>fuuuck simple</div>);
  }
}


export interface ITabModel {
  id: string | undefined;
  title: string | undefined;
  content: JSX.Element | undefined;
}


export const workspaceState = new WorspaceStore();
