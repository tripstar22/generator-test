
var generators = require('yeoman-generator');

module.exports = generators.Base.extend();


module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Next, add your custom code
    this.option('coffee'); // This method adds support for a `--coffee` flag
  }
});

module.exports = generators.Base.extend({
  method1: function () {
    console.log('method 1 just ran');
  },
  method2: function () {
    console.log('method 2 just ran');
  }
});

//generators.Base.extend({
//    init: function () {
//      this.helperMethod = function () {
//        console.log('won\'t be called automatically');
//      };
//    }
//  });

//module.exports = generators.Base.extend({
//  prompting: function () {
//    var done = this.async();
//    this.prompt({
//      type    : 'input',
//      name    : 'test',
//      message : 'generator-test',
//      default : this.appname // Default to current folder name
//    }, function (answers) {
//      this.log(answers.name);
//      done();
//    }.bind(this));
//  }
//})
