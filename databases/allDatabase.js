import Realm from 'realm';

export const accountDatabase = {
  name: 'Account',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    email: 'string',
    password: 'string',
  },
};
const databaseOptions = {
  path: 'AccountDatabase.realm',
  schema: [accountDatabase],
  schemaVersion: 0,
};

export const writeAccountDatabase = account => {
  Realm.open(databaseOptions)
    .then(realm => {
      realm.write(() => {
        console.log(account);
        let a = realm.objects('Account').length + 1;
        realm.create('Account', {
          id: a,
          name: account.Username,
          email: account.email,
          password: account.password,
        });
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const readAccountDatabase = account => {
  return Realm.open(databaseOptions)
    .then(realm => {
      let accounts = realm.objects('Account');
      return accounts.find(a => {
        return a.email === account.email && a.password === account.password;
      });
      //return accounts;
    })
    .catch(error => {
      console.log(error);
    });
};

export const showAccountDatabase = () =>
  new Promise((resolve, reject) => {
    return Realm.open(databaseOptions)
      .then(realm => realm.objects('Account'))
      .then(accounts => {
        accounts.forEach(account => {
          console.log(account);
        });
      })
      .catch(error => {
        console.log(error);
      });
  });
