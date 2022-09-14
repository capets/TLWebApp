import {Injectable} from "@angular/core";
enum ValidationPattern{
  Numbers = "^[0-9]*\\.?[0-9]+$"
}

@Injectable({
  providedIn:'root'
})
export class ValidationHelper {
  get Pattern(){
    return ValidationPattern;
  }
  static getValidationMessages(): Map<string, any[]>{
    return new Map<string, any[]>([
      ['plateNumber',
        [
          {type: 'required', message: 'Numarul este obligatoriu'},
          {type: 'minlength', message: 'Username must be at least 5 characters long'},
          {type: 'maxlength', message: 'Username cannot be more than 25 characters long'},
          {type: 'pattern', message: 'Your username must contain only numbers and letters'},
          {type: 'validUsername', message: 'Your username has already been taken'}
        ]
      ],
      ['brand',
        [
          {type: 'required', message: 'Marca este obligatorie'},
        ]
      ],
      ['length',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
          {type: 'pattern', message: 'Introdu un numar'}
        ]
      ],
      ['width',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
          {type: 'pattern', message: 'Introdu un numar'}
        ]
      ],
      ['height',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
          {type: 'pattern', message: 'Introdu un numar'}
        ]
      ],
      ['tank',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
          {type: 'pattern', message: 'Introdu un numar'}
        ]
      ],
      ['summer',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
          {type: 'pattern', message: 'Introdu un numar'}
        ]
      ],
      ['winter',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
          {type: 'pattern', message: 'Introdu un numar'}
        ]
      ],
      ['itpExp',
        [
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['certCemtExp',
        [
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['certAgrExp',
        [
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['certRcaExp',
        [
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['certCVerde',
        [
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['certRcaExp',
        [
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['certCasco',
        [
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['certExtin',
        [
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['certTaho',
        [
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['birthDate',
        [
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['licExpDate',
        [
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['tahoExpDate',
        [
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['medExpDate',
        [
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['nationalExpDate',
        [
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['passportExpDate',
        [
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['firstName',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
        ]
      ],
      ['lastName',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
        ]
      ],
      ['clientName',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
        ]
      ],
      ['wayBill',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
        ]
      ],
      ['openDate',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['orderDate',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['loadingDate',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
          {type: 'bsDate', message: 'Data incorecta'}
        ]
      ],
      ['orderNumber',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
        ]
      ],
      ['cargoVolume',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
          {type: 'pattern', message: 'Introdu un numar'}
        ]
      ],
      ['cargoWeight',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
          {type: 'pattern', message: 'Introdu un numar'}
        ]
      ],
      ['pallets',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
          {type: 'pattern', message: 'Introdu un numar'}
        ]
      ],
      ['mtl',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
          {type: 'pattern', message: 'Introdu un numar'}
        ]
      ],
      ['price',
        [
          {type: 'required', message: 'Campul este obligatoriu'},
          {type: 'pattern', message: 'Introdu un numar'}
        ]
      ],
    ]);
  }
}
