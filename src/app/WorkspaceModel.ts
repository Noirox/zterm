import {action, computed, observable} from 'mobx';
import {ITabModel, undefinedTab} from './TabModel';
import {WelcomeTab} from './WelcomePanel';

export class WorspaceStore {

  @observable
  panes: PaneModel[];

  constructor() {
    this.panes = [
      new PaneModel()
    ];
  }
}


export class PaneModel {
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
    const idx = this.tabs.findIndex(exitingTab => exitingTab.id === tab.id);
    this.tabs.splice(idx, 1);

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
      this.setActiveTab(tab);
    }
  };
  private tabCounter = 0;
  private containsTab = (tabId: string): boolean =>
    !!this.findById(tabId);

  private findById = (tabId: string): ITabModel =>
    this.tabs.find(tab => tab.id === tabId);

  constructor() {
  //  this.localStorageSync();
    this.addTab(WelcomeTab);
  }

  @computed
  private get lastTab() {
    return this.tabs[this.tabs.length - 1];
  }

  @action
  selectTabByIdx(idx: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0 = 1) {
    const arrayIdx = idx === 0 ? this.tabs.length - 1 : idx - 1;
    if (this.tabs.length > arrayIdx && this.active !== this.tabs[arrayIdx]) {
      this.setActiveTab(this.tabs[arrayIdx]);
      console.log('xx');
    }
  }

  @action
  closeCurrentActiveTab() {
    this.removeTab(this.getActiveTab());
  }

//   private localStorageSync() {
//     const initTabs = JSON.parse(localStorage.tabs || '[]');
//     console.log(initTabs);
//     this.tabs = initTabs.map((tab: ITabModel) => {
//       if (tab.id === 'settings') {
//         return SettingsTab;
//       } else if (tab.id === 'terminal') {
//         return TerminalTab;
//       } else
//         return undefined;
//     }).filter((tab: ITabModel) => !!tab);
//     this.active = this.tabs[JSON.parse(localStorage.active || '0')];
//
//     autorun(() => {
//       const ac = this.active;
//       localStorage.tabs = JSON.stringify(toJS(contentToJs(this.tabs))) || [];
//       localStorage.active = JSON.stringify(this.tabs.findIndex(exitingTab => exitingTab.id === ac.id));
//     });
//   }
// }
//
//
// function contentToJs(tabs: ITabModel[]) {
//   return tabs.map(tab => {
//     const t = new TabModel({...tab});
//     t.content = undefined;
//     return t;
//   });

}

export const workspaceState = new WorspaceStore();
