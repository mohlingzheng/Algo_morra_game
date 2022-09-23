'reach 0.1'

const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3)

const winner = (totalFinger, numberAlice, numberBob) => {
    if (numberAlice == numberBob)
        return 1
    else {
        if (totalFinger == numberAlice)
            return 2
        else if (totalFinger == numberBob)
            return 0
        else
            return 1
    }
}

forall(UInt, totalFinger => 
    forall(UInt, numberAlice => 
        forall(UInt, numberBob => 
            assert(isOutcome(winner(totalFinger, numberAlice, numberBob))) )))

forall(UInt, (number) =>
    assert(isOutcome(winner(0, number, number))) )

const Player = {
    ...hasRandom,
    getFinger: Fun([], UInt),
    getNumber: Fun([], UInt),
    seeTotal: Fun([UInt], Null),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([], Null),
}

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        wager: UInt,
        deadline: UInt,
    })
    const Bob = Participant('Bob', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    })
    init()

    const informTimeout = () => {
        each([Alice, Bob] , () => {
            interact.informTimeout()
        })
    }

    Alice.only(() => {
        const amount = declassify(interact.wager)
        const deadline = declassify(interact.deadline)
    })
    Alice.publish(amount, deadline)
        .pay(amount)
    commit()

    Bob.only(() => {
        interact.acceptWager(amount)
    })
    Bob.pay(amount)
        .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout))
    
    var outcome = DRAW
    invariant(balance() == 2 * amount && isOutcome(outcome))
    while (outcome == DRAW){
        commit()

        Alice.only(() => {
            const _fingerAlice = interact.getFinger()
            const _numberAlice = interact.getNumber()
            const [_fingerCommitAlice, _fingerSaltAlice] = makeCommitment(interact, _fingerAlice)
            const [_numberCommitAlice, _numberSaltAlice] = makeCommitment(interact, _numberAlice)
            const fingerCommitAlice = declassify(_fingerCommitAlice)
            const numberCommitAlice =declassify(_numberCommitAlice)
        })
        Alice.publish(fingerCommitAlice, numberCommitAlice)
        commit()
    
        unknowable(Bob, Alice(_fingerAlice, _numberAlice))
        Bob.only(() => {
            const fingerBob = declassify(interact.getFinger())
            const numberBob = declassify(interact.getNumber())
        })
        Bob.publish(fingerBob, numberBob)
            .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout))
        commit()
    
        Alice.only(() => {
            const fingerSaltAlice = declassify(_fingerSaltAlice)
            const numberSaltAlice = declassify(_numberSaltAlice)
            const fingerAlice = declassify(_fingerAlice)
            const numberAlice = declassify(_numberAlice)
        })
        Alice.publish(fingerSaltAlice, numberSaltAlice, fingerAlice, numberAlice)
            .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout))
        
        checkCommitment(fingerCommitAlice, fingerSaltAlice, fingerAlice)
        checkCommitment(numberCommitAlice, numberSaltAlice, numberAlice)
        commit()

        Bob.only(() => {
            const totalFinger = fingerAlice + fingerBob
            interact.seeTotal(totalFinger)
        })
        Bob.publish(totalFinger)
            .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout))
        
        outcome = winner(totalFinger, numberAlice, numberBob)
        continue
    }

    assert(outcome == A_WINS || outcome == B_WINS)
    transfer(2 * amount).to(outcome == A_WINS ? Alice : Bob)
    commit()

    each([Alice, Bob], () => {
        interact.seeOutcome(outcome)
    })
})