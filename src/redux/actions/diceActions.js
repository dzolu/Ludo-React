import * as Types from "./actionTypes"

export function throwDice(diceResult) {
    return {type: Types.THROW_DICE, diceResult}
}

export function throwSix(diceResult) {
    return {type: Types.THROW_DICE, diceResult}
}
