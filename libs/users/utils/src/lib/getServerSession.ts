import { getServerSession } from "next-auth"
import { authOptions } from "./authOptions"

const getSSRsession  = async () => {
  const session = await getServerSession(authOptions)
  return session;
}

export { getSSRsession as getServerSession }