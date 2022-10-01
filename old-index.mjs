import { loadStdlib } from "@reach-sh/stdlib"
import * as backend from './build/index.main.mjs'
const stdlib = loadStdlib()

const  startingBalance = stdlib.parseCurrency(100)
const accAlice = await stdlib.newTestAccount(startingBalance)
const accBob = await stdlib.newTestAccount(startingBalance)

const fmt = (x) => stdlib.formatCurrency(x, 4)
const getBalance = async (Who) => fmt(await stdlib.balanceOf(Who))
const beforeAlice = await getBalance(accAlice)
const beforeBob = await getBalance(accBob)
const ctcAlice = accAlice.contract(backend)
const ctcBob = accBob.contract(backend, ctcAlice.getInfo())

const OUTCOME = ['Bob wins', 'Draw', 'Alice wins']

const Player = (Who) => ({
    ...stdlib.hasRandom,
    getFinger: async () => {
        const finger = Math.floor(Math.random() * 6)
        console.log(`${Who} showed ${finger} fingers.`)
        if(Math.random() <= 0.01){
            console.log(`${Who} takes their time showing fingers.`)
            await stdlib.wait(1)
        }
        return finger
    },
    getNumber: async () => {
        const number = Math.floor(Math.random() * 10)
        console.log(`${Who} called ${number}.`)
        if(Math.random() <= 0.01){
            console.log(`${Who} takes their time calling number.`)
            await stdlib.wait(1)
        }
        return number
    },
    seeTotal: (total) => {
        console.log(`Total number of fingers is ${total}.`)
    },
    seeOutcome: (outcome) => {
        console.log(`${Who} saw outcome ${OUTCOME[outcome]}`)
    },
    informTimeout: () => {
        console.log(`${Who} observed a timeout.`)
    }
})

await Promise.all([
    ctcAlice.p.Alice({
        ...Player('Alice'),
        wager: stdlib.parseCurrency(5),
        deadline: 10,
    }),
    ctcBob.p.Bob({
        ...Player('Bob'),
        acceptWager: async (amt) => {
            console.log(`Bob accepts the wager of ${fmt(amt)}.`)
        },
    })
])

const afterAlice = await getBalance(accAlice)
const afterBob = await getBalance(accBob)

console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`)
console.log(`Bob went from ${beforeBob} to ${afterBob}.`)