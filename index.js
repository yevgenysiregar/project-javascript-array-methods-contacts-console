const names = ["Sadio Mane", "Bobby Firmino", "Mo Salah"];

names.map(function(name, index) {
  console.log(`${index + 1}. ${name}`);
});

const lfcPlayer = ["Sadio Mane", "Bobby Firmino", "Mo Salah"];

console.log(
  lfcPlayer.filter(function(player) {
    return player.length > 9;
  })
);

const myContacts = [
  {
    id: 1,
    name: "Sadio Mane",
    phone: "+44 12345678",
    email: "sadio@Mane.com"
  },
  {
    id: 2,
    name: "Bobby Firmino",
    phone: "+44 910111213",
    email: "bobby@firmino.com"
  },
  {
    id: 3,
    name: "Mo Salah",
    phone: "+44 1415161718",
    email: "mo@salah.com"
  }
];
myContacts.map(function(showContact) {
  const contactData = showContact;
  console.log(
    `[${contactData.id}], ${contactData.name}, (${contactData.phone}), <${
      contactData.email
    }>`
  );
});

const contact = myContacts.filter(function(contacts) {
  return contacts.id < 3;
});

console.log(contact);
