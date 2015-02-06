var path = require('path');

describe('browserify', function() {
  it('it should browserify', function(done) {
    var browserify = require('browserify');
    var b = browserify();
    b.add(path.join(__dirname, '/../index.js'));
    var s = b.bundle();
    s.on('error', function(err){
      done(err);
    });

    s.once('data', function(){
      done();
    });
  });
});
