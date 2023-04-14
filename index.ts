import Fastify from "fastify"
const fastify = Fastify()

fastify.get("/", async (request, reply) => {
  const response = await fetch(
    "https://wallhaven.cc/api/v1/search?sorting=random"
  )
  const { data } = await response.json()
  const url = data[0].path

  reply.send({ message: "Here is your random wallpaper", url })
})

const port = parseInt(process.env.PORT || "5000")

// Run the server!
fastify.listen({ port }, (err) => {
  if (err) {
    console.log(`An error occured while trying to listen on port ${port}`)
    process.exit(1)
  } else {
    console.log(`Listening on port ${port} ...`)
  }
})
