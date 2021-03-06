const assert = require('assert')
const isPracticallyEqual = require('is-practically-equal')
const getEuclideanDistance = require('../index')

describe('getEuclideanDistance', () => {
  it('Returns the distance for points in one dimension', () => {
    const a = {
      x: 0.5,
    }
    const b = {
      x: 0.75,
    }
    assert.equal(getEuclideanDistance([
      b.x - a.x,
    ]), 0.25)
  })
  it('Returns the distance for points in two dimensions', () => {
    const a = {
      x: 0.5,
      y: 0.1,
    }
    const b = {
      x: 0.25,
      y: 0.2,
    }
    assert.equal(
      isPracticallyEqual(
        getEuclideanDistance([
          b.x - a.x,
          a.y - b.y,
        ]),
        0.269258,
        0.000001
      ),
      true
    )
  })
  it('Returns the distance for points in three dimensions', () => {
    const a = {
      x: 0.3,
      y: 0.1,
      z: 0.7,
    }
    const b = {
      x: 0.5,
      y: 0.5,
      z: 0.25,
    }
    assert.equal(
      isPracticallyEqual(
        getEuclideanDistance([
          b.x - a.x,
          a.y - b.y,
          b.z - a.z,
        ]),
        0.634429,
        0.000001
      ),
      true
    )
  })
})
