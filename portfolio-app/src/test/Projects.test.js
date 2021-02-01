import chai from 'chai';
// eslint-disable-next-line import/extensions
import { test, test2 } from '../components/Projects.js';

const { assert }  = chai;

describe('projectsTest', () => {
  it('test function should return the string test', () => {
    const result = test();
    assert.equal(result, 'test');
  });

  it('test function should return type of string', () => {
    const result = test();
    assert.typeOf(result, 'string');
  });

  it('test2 function should return the string test', () => {
    const result = test2();
    assert.equal(result, 'test2');
  });

  it('test2 function should return type of string', () => {
    const result = test2();
    assert.typeOf(result, 'string');
  });
});