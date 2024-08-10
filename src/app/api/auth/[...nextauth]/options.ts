import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any): Promise<any> {
                const isPasswordCorrect = credentials.password === 'estoria'
                if (isPasswordCorrect) {
                    return {
                        id: "admin",
                        isVerified: true
                    }
                }
                else {
                    throw new Error("Incorrect Password")
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id?.toString()
                token.isVerified = user.isVerified
            }
            return token
        },
        async session({ session, token }) {

            if (token) {
                session.user.id = token.id
                session.user.isVerified = token.isVerified
            }

            return session
        }
    },
    // pages: {
    //     signIn: '/admin/signIn'
    // },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTHAUTH_SECRET
}