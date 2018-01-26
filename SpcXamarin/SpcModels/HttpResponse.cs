using System.Net;

namespace SpcModels
{
    public class HttpResponse
    {
        public HttpResponse()
        {
        }

        public string Content { get; set; }
        public HttpStatusCode HttpStatusCode { get; set; }
    }
}
