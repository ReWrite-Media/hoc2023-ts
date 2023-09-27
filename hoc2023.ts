//enums
enum FourDirectionArrows {
    //% blockIdentity="blocks.custom" enumval=986 block="Arrow Up Orange"
    //% jres alias=ARROW_UP_ORANGE
    ArrowUpOrange = 986,
    //% blockIdentity="blocks.custom" enumval=985 block="Arrow Down Magenta"
    //% jres alias=ARROW_DOWN_MAGENTA
    ArrowDownMagenta = 985,
    //% blockIdentity="blocks.custom" enumval=984 block="Arrow Right Yellow"
    //% jres alias=ARROW_RIGHT_YELLOW
    ArrowRightYellow = 984,
    //% blockIdentity="blocks.custom" enumval=983 block="Arrow Left Blue"
    //% jres alias=ARROW_LEFT_BLUE
    ArrowLeftBlue = 983
}

// global variables
const communicationsTimeout = 100;

//%  block="HOC 2023" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc2023 {

    /**
     * loop during lunch time
     */
    //% block="lunch time"
    export function scene1_LunchTime(): boolean {
        return true;
    }

    /**
     * Detect Student
     */
    //% block="student found"
    export function scene1_DetectStudent(): boolean {
        return true;
    }

    /**
     * Scan horizontally for student
     */
    //% block="scan horizontally"
    export function scene1_ScanHorizontally(): void {
        player.execute("scoreboard players set .output global 1")
    }

    /**
     * Smart scan for student
     */
    //% block="smart scan"
    export function scene1_SmartScan(): void {
        player.execute("scoreboard players set .output global 2")
    }

    /**
     * Serve Lunch
     */
    //% block="serve lunch"
    export function scene1_ServeLunch(): void {
        player.execute("scoreboard players set .output global 3")
    }

    /**
     * Wait for next student
     */
    //% block="wait for next student"
    export function scene1_WaitStudent(): void {
        player.execute("scoreboard players set .output global 4")
    }

    /**
     * Cut grass without checking
     */
    //% block="cut grass"
    export function scene2_GrassCut(): void {
        player.execute("scoreboard players set .output global 1")
    }
    /**
     * Check for sprinkler before cutting
     */
    //% block="cut grass if no sprinkler"
    export function scene2_CheckSprinklerGrassCut(): void {
        player.execute("scoreboard players set .output global 2")
    }
    /**
     * Move lawnmower to next row
     */
    //% block="start next row"
    export function scene2_LawnmowerNextRow(): void{
        pause()
        player.execute("scoreboard players set .output global 3")
        pause()
        player.execute("scoreboard players set .output global 4")
    }
    /**
     * Move lawnmower forward
     */
    //% block="move lawnmower forward"
    export function scene2_LawnmowerMoveForward(): void {
        pause()
        player.execute("scoreboard players set .output global 3")
    }

    //helper functions

    function pause(): void{
        loops.pause(communicationsTimeout)
    }
}