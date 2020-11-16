"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineUser = void 0;
class OnlineUser {
    constructor(username, socketId) {
        this.username = username;
        this.socketId = socketId;
    }
    /**
     * Getter username
     * @return {string}
     */
    getUsername() {
        return this.username;
    }
    /**
     * Getter socketId
     * @return {string}
     */
    getSocketId() {
        return this.socketId;
    }
    /**
     * Setter username
     * @param {string} value
     */
    setUsername(value) {
        this.username = value;
    }
    /**
     * Setter socketId
     * @param {string} value
     */
    setSocketId(value) {
        this.socketId = value;
    }
    getData() {
        return {
            username: this.getUsername(),
            socketId: this.getSocketId(),
        };
    }
}
exports.OnlineUser = OnlineUser;
//# sourceMappingURL=OnlineUser.js.map