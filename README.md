# @avil13/mapper

![npm bundle size](https://img.shields.io/bundlephobia/minzip/@avil13/mapper)
![npm version](https://img.shields.io/npm/v/@avil13/mapper)

A simple TypeScript object mapper on decorators.

Used if you need to convert one object to the appearance of another.

## Installation

```sh
yarn add @avil13/mapper

OR

npm i @avil13/mapper
```

## Example:
```ts
import { MapperItem } from '@avil13/mapper';

/* Arrange */

const handler = (data: PassportData): string => `${data.name} ${data.surname}`;

interface PassportData {
  dates: {
    issueDate: string;
  };
  name: string;
  surname: string;
}


// A class that will map properties
class Passport {
  private data: PassportData;

  constructor(data: PassportData) {
    this.data = data;
  }

  @MapperItem('data', 'dates.issueDate')
  issueDate!: string;  // Create new property

  @MapperItem('data', null, handler)
  fullName!: string;   // Create new property
}

/* Act */

const passport = new Passport({
  dates: {
    issueDate: '15.04.1452',
  },
  name: 'Leo',
  surname: 'da Vinci',
});


/* Assert */

passport.issueDate === '15.04.1452' // true
passport.fullName === 'Leo da Vinci' // true
```

That's it, congratulations, things are a little easier now)))

---

And a little bit about the signature

```ts
MapperItem(
  // key in target object, if null take the entire object
  dataPath: string | null,
  // key in target object, if null take the entire object
  dataItemPath: string | null,
  // function that can change the data before retrieving it from the object
  handler?: (item: any) => any,
)
```
