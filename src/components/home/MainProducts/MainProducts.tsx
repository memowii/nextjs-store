"use client"

export const MainProducts = () => {
  console.log(process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME);
  console.log(process.env.SHOPIFY_API_KEY);

  return (
    <section>
      <h1>MainProducts</h1>
    </section>
  )
}