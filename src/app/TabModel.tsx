import {observable} from 'mobx';

export class TabModel implements ITabModel {
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

export const undefinedTab = new TabModel();

export interface ITabModel {
  id: string | undefined;
  title: string | undefined;
  content: JSX.Element | undefined;
}
