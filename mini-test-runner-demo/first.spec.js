import { describe, afterEach, afterAll, beforeAll, beforeEach, expect, test, it, run } from './index.js';

beforeAll(() => {
	console.log('before all')
})

beforeEach(() => {
	console.log('before each')
})
test('test1', () => {
	console.log('this is test1')
	expect(2).toBe(2)
})

it('it', () => {
	console.log('this is it')
	expect(2).toBe(3)
})

afterEach(() => {
	console.log('after each')
})

afterAll(() => {
	console.log('after all')
})

describe('sub', () => {
	test("sub:only test case", () => {
		console.log('sub:only test case')
	})
})


run()