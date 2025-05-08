import { GraphQLClientSingleton } from "app/graphql"
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccessTokenCreate"
import { cookies } from "next/headers"

export const createAcessToken = async (email: string, password: string) => {
  const cookieStore = cookies()
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const { customerAccessTokenCreate } = await graphqlClient.request(customerAccessTokenCreateMutation, { email, password })

  const { accessToken, expiresAt } = customerAccessTokenCreate?.customerAccessToken

  if (accessToken) {
    cookieStore.set('accessToken', accessToken, {
      path: '/',
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: 'strict',
    })
  }

  return accessToken
}