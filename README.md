# @avil13/mapper

![npm bundle size](https://img.shields.io/bundlephobia/minzip/@avil13/mapper)
![npm version](https://img.shields.io/npm/v/@avil13/mapper)

A simple TypeScript object mapper on decorators.

Used if you need to convert one object to the appearance of another.

## Example:
```ts
import { MapperItem } from '@avil13/mapper';

// Arrange
const handler = (data: PassportData): string => `${data.name} ${data.surname}`;

class Passport {
  data: PassportData;

  constructor(data: PassportData) {
    this.data = data;
  }

  @MapperItem('data', 'dates.issueDate')
  issueDate!: string;

  @MapperItem('data', null, handler)
  fullName!: string;
}

// Act
const passport = new Passport({
  dates: {
    issueDate: '15.04.1452',
  },
  name: 'Leo',
  surname: 'da Vinci',
});


// Assert
passport.issueDate === '15.04.1452' // true
passport.fullName === 'Leo da Vinci' // true
```

