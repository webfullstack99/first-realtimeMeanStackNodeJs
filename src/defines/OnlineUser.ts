export class OnlineUser{

    private username: string;
    private socketId: string;


	constructor(username: string, socketId: string) {
        this.username = username;
        this.socketId = socketId;
	}


    /**
     * Getter username
     * @return {string}
     */
	public getUsername(): string {
		return this.username;
	}

    /**
     * Getter socketId
     * @return {string}
     */
	public getSocketId(): string {
		return this.socketId;
	}

    /**
     * Setter username
     * @param {string} value
     */
	public setUsername(value: string) {
		this.username = value;
	}

    /**
     * Setter socketId
     * @param {string} value
     */
	public setSocketId(value: string) {
		this.socketId = value;
    }
    
    public getData(): any{
        return {
            username: this.getUsername(),
            socketId: this.getSocketId(),
        }
    }

}