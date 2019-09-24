/* global describe, it */
var expect = require('chai').expect
import { sum } from '../helpers'

describe('sum helper', function () {
  it('should add numbers with argument', function () {
    expect(sum([1, 2, 3, 4, 5])).to.equal(15)
  })

  it('should add numbers with no argument', function () {
    expect(sum()).to.equal(0)
  })

  it('should add numbers with obj', function () {
    expect(sum({})).to.equal(0)
  })
})
