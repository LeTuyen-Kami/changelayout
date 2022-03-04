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

function checkHaveEmail(email) {
  const realm = new Realm(databaseOptions);
  const data = realm.objects('Account');

  return data.find(item => item.email === email);
}

export const writeAccountDatabase = account => {
  if (checkHaveEmail(account.email)) {
    return false;
  } else {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let a = realm.objects('Account').length + 2;
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
    return true;
  }
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
