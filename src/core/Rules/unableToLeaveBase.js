import Rules from './Rules';
import Notification from '../Notifications';
import Messages from "../Messages";
export default function unableToLeaveBase(props) {
    const {
        pawn,
        result
    } = props;
    if (!Rules.isInBase(pawn)) {
        return;
    }
    if (result !== 1 || result !== 6) {
        Notification.add({...props, message: Messages.unableToLeaveHome(props)});
    }
}