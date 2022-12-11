import test from 'ava';
import {
  battery,
  BTHomeDevice,
  buttonLongPress,
  buttonNone,
  buttonPress,
  buttonTriplePress,
  co2,
  count,
  current,
  dewpoint,
  dimmerRotateLeft,
  distanceMeters,
  distanceMillimeters,
  duration,
  energy,
  genericBoolean,
  humidity16,
  illuminance,
  massKg,
  massLb,
  moisture16,
  openingOpen,
  pm10,
  pm25,
  power,
  powerOn,
  pressure,
  rotation,
  speed,
  temperature,
  temperature10,
  tvoc,
  uvIndex,
  voltage
} from '../src';
import {Data} from '../src/data';

const asHexString = (data: Data) => data.map((b) => `0${b.toString(16)}`.slice(-2)).join('');

test('Sensor: Pressure', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(pressure(1008.83))),
    '0201060c09546573742053656e736f720816d2fc4004138a01'
  );
});

test('Sensor: Illuminance', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(illuminance(13460.67))),
    '0201060c09546573742053656e736f720816d2fc4005138a14'
  );
});

test('Sensor: Mass (Kg)', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(massKg(80.3))),
    '0201060c09546573742053656e736f720716d2fc40065e1f'
  );
});

test('Sensor: Mass (Lb)', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(massLb(74.86))),
    '0201060c09546573742053656e736f720716d2fc40073e1d'
  );
});

test('Sensor: Dew Point', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(dewpoint(17.38))),
    '0201060c09546573742053656e736f720716d2fc4008ca06'
  );
});

test('Sensor: Count', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(count(96))),
    '0201060c09546573742053656e736f720616d2fc400960'
  );
});

test('Sensor: Energy', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(energy(1346.067))),
    '0201060c09546573742053656e736f720816d2fc400a138a14'
  );
});

test('Sensor: Power', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(power(69.14))),
    '0201060c09546573742053656e736f720816d2fc400b021b00'
  );
});

test('Sensor: Voltage', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(voltage(3.074))),
    '0201060c09546573742053656e736f720716d2fc400c020c'
  );
});

test('Sensor: CO2', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(co2(1250))),
    '0201060c09546573742053656e736f720716d2fc4012e204'
  );
});

test('Sensor: VOC', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(tvoc(307))),
    '0201060c09546573742053656e736f720716d2fc40133301'
  );
});

test('Sensor: Moisture (16)', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(moisture16(30.74))),
    '0201060c09546573742053656e736f720716d2fc4014020c'
  );
});

test('Sensor: Rotation', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(rotation(307.4))),
    '0201060c09546573742053656e736f720716d2fc403f020c'
  );
});

test('Sensor: Distance (mm)', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(distanceMillimeters(12))),
    '0201060c09546573742053656e736f720716d2fc40400c00'
  );
});

test('Sensor: Distance (m)', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(distanceMeters(7.8))),
    '0201060c09546573742053656e736f720716d2fc40414e00'
  );
});

test('Sensor: Duration', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(duration(13.39))),
    '0201060c09546573742053656e736f720816d2fc40424e3400'
  );
});

test('Sensor: Current', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(current(13.39))),
    '0201060c09546573742053656e736f720716d2fc40434e34'
  );
});

test('Sensor: Speed', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(speed(133.9))),
    '0201060c09546573742053656e736f720716d2fc40444e34'
  );
});

test('Sensor: Temperature (10)', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(temperature10(27.3))),
    '0201060c09546573742053656e736f720716d2fc40451101'
  );
});

test('Sensor: UV Index', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(uvIndex(5.0))),
    '0201060c09546573742053656e736f720616d2fc404632'
  );
});

test('Multi Sensor: Pm25 Pm10', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(pm25(3090), pm10(7170))),
    '0201060c09546573742053656e736f720a16d2fc400d120c0e021c'
  );
});

test('Multi Sensor: Temperature, Humidity (16)', (t) => {
  t.is(
    asHexString(new BTHomeDevice('DIY-sensor').encode(temperature(25), humidity16(50.55))),
    '0201060b094449592d73656e736f720a16d2fc4002c40903bf13'
  );
});

test('Multi Sensor: Temperature, Humidity (16), Battery', (t) => {
  t.is(
    asHexString(new BTHomeDevice('ATC_8D18B2').encode(battery(93), temperature(23.97), humidity16(63.27))),
    '0201060b094154435f3844313842320c16d2fc40015d025d0903b718'
  );
});

test('Multi Sensor: Triple Temperature, Double Humidity (16), Battery', (t) => {
  t.is(
    asHexString(
      new BTHomeDevice('BTHome sensor 18B2').encode(
        temperature(25.06),
        temperature(25.11),
        temperature(22.55),
        humidity16(63.27),
        humidity16(60.71),
        battery(93)
      )
    ),
    '02010613094254486f6d652073656e736f7220313842321516d2fc4002ca0902cf0902cf0803b71803b717015d'
  );
});

test('Binary Sensor: Generic Boolean', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(genericBoolean(true))),
    '0201060c09546573742053656e736f720616d2fc400f01'
  );
});

test('Binary Sensor: Opening Open', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(openingOpen(false))),
    '0201060c09546573742053656e736f720616d2fc401100'
  );
});

test('Event: Button Long Press', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(buttonLongPress())),
    '0201060c09546573742053656e736f720616d2fc403a04'
  );
});

test('Event: Dimmer Left Three Steps', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(dimmerRotateLeft(3))),
    '0201060c09546573742053656e736f720716d2fc403c0103'
  );
});

test('Event: Power On', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(powerOn(true))),
    '0201060c09546573742053656e736f720616d2fc401001'
  );
});

test('Multi Event: Second Button Pressed, Third Button Triple Pressed', (t) => {
  t.is(
    asHexString(new BTHomeDevice('Test Sensor').encode(buttonNone(), buttonPress(), buttonTriplePress())),
    '0201060c09546573742053656e736f720a16d2fc403a003a013a03'
  );
});
