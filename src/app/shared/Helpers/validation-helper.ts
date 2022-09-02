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
    ]);
  }
}
