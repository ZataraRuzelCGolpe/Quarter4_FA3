
    let contacts = [];

    function displayContacts() {
      document.getElementById('contactsList').innerText = contacts.join(' ');
    }

    function addContact() {
      const input = document.getElementById('nameInput');
      const name = input.value.trim();
      if (name) {
        if (contacts.length === 7) {
          contacts.shift(); 
        }
        contacts.push(name);
        input.value = '';
        displayContacts();
      }
    }
    function removeContact() {
      contacts.pop();
      displayContacts();
    }


