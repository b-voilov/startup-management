export class User {
  constructor(private readonly email: string, private readonly passwrodHash: string) { }
  signDocs(docs: Doc[]) { }
}

export class Startup extends User {
  public recieveOffer(offer: Offer) { }
  public recieveCounterOffer(offer: Offer) { }


}
export class Doc {
  private signedHash: string | undefined;
  constructor(private readonly text: string) { }
  sign(signature: string) { }
}
export class Offer {
  constructor(private readonly amount: number, private readonly shares: number, private readonly additionalInfo: string, private readonly investor: Investor, private readonly startup: Startup) { }
  public accept()
  public confirm()
  public generateDocs(): Doc[]
  public fulfill()
}

export class Investor extends User {
  private readonly shares: [Startup, number][];
  public makeOfferTo(startup: Startup, offer: Offer) { }
  public recieveCounterOffer(offer: Offer) { }
}