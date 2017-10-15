export class SettingsService {
  private altBkg: boolean = false;

  setBackground(isAlt: boolean) {
      this.altBkg = isAlt;
  }

  isAltBackground() {
      return this.altBkg;
  }
}