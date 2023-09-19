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
     * Cut grass without checking
     */
    //% block="cut grass"
    export function scene2_GrassCut(): void {
        player.execute("scoreboard players set scene2a output 1")
    }
    /**
     * Check for sprinkler before cutting
     */
    //% block="cut grass if no sprinkler"
    export function scene2_CheckSprinklerGrassCut(): void {
        player.execute("scoreboard players set scene2a output 2")
    }
    /**
     * Move lawnmower to next row
     */
    //% block="start next row"
    export function scene2_LawnmowerNextRow(): void{
        agent.move(FORWARD, 1)
        pause()
        player.execute("scoreboard players add scene2b output 1")
    }
    /**
     * Move lawnmower forward
     */
    //% block="move lawnmower forward"
    export function scene2_LawnmowerMoveForward(): void{
        pause()
        agent.move(FORWARD, 1)
    }

    //helper functions

    function pause(): void{
        loops.pause(communicationsTimeout)
    }
}