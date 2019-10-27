export default class NumbersCollection {
    constructor(public data: number[]) {}

    get length(): number {
        return this.data.length
    }
    get value(): number[] {
        return this.data
    }

    compare = (leftIndex: number, rightIndex: number): boolean => {
        return this.data[leftIndex] > this.data[rightIndex]
    }

    swap = (leftIndex: number, rightIndex: number): void => {
        const leftHand = this.data[leftIndex]
        this.data[leftIndex] = this.data[rightIndex]
        this.data[rightIndex] = leftHand
    }
}
