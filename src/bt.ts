import {Data} from './data';

export enum AdType {
  FLAGS = 1,
  COMPLETE_LOCAL_NAME = 9,
  SERVICE_DATA = 0x16
}

export const adElement = (type: AdType, data: Data): Data => [data.length + 1, type, ...data];
