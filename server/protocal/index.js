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
