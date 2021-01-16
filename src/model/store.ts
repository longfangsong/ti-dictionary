import {Item} from "./item";
import Fuse from "fuse.js";
import * as data from '../assets/en.json';

const searchOptions = {
    keys: [{
        name: 'name',
        weight: 0.45
    }, {
        name: 'alias',
        weight: 0.4
    }, {
        name: 'introduction',
        weight: 0.15
    }],
}

export class Store {
    public readonly fuse: Fuse<Item>;

    constructor(public readonly items: Array<Item>) {
        this.fuse = new Fuse(items, searchOptions);
    }
}

export const store = new Store((data as any).default as any);