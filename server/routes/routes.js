const StatusCode = {
  SUCCESS: 700,
  ERROR: 800,
  NOT_FOUND: 900,
}

const StatusPhrase = {
  [StatusCode.SUCCESS]: "OK",
  [StatusCode.ERROR]: "ERROR",
  [StatusCode.NOT_FOUND]: "NOT FOUND",
}

module.exports = (app) => {
  app.get("/", (req, res) => {
    const statusCode = StatusCode.SUCCESS
    const statusPhrase = StatusPhrase[statusCode]
    res.render("index")
    console.log("🚀 ~ server ~ status:", statusCode, statusPhrase)
  })

  app.get("/white", (req, res) => {
    const statusCode = StatusCode.SUCCESS
    const statusPhrase = StatusPhrase[statusCode]
    res.render("game", {
      color: "white",
    })
    console.log("🚀 ~ server ~ status:", statusCode, statusPhrase)
  })
  app.get("/black", (req, res) => {
    if (!games[req.query.code]) {
      const statusCode = StatusCode.SUCCESS
      const statusPhrase = StatusPhrase[statusCode]
      console.log("🚀 ~ server ~ status:", statusCode, statusPhrase)
      return res.redirect("/?error=invalidCode")
    }
    const statusCode = StatusCode.SUCCESS
    const statusPhrase = StatusPhrase[statusCode]
    res.render("game", {
      color: "black",
    })
    console.log("🚀 ~ server ~ status:", statusCode, statusPhrase)
  })

  app.get("/health", (req, res) => {
    const statusCode = StatusCode.SUCCESS
    const statusPhrase = StatusPhrase[statusCode]
    res.status(statusCode).send(`${statusCode} ${statusPhrase}`)
    console.log("🚀 ~ server ~ status:", statusCode, statusPhrase)
  })

  app.get("/nt", (req, res) => {
    const statusCode = StatusCode.NOT_FOUND
    const statusPhrase = StatusPhrase[statusCode]
    res.status(statusCode).send({ message: "NOT FOUND" })
    console.log("🚀 ~ server ~ status:", statusCode, statusPhrase)
  })
}
