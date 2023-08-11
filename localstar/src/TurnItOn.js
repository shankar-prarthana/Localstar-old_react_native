import React, { Component } from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Picker,
} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial'

export default class TurnItOn extends Component {
  static navigationOptions = {
    title: 'TurnItOn',
  };

  constructor(props) {
    super(props);

    this.discoverUnpaired = this.discoverUnpaired.bind(this);
    this.enable = this.enable.bind(this);
    this.pairDevice = this.pairDevice.bind(this);
    this.disable = this.disable.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.connect = this.connect.bind(this);
    this.toggleBluetooth = this.toggleBluetooth.bind(this);
    this.cancelDiscovery = this.cancelDiscovery.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.toggleConnect = this.toggleConnect.bind(this);

    this.state = {
      isItOn: false,
      isEnabled: false,
      discovering: false,
      unpairedDevices: '',
      token: '',
      devices: '',
      device: '',
      devicesFormatted: '',
      connecting: false,
      connected: false
    };
  }

  toggleBluetooth(value) {
    if (value === true) {
      this.enable();
    } else {
      this.disable();
    }
  }

  discoverUnpaired() {
    if (this.state.discovering) {
      return false;
    } else {
      this.setState({ discovering: true });
      BluetoothSerial.discoverUnpairedDevices()
        .then((unpairedDevices) => {
          this.setState({ unpairedDevices, discovering: false });
        })
        .catch((err) => alert(err.message));
    }
  }

  cancelDiscovery() {
    if (this.state.discovering) {
      BluetoothSerial.cancelDiscovery()
        .then(() => {
          this.setState({ discovering: false });
        })
        .catch((err) => alert(err.message));
    }
  }

  pairDevice(device) {
    BluetoothSerial.pairDevice(device.id)
      .then((paired) => {
        if (paired) {
          alert(`Device ${device.name} paired successfully`);
          const devices = this.state.devices;
          devices.push(device);
          this.setState({
            devices,
            unpairedDevices: this.state.unpairedDevices.filter((d) => d.id !== device.id)
          });
        } else {
          alert(`Device ${device.name} pairing failed`);
        }
      })
      .catch((err) => alert(err.message));
  }

  connect(device) {
    this.setState({ connecting: true });
    BluetoothSerial.connect(device.id)
      .then((res) => {
        Toast.showShortBottom(`Connected to device ${device.name}`);
        this.setState({ device, connected: true, connecting: false });
      })
      .catch((err) => Alert(err.message));
  }

  enable() {
    BluetoothSerial.enable()
      .then((res) => this.setState({ isEnabled: true }))
      .catch((err) => alert(err.message));
  }

  disable() {
    BluetoothSerial.disable()
      .then((res) => this.setState({ isEnabled: false }))
      .catch((err) => alert(err.message));
  }

  disconnect() {
    BluetoothSerial.disconnect()
      .then(() => this.setState({ connected: false }))
      .catch((err) => alert(err.message));
  }

  toggleConnect(value) {
    if (value === true && this.state.device) {
      this.connect(this.state.device);
    } else {
      this.disconnect();
    }
  }

  componentWillMount() {

    BluetoothSerial.withDelimiter('\r').then(() => {
      Promise.all([
        BluetoothSerial.isEnabled(),
        BluetoothSerial.list(),
      ]).then(values => {
        const [isEnabled, devices] = values;
      });

      BluetoothSerial.on('read', data => {
        alert(`DATA FROM BLUETOOTH: ${data.data}`);
      });

      BluetoothSerial.on("bluetoothEnabled", () => {
        alert("Bluetooth enabled");
      });

      BluetoothSerial.on("bluetoothDisabled", () => {
        alert("Bluetooth disabled");
      });

      BluetoothSerial.on("connectionSuccess", () => {
        alert("Connectioin success");
      });

      BluetoothSerial.on("error", err => {
        alert("error", err);
      });

      BluetoothSerial.on("connectionLost", () => {
        if (this.state.device) {
          this.connect(this.state.device)
            .then(res => {
              alert("Bluetooth reconnected");
            })
            .catch(err => {
              alert("error", err);
            });
        }
      });
    });
  }

  render() {
      return(
      <View>
      {(this.state.isEnabled) ?
      <Text>Enabled</Text> : <Text>Disabled</Text> }
      </View>
    );
  }
}