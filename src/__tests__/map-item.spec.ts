/* eslint-disable max-classes-per-file */
import { MapperItem } from '../map-item.decorator';

interface PassportData {
  dates: {
    issueDate: string;
  };
  name: string;
  surname: string;
}

describe('MapperItem decorator', () => {
  it('Mapping path', () => {
    class Passport {
      @MapperItem('data', 'dates.issueDate')
      issueDate!: string;

      constructor(private data: PassportData) { }
    }

    const passport = new Passport({
      dates: {
        issueDate: '02.09.87',
      },
      name: 'Leo',
      surname: 'Da Vinchi',
    });

    expect(passport.issueDate).toBe('02.09.87');
  });

  it('Handler check', () => {
    const handler = (data: PassportData): string => `${data.name} ${data.surname}`;

    class Passport {
      @MapperItem('data', null, handler)
      fullName!: string;

      constructor(private data: PassportData) { }
    }

    const passport = new Passport({
      dates: {
        issueDate: '02.09.87',
      },
      name: 'Leo',
      surname: 'Da Vinchi',
    });

    expect(passport.fullName).toBe('Leo Da Vinchi');
  });
});
