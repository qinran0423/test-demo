import { expect, test, it, run } from './index.js';


test('test1', () => {
	console.log('this is test1')
	expect(2).toBe(2)
})

it('it', () => {
	console.log('this is it')
})

run()