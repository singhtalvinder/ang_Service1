import { Injectable } from "@angular/core";

// This is an alternate way to provide application wide service.
@Injectable({providedIn: 'root'}) 
export class LoggingService  {
    LogStatusChange(status: string) {
        console.log('A Server status changed, new status is:' + status);
    }
}