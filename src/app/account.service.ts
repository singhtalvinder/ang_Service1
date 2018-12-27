import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

// Add Injectable to the service where we want to inject some other service.
// Here we are injecting LoggingService into AccountsService.
@Injectable()
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string> ();

      constructor(private loggingService: LoggingService){}

      addAccount(name: string, status: string) {
          this.accounts.push({name: name, status: status});
          this.loggingService.LogStatusChange(status);
      }

      updateStatus(id:number, status: string) {
          this.accounts[id].status= status;
          this.loggingService.LogStatusChange(status);
      }
}