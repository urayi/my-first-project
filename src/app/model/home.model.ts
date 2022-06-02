export class Home {

  constructor(
    public pared: string,
    public piso: {
      color: string;
      material: string;
    },
    public techo?: string
    ) {}

}
