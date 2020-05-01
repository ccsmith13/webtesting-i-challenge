const enhancer = require('./enhancer.js');
// test away!
describe('repairing items', () => {
    describe('repair()', () => {
        it('returns item with durability of 100', () => {
            const item = {
                durability: 0
            }
            expect(enhancer.repair(item)).toEqual({ durability: 100 })
        })
    })
})

describe('successful item enhancement', () => {
    describe('succeed()', () => {
        it('adds 1 to current enhancement points if they are less than 20', () => {
            const item = {
                enhancement: 0
            }
            expect(enhancer.succeed(item)).toEqual({ enhancement: 1 })
        })
        it('leaves enhancement at 20 if it already is 20', () => {
            const item = {
                enhancement: 20
            }
            expect(enhancer.succeed(item)).toEqual({ enhancement: 20 })
        })
    })
})

describe('failed item enhancement', () => {
    describe('fail()', () => {
        it('reduces durability by 5 if the current enhancement < 15', () => {
            const item = {
                enhancement: 10,
                durability: 10
            }
            expect(enhancer.fail(item)).toEqual({ enhancement: 10, durability: 5 })
        })
        it('does not return a negative number in the case above', () => {
            const item = {
                enhancement: 2,
                durability: 3
            }
            expect(enhancer.fail(item)).toEqual({ enhancement: 2, durability: 0 })
        })
        it('reduces durability by 1 if the current enhancement > 16', () => {
            const item = {
                enhancement: 20,
                durability: 10
            }
            expect(enhancer.fail(item)).toEqual({ enhancement: 20, durability: 9 })
        })
        it('does not return a negative number in the case above', () => {
            const item = {
                enhancement: 18,
                durability: 0
            }
            expect(enhancer.fail(item)).toEqual({ enhancement: 18, durability: 0 })
        })
        it('reduces durability by 10 if the current enhancement = 16', () => {
            const item = {
                enhancement: 16,
                durability: 10
            }
            expect(enhancer.fail(item)).toEqual({ enhancement: 16, durability: 0 })
        })
        it('does not return a negative number in the case above', () => {
            const item = {
                enhancement: 16,
                durability: 2
            }
            expect(enhancer.fail(item)).toEqual({ enhancement: 16, durability: 0 })
        })
        it('reduces durability by 10 if the current enhancement = 15', () => {
            const item = {
                enhancement: 15,
                durability: 1
            }
            expect(enhancer.fail(item)).toEqual({ enhancement: 15, durability: 0 })
        })
    })
})