import {
    beatPawn,
    leaveBase,
    moveForward,
    moveToHome,
    noPawnOnBoard,
    secondChance,
    unableToLeaveBase,
    win
} from "./rules";


export default  [unableToLeaveBase, leaveBase, moveForward, moveToHome, noPawnOnBoard, beatPawn, secondChance, win];