import Helper from '../Helper/Helper';
import Notification from '../Notifications';
import Message from "../Messages";
import Queue from '../Queue';
export default function unableToLeaveBase(props) {
    const {
        pawn,
        result,
        queue
    } = props;
    if (!Helper.isInBase(pawn)) {
        return;
    }
    if (result !== 1 || result !== 6) {
        Notification.add({...props, message: Message.unableToLeaveHome({player:Queue.first(queue), result})});
    }

}