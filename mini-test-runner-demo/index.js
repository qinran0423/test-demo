


const tests = []
export function test(name, callback) {
	tests.push({ name, callback })
}

export function expect(actual) {
	return {
		toBe(expected) {
			if (expected === actual) {
				console.log('ok')
			} else {
				throw Error(`fail actual: ${actual} expected: ${expected}`)
			}
		}
	}
}

export const it = test


export function run() {
	for (const test of tests) {
		test.callback()
	}
}
