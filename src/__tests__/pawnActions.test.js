import { COLOR_GREEN } from '../types/ColorTypes';
import { TYPE_BASE } from '../types/PositionTypes';
import * as types from '../redux/actions/actionTypes';
import * as actions from "../redux/actions/pawnActions"
describe('pawn actions',()=>{
    const pawn={
        id: 0,
        color: COLOR_GREEN,
        actions: [],
        positionIndex: 0,
        nextPositionIndex:0,
        positionType: TYPE_BASE,
        nextPositionType:TYPE_BASE,
        counter: 0
    }
    it("should create action for dispatch actions", ()=>{
        const type= types.BEAT_PAWN 
        const expectedAction={type, pawn};
        expect(actions.dispatchAction(type, pawn)).toEqual(expectedAction);
    })
   
    it("should create action for add action to pawn", ()=>{
        const type= types.ADD_ACTION;
        const typeToAdd={
            pawn:pawn,
            types: [{
                type,
                pawn:pawn
            }]
        }
        const expectedAction= {type, ...typeToAdd};
        expect(actions.addAction(typeToAdd)).toEqual(expectedAction);
    })

    it("should create action for next player", ()=>{
        const type= types.NEXT_PLAYER;
        const queue=[pawn,pawn]
        const expectedAction= {type, queue};
        expect(actions.nextPlayer(queue)).toEqual(expectedAction);
    })

    it("should create action for clear some properties after move", ()=>{
        const type= types.CLEAN_AFTER_MOVE_FORWARD;
        const expectedAction= {type, pawn};
        expect(actions.clearAfterMove(pawn)).toEqual(expectedAction);
    })
})