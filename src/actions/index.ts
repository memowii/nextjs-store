"use server";
import { GraphQLClientSingleton } from "app/graphql";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";

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

  const data = await graphqlClient.request(createUserMutation, variables)
  console.log(data)
  // return data
}
