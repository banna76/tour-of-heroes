export class Measurements {
    name: string;
    id: number;
    id_templates: number;
    visible: boolean;
    symbol: string;
    constructor() {
        this.visible = true;
    }
}

export class Poms {
    name: string;
    id: number;
    id_resources: number;
    id_templates: number;
    measurements: Measurements[];
}

export class Data {
    name: string;
    id: number;
    poms: Poms[];
}

export class SelectedData {
    public locationId:number;
    public deviceId: number;
    public measurementId: number;
    public uniqueId: string;

    public locationName: string;
    public deviceName: string;
    public measurementName: string;    
    public unitSymbol: string;

    public constructor(init?:Partial<SelectedData>){
        Object.assign(this, init);
    }
}