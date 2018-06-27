
import * as types from '../redux/actions/actionTypes';
import * as actions from "../redux/actions/diceActions"
describe('dice actions',()=>{ 
    it("should create action for throw dice", ()=>{
        const type= types.THROW_DICE 
        const diceResult=5;
        const expectedAction={type, diceResult};
        expect(actions.throwDice(diceResult)).toEqual(expectedAction);
    })
})