import { COLOR_BLUE } from '../types/ColorTypes';
import {TYPE_BOARD } from '../types/PositionTypes';
import PawnFactory from '../core/Factories/PawnFactory';
const props= {id:1,positionIndex:2,color:COLOR_BLUE, positionType:TYPE_BOARD, counter:2, result:5,nextPositionType:TYPE_BOARD};

test("When call create function with props then function return pawn with right values", ()=>{
    const {id, color,positionIndex, positionType, counter, nextPositionType}=props;
    expect(PawnFactory.create(props)).toEqual({
         id,
         color,
         positionIndex,
         nextPositionIndex: 7,
         positionType,
         nextPositionType,
         counter,
        counterAfterMove: 7
    })
});