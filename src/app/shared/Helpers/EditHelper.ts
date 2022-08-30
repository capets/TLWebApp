export class EditHelper {
  static clearIfZero(input: any) {
    input.value = input.value == '0' ? '' : input.value;
  }

  static zeroIfClear(input: any) {
    input.value = input.value == '' ? '0' : input.value;
  }
}
