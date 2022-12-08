import {adElement, AdType} from './bt';
import {Data, stringToData} from './data';
import * as Sensors from './measurements/sensor';
import * as BinarySensors from './measurements/binarySensor';
import * as Events from './measurements/event';
import * as Misc from './measurements/misc';
import {BTHomeDeviceProps} from './types';

// “LE General Discoverable Mode”, “BR/EDR Not Supported”
export const BTHOME_FLAGS = [0b00000110];
export const BTHOME_DEVICE_INFO = [0b010_0000_0];
export const BTHOME_SERVICE_UUID = [0xd2, 0xfc];

export class BTHomeEncoder {
  private buffer: Data = [];

  constructor(public device?: BTHomeDeviceProps) {}

  private encodeAdvertisement = () => [
    ...adElement(AdType.FLAGS, BTHOME_FLAGS),
    ...(this.device?.localName ? adElement(AdType.COMPLETE_LOCAL_NAME, stringToData(this.device.localName)) : []),
    ...adElement(AdType.SERVICE_DATA, [...BTHOME_SERVICE_UUID, ...BTHOME_DEVICE_INFO, ...this.buffer.flat()])
  ];

  private sensor = ({objectId, factor, format}: Sensors.Sensor, value: number): this => {
    const data = format(Math.round(value / factor));
    this.buffer.push(objectId, ...data);
    return this;
  };

  private binarySensor = ({objectId}: BinarySensors.BinarySensor, value: boolean): this => {
    this.buffer.push(objectId, value ? 1 : 0);
    return this;
  };

  private event = ({objectId, eventId}: Events.Event, value?: number): this => {
    this.buffer.push(objectId, eventId);
    if (value !== undefined) {
      this.buffer.push(value);
    }
    return this;
  };

  private misc = ({objectId}: Misc.Misc, value: number): this => {
    this.buffer.push(objectId, value);
    return this;
  };

  asArray = () => this.encodeAdvertisement();
  asHexString = () =>
    this.encodeAdvertisement()
      .map((b) => `0${b.toString(16)}`.slice(-2))
      .join('');

  battery = (value: number): this => this.sensor(Sensors.Battery, value);
  co2 = (value: number): this => this.sensor(Sensors.Co2, value);
  count = (value: number): this => this.sensor(Sensors.Count, value);
  count16 = (value: number): this => this.sensor(Sensors.Count16, value);
  count32 = (value: number): this => this.sensor(Sensors.Count32, value);
  current = (value: number): this => this.sensor(Sensors.Current, value);
  dewpoint = (value: number): this => this.sensor(Sensors.Dewpoint, value);
  distanceMillimeters = (value: number): this => this.sensor(Sensors.DistanceMillimeters, value);
  distanceMeters = (value: number): this => this.sensor(Sensors.DistanceMeters, value);
  duration = (value: number): this => this.sensor(Sensors.Duration, value);
  energy = (value: number): this => this.sensor(Sensors.Energy, value);
  humidity = (value: number): this => this.sensor(Sensors.Humidity, value);
  humidity16 = (value: number): this => this.sensor(Sensors.Humidity16, value);
  illuminance = (value: number): this => this.sensor(Sensors.Illuminance, value);
  massKg = (value: number): this => this.sensor(Sensors.MassKg, value);
  massLb = (value: number): this => this.sensor(Sensors.MassLb, value);
  moisture = (value: number): this => this.sensor(Sensors.Moisture, value);
  moisture16 = (value: number): this => this.sensor(Sensors.Moisture16, value);
  pm25 = (value: number): this => this.sensor(Sensors.Pm25, value);
  pm10 = (value: number): this => this.sensor(Sensors.Pm10, value);
  power = (value: number): this => this.sensor(Sensors.Power, value);
  pressure = (value: number): this => this.sensor(Sensors.Pressure, value);
  rotation = (value: number): this => this.sensor(Sensors.Rotation, value);
  speed = (value: number): this => this.sensor(Sensors.Speed, value);
  temperature = (value: number): this => this.sensor(Sensors.Temperature, value);
  temperature10 = (value: number): this => this.sensor(Sensors.Temperature10, value);
  tvoc = (value: number): this => this.sensor(Sensors.Tvoc, value);
  voltage = (value: number): this => this.sensor(Sensors.Voltage, value);
  uvIndex = (value: number): this => this.sensor(Sensors.UVIndex, value);

