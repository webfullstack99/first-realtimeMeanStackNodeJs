"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username, password, fullName) {
        this.username = username;
        this.password = password;
        this.fullName = fullName;
    }
    /**
     * Getter username
     * @return {string}
     */
    getUsername() {
        return this.username;
    }
    /**
     * Getter password
     * @return {string}
     */
    getPassword() {
        return this.password;
    }
    /**
     * Getter fullName
     * @return {string}
     */
    getFullName() {
        return this.fullName;
    }
    /**
     * Setter username
     * @param {string} value
     */
    setUsername(value) {
        this.username = value;
    }
    /**
     * Setter password
     * @param {string} value
     */
    setPassword(value) {
        this.password = value;
    }
    /**
     * Setter fullName
     * @param {string} value
     */
    setFullName(value) {
        this.fullName = value;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map