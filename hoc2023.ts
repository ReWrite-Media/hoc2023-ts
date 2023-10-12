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

enum UpDown {
    //% block="up"
    Up = SixDirection.Up,
    //% block="down"
    Down = SixDirection.Down
}

enum ForwardBackUpDown {
    //% block="forward"
    Forward = SixDirection.Forward,
    //% block="back"
    Back = SixDirection.Back,
    //% block="up"
    Up = SixDirection.Up,
    //% block="down"
    Down = SixDirection.Down
}

enum Scene1_Scan {
    //% block="horizontally"
    Horizontally = 1,
    //% block="smart"
    Smart = 4
}

enum Scene4_UserLevel {
    //% block="anyone"
    Anyone,
    //% block="user"
    User,
    //% block="admin"
    Admin
}

// global variables
const communicationsTimeout = 100;

//%  block="HOC 2023 Generics" weight=200 color=#005a68 icon="\uf186"
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
     * Move lawnmower to next row
     */
    //% block="start next row"
    export function scene2_LawnmowerNextRow(): void {
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
     * Check user permissions
     */
    //% block="check user permissions"
    export function scene4_CheckUserPermissions(): void {
        pause()
        player.execute("scoreboard players set .output global 3")
    }

    /**
     * Enable log viewing
     */
    //% block="enable log viewing"
    export function scene4_EnableLogViewing(): void {
        pause()
        player.execute("scoreboard players set .output global 1")
    }

    /**
     * Disable log viewing
     */
    //% block="disable log viewing"
    export function scene4_DisableLogViewing(): void {
        pause()
        player.execute("scoreboard players set .output global 2")
    }

    /**
     * Log unauthorized event
     */
    //% block="log unauthorized event"
    export function scene4_LogUnauthorizedEvent(): void {
        pause()
        player.execute("scoreboard players set .output global 5")
    }

    /**
     * Log authorized event
     */
    //% block="log authorized event"
    export function scene4_LogAuthorizedEvent(): void {
        pause()
        player.execute("scoreboard players set .output global 5")
    }

    /**
     * Lock door
     */
    //% block="lock door"
    export function scene4_LockDoor(): void {
        pause()
        player.execute("scoreboard players set .output global 7")
    }

    /**
     * Unlock door
     */
    //% block="unlock door"
    export function scene4_UnlockDoor(): void {
        pause()
        player.execute("scoreboard players set .output global 4")
    }

    /**
     * Wait before locking
     */
    //% block="wait %num minutes"
    export function scene4_WaitMinutes(num: number): void {
        pause()
        player.execute("scoreboard players set .output global 6")
    }

    //helper functions

    function pause(): void {
        loops.pause(communicationsTimeout)
    }

}

//%  block="HOC 2023 Objectives" weight=200 color=#9f8c1c icon="\uf186"
namespace hoc2023Objectives {
    /**
     * Agent Move Direction
     */
    //% block="agent move %d"
    export function pillar_AgentMove(d: ForwardBackUpDown): void {
        agent.move(d, 1)
    }


    /**
     * Agent Place Block
     */
    //% block="agent place `block.PinkWool` %d"
    export function pillar_AgentPlacePinkWoolBlock(d: UpDown): void {
        agent.setItem(PURPLE_WOOL, 1, 1)
        agent.setSlot(1)
        agent.place(d)
    }

    /**
     * Scan for student
     */
    //% block="scan %scan_type"
    export function scene1_Scan(scan_type: Scene1_Scan): void {
        if (scan_type == Scene1_Scan.Smart) {
            player.execute("scoreboard players set .output global 2")
        } else {
            player.execute("scoreboard players set .output global 1")
        }

    }
    /**
     * Cut grass without checking
     */
    //% block="cut grass"
    export function scene2_GrassCut(): void {
        pause()
        player.execute("scoreboard players set .output global 1")
    }
    /**
     * Check for sprinkler before cutting
     */
    //% block="cut grass if no sprinkler"
    export function scene2_CheckSprinklerGrassCut(): void {
        pause()
        player.execute("scoreboard players set .output global 2")
    }
    /**
    * User admin permissions
    */
    //% block="%permission"
    export function scene4_UserAdmin(permission: Scene4_UserLevel): boolean {
        if (permission == Scene4_UserLevel.Admin) {
            return false;
        } else {
            return true;
        }
    }
    function pause(): void {
        loops.pause(communicationsTimeout)
    }

}

