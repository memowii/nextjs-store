"use server";
import { GraphQLClientSingleton } from "app/graphql";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";
import { createAcessToken } from "app/utils/auth/createAcessToken";
import { redirect } from "next/navigation";

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData)
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  delete formDataObject.password_confirmation
  const variables = {
    input: {
      ...formDataObject,
      phone: '+52' + formDataObject.phone,
    }
  }

  const { customerCreate } = await graphqlClient.request(createUserMutation, variables)
  const { customerUserErrors, customer } = customerCreate

  if (customer?.firstName) {
    await createAcessToken(customer.email as string, formDataObject.password as string)
    redirect('/store')
  }
}

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData)
  const accessToken =await createAcessToken(formDataObject.email as string, formDataObject.password as string)
  if (accessToken) {
    redirect('/store')
  }
}