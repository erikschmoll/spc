using System;
using System.Net;

namespace SpcModels
{
    public class HttpResponse
    {
        public string Content { get; set; }
        public HttpStatusCode HttpStatusCode { get; set; }
    }
}
