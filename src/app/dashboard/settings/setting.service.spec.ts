/* tslint:disable:no-unused-variable */
import {TestBed, inject} from "@angular/core/testing";
import {SettingService} from "./setting.service";

describe('SettingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingService]
    });
  });

  it('should ...', inject([SettingService], (service: SettingService) => {
    expect(service).toBeTruthy();
  }));
});
