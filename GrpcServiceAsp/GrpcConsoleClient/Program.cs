using System;
using System.Threading.Tasks;
using Grpc.Net.Client;
using GrpcServiceAsp;

namespace GrpcConsoleClient
{
    class Program
    {
        static async Task Main(string[] args)
        {
            using var channel = GrpcChannel.ForAddress("https://localhost:5001");

            var client = new Greeter.GreeterClient(channel);

            var req = new HelloRequest
            {
                Name = "Stipe"
            };

            var resp = await client.SayHelloAsync(req);

            Console.WriteLine(resp.Message);

            Console.ReadKey();
        }
    }
}
