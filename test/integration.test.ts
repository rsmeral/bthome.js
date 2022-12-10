import test from 'ava';
import {BTHomeDevice, humidity16, temperature} from '../src';
import {Data} from '../src/data';

const asHexString = (data: Data) => data.map((b) => `0${b.toString(16)}`.slice(-2)).join('');

test('BTHome Example', (t) => {
  t.is(
    asHexString(new BTHomeDevice('DIY-sensor').encode(temperature(25), humidity16(50.55))),
    '0201060b094449592d73656e736f720a16d2fc4002c40903bf13'
  );
});
