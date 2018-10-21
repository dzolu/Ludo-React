import 'jest'
import Moves from '../core/Moves';
import { UNABLE_TO_MOVE } from '../redux/actions/actionTypes';
import Notification from '../core/Notifications';


describe("move class test", ()=>{
    it("When call makeMove with empty queue then function is escape with no crash", ()=>{
        const props={
            queue:[],
            actions: {nextPlayer: jest.fn()} 
        };
        const spy= jest.spyOn(console,"error");
        const spyNextPlayer= jest.spyOn(props.actions,"nextPlayer");
        Moves.makeMove(props);
        expect(spy).toHaveBeenCalled();
        expect(spyNextPlayer).not.toHaveBeenCalled();
    });

    it("When call makeMove and pawn have an action type of UNABLE_TO_MOVE then the notyfication is ", ()=>{
        const message="this is a message";
        const pawnMock={
            actions:[{           
                    type: UNABLE_TO_MOVE,               
                   pawn: {...{}, message}
               }],
               message
       };
        const player={
            pawns:[pawnMock]
        };
      
        const props={
            id:0,
            queue:[player]
        };
        var notificationSpy=jest.spyOn(Notification,"notifyError");
        Moves.makeMove(props);
        expect(notificationSpy).toHaveBeenCalledWith(message);
    })
});