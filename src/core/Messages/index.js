class Message {
    static unableToMove(props) {
        return `Sorry ${props.player.name} any your your pawn don't have an ability to move with result ${props.result}`
    }

    static unableToLeaveHome(props) {
        return `${props.player.name} you are not able to leave base with result ${props.result}`
    }

    static nextPlayer(player) {
        return `${player.name} (${player.color} pawns) is your turn. Throw the dice, please.`;
    }

    static gameBegin(player) {
        return `${player.name} (${player.color} pawns) you begin the game. Please, throw the dice.`;
    }

    static ownPawnInDestination(player) {
        return `${player.name} sorry, but you cannot move this pawn because in destination is already one of your pawn's`;
    }

    static wrongPawn(player) {
        return `${player.name} your pawns color is ${player.color}. Please click on right pawn.`;
    }

    static doubleThrows(player) {
        return `${player.name} you have throw the dice. Please make a move.`;
    }
}

export default Message;