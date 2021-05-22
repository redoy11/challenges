// eslint-disable-next-line @typescript-eslint/no-var-requires
const enzyme = require('enzyme');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

enzyme.configure({ adapter: new Adapter() });
