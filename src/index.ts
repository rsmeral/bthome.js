import {BTHomeEncoder} from './encoder';
import {BTHomeDeviceProps} from './types';

export class BTHomeDevice {
  constructor(public props?: BTHomeDeviceProps) {}

  encode = () => {
    return new BTHomeEncoder(this.props);
  };
}
