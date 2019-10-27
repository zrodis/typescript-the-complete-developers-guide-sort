import Sorter from './Sorter'
import NumbersCollection from './NumbersCollection'
import CharactersCollection from './CharactersCollection'
import LinkedList from './LinkedList'

const numbers = new NumbersCollection([10, 2, -1, 0])
const sorter = new Sorter(numbers)
sorter.sort()
console.log('sorted', sorter.value)

const words = new CharactersCollection('hello world')
const sortedWords = new Sorter(words)
sortedWords.sort()
console.log('words', sortedWords.value)

const linkedList = new LinkedList()
linkedList.add(411)
linkedList.add(540)
linkedList.add(-5)
const listSorter = new Sorter(linkedList)
linkedList.print()

listSorter.sort()
linkedList.print()
