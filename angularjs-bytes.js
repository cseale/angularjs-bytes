import bytes from 'bytes';

export default angular
  .module('angularjs-bytes', [])
  .filter('ngBytes', () => (input, options) => bytes(input, options))
  .name;
