export class ColorByDate {
  static getForTable(date: Date) {
    return this.getColor(TableColors, date);
  }

  static getForInput(date: Date) {
    return this.getColor(InputColors, date);
  }

  private static getColor(colors: any, date: Date): string {
    if (date) {
      if (date <= new Date()) {
        return colors.Danger;
      }
      if (date <= new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDay())) {
        return colors.Warning;
      }
    }
    return colors.Success;
  }
}

enum TableColors {
  Danger = 'table-danger',
  Warning = 'table-warning',
  Success = 'table-success'
}

enum InputColors {
  Danger = 'alert alert-danger',
  Warning = 'alert alert-warning',
  Success = 'alert alert-success'
}
