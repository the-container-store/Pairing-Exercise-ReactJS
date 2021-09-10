import { calculateShelvingLength, calculateHangingShelvingLength, calculateDrawerSpace, calculateShoeSpace} from '../storageCalculator';
import { shelvesNoUsers, shelvesWithUsers } from '../../../fixtures/shelvesMockData'
import { hangerNoUsers, hangerWithUsers } from '../../../fixtures/hangersMockData'
import {drawerNoUsers, drawerWithUsers} from '../../../fixtures/DrawersMockData'
import {shoeNoUsers, shoeWithUsers} from '../../../fixtures/shoesMockData'

describe('Calculates available storage', () => {
  it('should calculate the right amount of shelving in inches when no users are specified', () => {
    expect(calculateShelvingLength(shelvesNoUsers)).toEqual(47);
  });
  it('should calculate the right amount of shelving for specified users in inches', () => {
    expect(calculateShelvingLength(shelvesWithUsers, 'u1')).toEqual(24);
  });
  it('should calculate the right amount of hanger space in inches when no users are specified', () => {
    expect(calculateHangingShelvingLength(hangerNoUsers)).toEqual(47);
  });
  it('should calculate the right amount of hanger for specified user in inches', () => {
    expect(calculateHangingShelvingLength(hangerWithUsers, 'u1')).toEqual(71);
  });
  it('should calculate the right amount of drawer space when no users are specified', () => {
    expect(calculateDrawerSpace(drawerNoUsers)).toEqual(5);
  });
  it('should calculate the right amount of drawer space for specified user', () => {
    expect(calculateDrawerSpace(drawerWithUsers, 'u1')).toEqual(1);
  });
  it('should calculate the right amount of shoe space when no users are specified', () => {
    expect(calculateShoeSpace(shoeNoUsers)).toEqual(2);
  });
  it('should calculate the right amount of shoe space for specified user', () => {
    expect(calculateShoeSpace(shoeWithUsers, 'u1')).toEqual(5);
  });
});
