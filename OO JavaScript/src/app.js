import $ from "jquery";
import { fleet } from "./fleet-data.js";
import { FleetDataService } from "./services/fleet-data-service.js";
import { ApplicationBase } from "./framework/application-base";

export class App extends ApplicationBase {
    constructor(){
        super('Fleet Manager');
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);
    }
}

export let application = new App();



