using System;
using System.Threading.Tasks;
using SpcModels;

namespace SpcCore.Interfaces.Services
{
    public interface IRestService
    {
        HttpResponse Get(string Url);
        Task<HttpResponse> GetAsync(string Url);
    }
}
