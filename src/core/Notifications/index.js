
import { UNABLE_TO_MOVE } from '../../redux/actions/actionTypes';
import { toast } from 'react-toastify';
class Notification{
    static add(props){
        const {
            pawn,
            pawnActions,
            message
        } = props;
        pawnActions.addAction({
            types: [{
                type: UNABLE_TO_MOVE
            }],
            pawn: {...pawn, message}
        });
    }
    static notify(message){
        toast(message);
    }
    static notifyInfo(message){
        toast.info(message);
    }

    static notifyError(message){
        toast.error(message);
    }
}

export default Notification;