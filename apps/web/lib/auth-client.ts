import { createAuthClient } from "better-auth/react";
import { getBaseURL } from "./get-base-url";

export const authClient = createAuthClient({
  baseURL: getBaseURL(),
}) as ReturnType<typeof createAuthClient>;

export const { signIn, signOut, signUp, useSession } = authClient;
