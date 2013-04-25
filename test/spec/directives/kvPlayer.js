'use strict';

describe('Directive: kvPlayer', function () {
  beforeEach(module('knowledgevisionHtml5PlaylistappApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<kv-player></kv-player>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the kvPlayer directive');
  }));
});
