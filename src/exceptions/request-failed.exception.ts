export class RequestFailedException extends Error {
    constructor(message?: string) {
        super(message);
    }
}