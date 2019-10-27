interface Sortable {
    length: number
    compare(leftIndex: number, rightIndex: number): boolean
    swap(leftIndex: number, rightIndex: number): void
}

export default class Sorter {
    constructor(public collection: Sortable) {}
    //use public to shortcut assigning this.collection

    get value(): Sortable {
        return this.collection
    }

    sort(): void {
        const { length } = this.collection

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1)
                }
            }
        }
    }
}