  batteryHigh = (value: boolean) => this.binarySensor(BinarySensors.BatteryHigh, value);
  batteryCharging = (value: boolean) => this.binarySensor(BinarySensors.BatteryCharging, value);
  carbonMonoxideDetected = (value: boolean) => this.binarySensor(BinarySensors.CarbonMonoxide, value);
  coldDetected = (value: boolean) => this.binarySensor(BinarySensors.Cold, value);
  connectivityConnected = (value: boolean) => this.binarySensor(BinarySensors.Connectivity, value);
  doorOpen = (value: boolean) => this.binarySensor(BinarySensors.Door, value);
  garageDoor = (value: boolean) => this.binarySensor(BinarySensors.GarageDoor, value);
  gasDetected = (value: boolean) => this.binarySensor(BinarySensors.Gas, value);
  genericBoolean = (value: boolean) => this.binarySensor(BinarySensors.GenericBoolean, value);
  heatDetected = (value: boolean) => this.binarySensor(BinarySensors.Heat, value);
  lightDetected = (value: boolean) => this.binarySensor(BinarySensors.Light, value);
  lockUnlocked = (value: boolean) => this.binarySensor(BinarySensors.Lock, value);
  moistureWet = (value: boolean) => this.binarySensor(BinarySensors.MoistureWet, value);
  motionDetected = (value: boolean) => this.binarySensor(BinarySensors.Motion, value);
  moving = (value: boolean) => this.binarySensor(BinarySensors.Moving, value);
  occupancyDetected = (value: boolean) => this.binarySensor(BinarySensors.Occupancy, value);
  openingOpen = (value: boolean) => this.binarySensor(BinarySensors.Opening, value);
  plugPlugged = (value: boolean) => this.binarySensor(BinarySensors.Plug, value);
  powerOn = (value: boolean) => this.binarySensor(BinarySensors.PowerOn, value);
  presenceDetected = (value: boolean) => this.binarySensor(BinarySensors.Presence, value);
  problem = (value: boolean) => this.binarySensor(BinarySensors.Problem, value);
  running = (value: boolean) => this.binarySensor(BinarySensors.Running, value);
  safetySafe = (value: boolean) => this.binarySensor(BinarySensors.Safety, value);
  smokeDetected = (value: boolean) => this.binarySensor(BinarySensors.Smoke, value);
  soundDetected = (value: boolean) => this.binarySensor(BinarySensors.Sound, value);
  tamperDetected = (value: boolean) => this.binarySensor(BinarySensors.Tamper, value);
  vibrationDetected = (value: boolean) => this.binarySensor(BinarySensors.Vibration, value);
  windowClosed = (value: boolean) => this.binarySensor(BinarySensors.Window, value);

  buttonNone = () => this.event(Events.ButtonNone);
  buttonPress = () => this.event(Events.ButtonPress);
  buttonDoublePress = () => this.event(Events.ButtonDoublePress);
  buttonTriplePress = () => this.event(Events.ButtonTriplePress);
  buttonLongPress = () => this.event(Events.ButtonLongPress);
  buttonLongDoublePress = () => this.event(Events.ButtonLongDoublePress);
  buttonLongTriplePress = () => this.event(Events.ButtonLongTriplePress);
  dimmerNone = () => this.event(Events.DimmerNone);
  dimmerRotateLeft = (steps: number) => this.event(Events.DimmerRotateLeft, steps);
  dimmerRotateRight = (steps: number) => this.event(Events.DimmerRotateRight, steps);

  packetId = (id: number) => this.misc(Misc.PacketId, id % 256);
}
