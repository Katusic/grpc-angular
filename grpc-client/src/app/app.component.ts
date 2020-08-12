import { Component } from '@angular/core';
import { GreeterClient, ServiceError } from 'src/generated/greet_pb_service';
import { HelloRequest, HelloReply } from 'src/generated/greet_pb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grpc-client';

  response: string;
  name: string;

  ngOnInit(): void {

  }

  onSend(): void {
    const client = new GreeterClient('https://localhost:5001');
    const req = new HelloRequest();

    req.setName(this.name);

    client.sayHello(req, (err: ServiceError, response: HelloReply) => {
      if (err) {
        this.response = `Error: {err.message}`;
        return;
      }
      this.response = response.getMessage();
      console.log(this.response);
    });
  }
}
