import { PartialDeep } from "type-fest";

import data from "./data.json";

export interface ResData<Data> {
  data?: Data;
  status?: number;
  error?: string;
}

interface MockData {
  users: [];
  services: [];
}

class MockBack {
  data: MockData;
  constructor(data: MockData) {
    this.data = data;
  }

  private delaySimulation<Data>(
    data: Data,
    ms?: number,
  ): Promise<ResData<Data>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, ms);
    });
  }

  private _getByPath(pathPart: string, data: PartialDeep<MockData>) {
    const res = data[pathPart];
    if (res) return res;
    return null;
  }

  private _withErrorAndStatusData<Data>(data: Data) {
    if (data) {
      return { data, status: 200 };
    } else {
      return { data: null, status: 500, error: "Error, no data" };
    }
  }

  private _get<Data>(path: string): Data | null {
    const pathsArr = path.split("/");

    return pathsArr.reduce((data, pathPart) => {
      if (pathPart && !/\d/g.test(pathPart)) {
        return this._getByPath(pathPart, data);
      }
      if (Array.isArray(data) && /\d/g.test(pathPart)) {
        const el = data.find((el) => el.id === Number(pathPart));
        return el;
      }
      return data;
    }, this.data);
  }

  get<Data>(path: string) {
    const res = this._get<Data>(path);
    const data = this._withErrorAndStatusData<Data>(res);
    return this.delaySimulation<Data>(data, 300);
  }
}
export const instance = new MockBack(data);
