/**
 * Trigger Lambda from AWS Event
 * Elastic Load Balancer: https://docs.aws.amazon.com/lambda/latest/dg/services-alb.html
 **/
const middy = require('@middy/core')
const httpRouterHandler = require('@middy/http-router')
const errorLoggerMiddleware = require('@middy/error-logger')
const inputOutputLoggerMiddleware = require('@middy/input-output-logger')
const httpContentNegotiationMiddleware = require('@middy/http-content-negotiation')
const httpContentEncodingMiddleware = require('@middy/http-content-encoding')
const httpCorsMiddleware = require('@middy/http-cors')
const httpErrorHandlerMiddleware = require('@middy/http-error-handler')
const httpEventNormalizerMiddleware = require('@middy/http-event-normalizer')
const httpHeaderNormalizerMiddleware = require('@middy/http-header-normalizer')
const httpJsonBodyParserMiddleware = require('@middy/http-json-body-parser')
const httpMultipartBodyParserMiddleware = require('@middy/http-multipart-body-parser')
const httpPartialResponseMiddleware = require('@middy/http-partial-response')
const httpResponseSerializerMiddleware = require('@middy/http-response-serializer')
const httpSecurityHeadersMiddleware = require('@middy/http-security-headers')
const httpUrlencodeBodyParserMiddleware = require('@middy/http-urlencode-body-parser')
const httpUrlencodePathParametersParserMiddleware = require('@middy/http-urlencode-path-parser')
const validatorMiddleware = require('validator') // or `middy-ajv`
const warmupMiddleware = require('warmup')

const config = {
  timeoutEarlyInMillis: 50,
  timeoutEarlyResponse: () => {
    return {
      statusCode: 408
    }
  }
}

const getHandler = middy((event, context) => {
  return {
    statusCode: 200,
    body: '{...}'
  }
}, config)
  .use(validatorMiddleware({ inputSchema: {} }))

const postHandler = middy((event, context) => {
  return {
    statusCode: 200,
    body: '{...}'
  }
}, config)
  .use(validatorMiddleware({ inputSchema: {} }))

const routes = [{
  method: 'GET',
  path: '/user/{id}',
  handler: getHandler
},
{
  method: 'POST',
  path: '/user',
  handler: postHandler
}]

const handler = middy(httpRouterHandler(routes))
  .use(errorLoggerMiddleware())
  .use(warmupMiddleware())
  .use(inputOutputLoggerMiddleware())
  .use(httpEventNormalizerMiddleware())
  .use(httpHeaderNormalizerMiddleware())
  .use(
    httpContentNegotiationMiddleware({
      availableLanguages: ['en-CA', 'fr-CA'],
      availableMediaTypes: ['application/json']
    })
  )
  .use(httpUrlencodePathParametersParserMiddleware())
  // Start oneOf
  .use(httpUrlencodeBodyParserMiddleware())
  .use(httpJsonBodyParserMiddleware())
  .use(httpMultipartBodyParserMiddleware())
  // End oneOf
  .use(httpSecurityHeadersMiddleware())
  .use(httpCorsMiddleware())
  .use(httpContentEncodingMiddleware())
  .use(
    httpResponseSerializerMiddleware({
      serializers: [
        {
          regex: /^application\/json$/,
          serializer: ({ body }) => JSON.stringify(body)
        }
      ],
      default: 'application/json'
    })
  )
  .use(httpPartialResponseMiddleware())
  .use(httpErrorHandlerMiddleware())

module.exports = { handler }