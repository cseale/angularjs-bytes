import angular from 'angular';
import 'angular-mocks';

import angularjsBytes from './index';

describe('angularjs-bytes', function () {
  let ngBytes;

  beforeEach(angular.mock.module(angularjsBytes));

  beforeEach(inject(function(_$filter_) {
    ngBytes = _$filter_('ngBytes');
  }));

  describe('ngBytes', function () {
    it('should be defined correctly', function () {
      expect(angularjsBytes).toBe('angularjs-bytes');
      expect(ngBytes).toBeDefined();
      expect(typeof ngBytes).toBe('function');
    });

    const testCases = [
      {
        value: 1024,
        expected: '1KB',
        options: null},
      {
        value: 1000,
        expected: '1000B',
        options: null
      },
      {
        value: 1000,
        expected: '1,000B',
        options: {thousandsSeparator: ','}
      },
      {
        value: 1024 * 1.7,
        expected: '2KB',
        options: {decimalPlaces: 0}
      },
      {
        value: 1024,
        expected: '1 KB',
        options: {unitSeparator: ' '}
      }
    ];

    testCases.forEach((testCase) => {
      it(`should convert ${testCase.value} to ${testCase.expected}`, function () {
        expect(ngBytes(testCase.value, testCase.options)).toBe(testCase.expected);
      });
    });
  });
});
