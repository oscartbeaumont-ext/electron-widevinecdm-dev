const Application = require('spectron').Application;
const assert = require('assert');
const electronPath = require('electron'); // Require Electron from the binaries included in node_modules.
const path = require('path');

describe('Application launch', function() {
  this.timeout(100000);

  beforeEach(function() {
    this.app = new Application({
      path: electronPath,
      args: [path.join(__dirname, '..')],
      env: {
        NODE_ENV: 'test' // Tell the process it is running as a test
      }
    });
    return this.app.start();
  });

  afterEach(function() {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  it('shows an initial window', function() {
    return this.app.client.getWindowCount().then(function(count) {
      assert.equal(count, 1);
    });
  });

  it('check widevine is loaded correctly', function() {
    return this.app.client
      .getValue('#available-drm-systems')
      .then(function(txt) {
        console.log(txt);
        assert.equal(txt, 'widevine');
      });
  });
});
