export class ExpirationsHelper {
  static expirationProperties(): Map<string, Map<string, string>>{
    return new Map<string, Map<string, string>>([
        ['Truck', this.getForTrucks()],
        ['Trail', this.getForTrails()],
        ['Driver', this.getForDrivers()],
      ]
    )
  }
  private static getForTrucks(): Map<string, string> {
    const output = this.getForVehicles();
    output.set('certTahoExpDate', 'Certificat Tahograf');
    return output;
  }

  private static getForTrails():Map<string, string>{
    return new Map<string, string>(this.getForVehicles());
  }

  private static getForVehicles(): Map<string, string>{
    return new Map<string, string>( [
      ['certCemtExpDate', 'Certificat CEMT'],
      ['certRcaExpDate', 'Certificat RCA'],
      ['certAgrExpDate', 'Certificat Agreriere'],
      ['certCVerdeExpDate', 'Carte Verde'],
      ['certCascoExpDate', 'Casco'],
      ['certStingExpDate', 'Certificat Extinctor'],
      ['itpExpDate', 'ITP']
    ]);
  }

  private static getForDrivers(): Map<string, string> {
    return new Map<string, string>( [
      ['licExpDate', 'Permis Conducere'],
      ['tahoExpDate', 'Certificat Tahograf'],
      ['medExpDate', 'Certificat Medical'],
      ['nationalExpDate', 'Buletin'],
      ['passportExpDate', 'Pasaport']
    ]);
  }
}
