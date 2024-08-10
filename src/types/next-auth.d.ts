import 'next-auth'
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
    interface User {
        id?: string
        isVerified?: boolean
    }

    interface Session {
        user: {
            id?: string
            isVerified?: boolean
        } & DefaultSession['user']
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id?: string
        isVerified?: boolean
    }
}