import 'jest'
import Moves from '../core/Moves';


describe("move class test", ()=>{
    it("When call makeMove with empty queue then function is escape with no crash", ()=>{
        const props={
            queue:[]
        }
        const spy= jest.spyOn(console,"error");
        Moves.makeMove(props);
        expect(spy).toHaveBeenCalled();
    })
})