'use strict';

describe('Directive: kvList', function () {
  beforeEach(module('knowledgevisionHtml5PlaylistappApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<kv-list></kv-list>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the kvList directive');
  }));
});
