export class ExpirationsHelper {
  static expirationProperties(): Map<string, any[]>{
    return new Map<string, any[]>([
        ['Truck', this.getForTrucks()],
        ['Trail', this.getForTrails()],
        ['Driver', this.getForDrivers()],
      ]
    )
  }
  private static getForTrucks(): string[] {
    const output = this.getForVehicles();
    output.push('certTahoExpDate')
    return output;
  }

  private static getForTrails():string[]{
    return [...this.getForVehicles()
    ];
  }

  private static getForVehicles():string[]{
    return [
      'certCemtExpDate',
      'certRcaExpDate',
      'certAgrExpDate',
      'certCVerdeExpDate',
      'certCascoExpDate',
      'certStingExpDate',
      'itpExpDate'
    ];
  }

  private static getForDrivers():string[] {
    return [
      'licExpDate',
      'tahoExpDate',
      'medExpDate',
      'nationalExpDate',
      'passportExpDate'
    ];
  }
}
