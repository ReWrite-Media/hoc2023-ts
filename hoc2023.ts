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

enum Scene1_Scan {
    //% block="horizontally"
    Horizontally = 1,
    //% block="smart"
    Smart = 4
}

// global variables
const communicationsTimeout = 100;

//%  block="HOC 2023" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc2023 {

    /**
     * Loop during lunch time
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
     * Scan for student
     */
    //% block="scan %scan_type"
    export function scene1_Scan(scan_type: Scene1_Scan): void {
        if (scan_type == Scene1_Scan.Smart) {
            player.execute("scoreboard players set .output global 2")
        } else{
            player.execute("scoreboard players set .output global 1")
        }
        
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
        player.execute("scoreboard players set .output global 3")
        player.execute("scoreboard players set .output global 4")
    }
    /**
     * Move lawnmower forward
     */
    //% block="move lawnmower forward"
    export function scene2_LawnmowerMoveForward(): void {
        player.execute("scoreboard players set .output global 3")
    }

    /**
     * Checks for human detection
     */
    //% block="human detected"
    export function scene4_HumanDetected(): boolean {
        return true;
    }

    /**
    * Checks is user is authorized
    */
    //% block="user authorized"
    export function scene4_UserAuthorized(): boolean {
        return true;
    }

    /**
    * Return user permissions
    */
    //% block="user permissions"
    export function scene4_UserPermissions(): boolean {
        return true;
    }

    /**
    * Check if door closed
    */
    //% block="door closed"
    export function scene4_DoorClosed(): boolean {
        return true;
    }

    /**
    * User admin permissions
    */
    //% block="admin"
    export function scene4_UserAdmin(): boolean {
        return true;
    }

    /**
     * Check user permissions
     */
    //% block="check user permissions"
    export function scene4_CheckUserPermissions(): void {
        player.execute("scoreboard players set .output global 5")
    }

    /**
     * Enable log viewing
     */
    //% block="enable log viewing"
    export function scene4_EnableLogViewing(): void {
        player.execute("scoreboard players set .output global 1")
    }

    /**
     * Disable log viewing
     */
    //% block="disable log viewing"
    export function scene4_DisableLogViewing(): void {
        player.execute("scoreboard players set .output global 2")
    }

    /**
     * Log unauthorized event
     */
    //% block="log unauthorized event"
    export function scene4_LogUnauthorizedEvent(): void {
        player.execute("scoreboard players set .output global 5")
    }

    /**
     * Log authorized event
     */
    //% block="log authorized event"
    export function scene4_LogAuthorizedEvent(): void {
        player.execute("scoreboard players set .output global 5")
    }

    /**
     * Lock door
     */
    //% block="lock door"
    export function scene4_LockDoor(): void {
        player.execute("scoreboard players set .output global 5")
    }

    /**
     * Unlock door
     */
    //% block="unlock door"
    export function scene4_UnlockDoor(): void {
        player.execute("scoreboard players set .output global 5")
    }

    /**
     * Wait before locking
     */
    //% block="wait %num minutes"
    export function scene4_WaitMinutes(num: number): void {
        player.execute("scoreboard players set .output global 5")
    }

    //helper functions

    function pause(): void{
        loops.pause(communicationsTimeout)
    }
}