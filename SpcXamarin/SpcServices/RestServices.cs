using System;
using System.Net;
using System.IO;
using System.Threading.Tasks;

using SpcModels;
using SpcCore.Interfaces.Services;

namespace SpcServices
{
    public class RestServices : IRestService
    {
        //TODO: falta setear los headers incluido el token de usuario.

        /// <summary>
        /// Get the specified Url.
        /// </summary>
        /// <returns>The get.</returns>
        /// <param name="Url">URL.</param>
        public HttpResponse Get(string Url)
        {
            var request = WebRequest.Create(Url);
            request.ContentType = "application/json";
            request.Method = "GET";
            using (HttpWebResponse httpResponse = request.GetResponse() as HttpWebResponse)
            {
                return BuildResponse(httpResponse);
            }
        }

        /// <summary>
        /// Gets the async.
        /// </summary>
        /// <returns>The async.</returns>
        /// <param name="Url">URL.</param>
        public async Task<HttpResponse> GetAsync(string Url)
        {
            var request = WebRequest.Create(Url);
            request.ContentType = "application/json";
            request.Method = "GET";
            using (HttpWebResponse httpResponse = await request.GetResponseAsync() as HttpWebResponse)
            {
                return BuildResponse(httpResponse);
            }
        }


        #region Private methods
        /// <summary>
        /// Builds the response.
        /// </summary>
        /// <returns>The response.</returns>
        /// <param name="httpResponse">Http response.</param>
        private static HttpResponse BuildResponse(HttpWebResponse httpResponse)
        {
            using (StreamReader reader = new StreamReader(httpResponse.GetResponseStream()))
            {
                var content = reader.ReadToEnd();
                var response = new HttpResponse();
                response.Content = content;
                response.HttpStatusCode = httpResponse.StatusCode;

                return response;
            }
        }
        #endregion
    }
}
