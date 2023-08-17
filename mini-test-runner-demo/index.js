const tests = []
const onlys = []
const beforeAlls = []
const beforeEachs = []
const afterAlls = []
const afterEachs = []
export function test(name, callback) {
	tests.push({ name, callback })
}

export function beforeAll(callback) {
	beforeAlls.push(callback)
}

export function beforeEach(callback) {
	beforeEachs.push(callback)
}

export function afterAll(callback) {
	afterAlls.push(callback)
}

export function afterEach(callback) {
	afterEachs.push(callback)
}

export function describe(name, callback) {
	callback()

}
test.only = (name, callback) => {
	onlys.push({ name, callback })
}

export function expect(actual) {
	return {
		toBe(expected) {
			if (expected === actual) {
			} else {
				throw Error(`fail actual: ${actual} expected: ${expected}`)
			}
		}
	}
}

export const it = test

export function run() {
	for (const beforeAllCallback of beforeAlls) {
		beforeAllCallback()
	}
	const suit = onlys.length > 0 ? onlys : tests

	for (const test of suit) {
		for (const beforeEachCallback of beforeEachs) {
			beforeEachCallback()
		}
		try {
			test.callback()
			console.log(`ok ${test.name}`)
		} catch (error) {
			console.log(`fail ${error}`)
		}
		for (const afterEachCallback of afterEachs) {
			afterEachCallback()
		}
	}

	for (const afterAllCallback of afterAlls) {
		afterAllCallback()
	}
}
