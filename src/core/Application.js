import rules from "./Helper/Helper";
import moves from "./Moves"
import PawnFactory from './Factories/PawnFactory';
import Queue from "./Queue";
import Message from './Messages';
import unableToMoveFilter from './Filters/unableToMoveFilter';
import Notification from './Notifications';

class Application {
    static analyze(props) {
        const player = Queue.first(props.queue);
        if (!player) {
            return;
        }
        player.pawns.forEach((item) => {
            const pawn = PawnFactory.create({...item, result: props.result});
            rules.check({...props, pawn});
        })

    }

    static move(props) {
        props && moves.makeMove(props);
    }

    static analyzeAfterPropsDidUpdate(props) {
        const {queue, actions, result} = props;
        const player = Queue.first(queue);
        if (player.madeMove && result === 6) {
            actions.hasSecondMove(true);
            Notification.notifyInfo(Message.secondThrow(player));
            return;
        }
        if (player.madeMove) {
            actions.nextPlayer(queue);
            Notification.notifyInfo(Message.nextPlayer(Queue.getNextPlayer(queue)));
            return;
        }
        if (player.pawns.filter(unableToMoveFilter).length === 4) {
            Notification.notifyInfo(Message.unableToMove({player, result}));
            actions.nextPlayer(queue);
            Notification.notifyInfo(Message.nextPlayer(Queue.getNextPlayer(queue)));
        }
    }
}

export default Application;

