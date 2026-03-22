export default async function verifyAboutPage(context) {
  const doc = await context.client.fetch(`*[_type == "aboutPage"][0]{title, philosophyTitle}`)
  console.log(JSON.stringify(doc))
}
