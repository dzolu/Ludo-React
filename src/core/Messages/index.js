import Queue from '../Queue';
import { UNABLE_TO_LEAVE_BASE, NEXT_PLAYER_MSG } from '../../types/MessagesTypes';
class Messages{
    static unableToLeaveHome(props){
        return  `${Queue.first(props.queue).name} ${UNABLE_TO_LEAVE_BASE} ${props.result}`
      }
      static nextPlayer(props){
        const nextPlayer=Queue.first(props.queue);
       return `${nextPlayer.name} (${nextPlayer.color} pawns) ${NEXT_PLAYER_MSG}`
      }
}

export default Messages;