//%  block="HOC 2023 Red Agent" weight=200 color=#ad3a27 icon="\uf186"
namespace hoc2023RedAgent {
    /**
     * Move red Agent
     */
    //% block="red agent move %d by %n"
    export function scene5_RedAgent(d: FourDirectionArrows, n: number): void {
        for (let i = 0; i < n; i++) {
            pause()
            switch (d) {
                case FourDirectionArrows.ArrowUpOrange:
                    player.execute("scoreboard players set .output global 11")
                    break;
                case FourDirectionArrows.ArrowDownMagenta:
                    player.execute("scoreboard players set .output global 12")
                    break;
                case FourDirectionArrows.ArrowRightYellow:
                    player.execute("scoreboard players set .output global 13")
                    break;
                case FourDirectionArrows.ArrowLeftBlue:
                    player.execute("scoreboard players set .output global 14")
                    break;
            }
        }
    }
    function pause(): void {
        loops.pause(communicationsTimeout)
    }
}

//%  block="HOC 2023 YellowAgent" weight=200 color=#b99b18 icon="\uf186"
namespace hoc2023YellowAgent {
    /**
     * Move yellow Agent
     */
    //% block="yellow agent move %d by %n"
    export function scene5_YellowAgent(d: FourDirectionArrows, n: number): void {
        for (let i = 0; i < n; i++) {
            pause()
            switch (d) {
                case FourDirectionArrows.ArrowUpOrange:
                    player.execute("scoreboard players set .output global 21")
                    break;
                case FourDirectionArrows.ArrowDownMagenta:
                    player.execute("scoreboard players set .output global 22")
                    break;
                case FourDirectionArrows.ArrowRightYellow:
                    player.execute("scoreboard players set .output global 23")
                    break;
                case FourDirectionArrows.ArrowLeftBlue:
                    player.execute("scoreboard players set .output global 24")
                    break;
            }
        }
    }
    function pause(): void {
        loops.pause(communicationsTimeout)
    }
}

//%  block="HOC 2023 BlueAgent" weight=200 color=#2e69c1 icon="\uf186"
namespace hoc2023BlueAgent {
    /**
     * Move blue Agent
     */
    //% block="blue agent move %d by %n"
    export function scene5_BlueAgent(d: FourDirectionArrows, n: number): void {
        for (let i = 0; i < n; i++) {
            pause()
            switch (d) {
                case FourDirectionArrows.ArrowUpOrange:
                    player.execute("scoreboard players set .output global 31")
                    break;
                case FourDirectionArrows.ArrowDownMagenta:
                    player.execute("scoreboard players set .output global 32")
                    break;
                case FourDirectionArrows.ArrowRightYellow:
                    player.execute("scoreboard players set .output global 33")
                    break;
                case FourDirectionArrows.ArrowLeftBlue:
                    player.execute("scoreboard players set .output global 34")
                    break;
            }
        }
    }
    function pause(): void {
        loops.pause(communicationsTimeout)
    }
}


//%  block="HOC 2023 Green Agent" weight=200 color=#357969 icon="\uf186"
namespace hoc2023GreenAgent {
    /**
     * Move green Agent
     */
    //% block="green agent move %d by %n"
    export function scene5_GreenAgent(d: FourDirectionArrows, n: number): void {
        for (let i = 0; i < n; i++) {
            pause()
            switch (d) {
                case FourDirectionArrows.ArrowUpOrange:
                    player.execute("scoreboard players set .output global 41")
                    break;
                case FourDirectionArrows.ArrowDownMagenta:
                    player.execute("scoreboard players set .output global 42")
                    break;
                case FourDirectionArrows.ArrowRightYellow:
                    player.execute("scoreboard players set .output global 43")
                    break;
                case FourDirectionArrows.ArrowLeftBlue:
                    player.execute("scoreboard players set .output global 44")
                    break;
            }
        }
    }
    function pause(): void {
        loops.pause(communicationsTimeout)
    }
}



