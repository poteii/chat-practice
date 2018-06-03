export interface LoginResponse {
    //? => optional
    result?: {
        email?: string,
        uid?: string;
    }
    error?: {
        code?: string,
        message?: string
    }
}