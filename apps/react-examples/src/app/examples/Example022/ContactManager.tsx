import { useState } from 'react';

import { ContactTable } from './ContactTable';
import { EditContact } from './EditContact';
import { initialContacts } from './data';
import { IContact } from './types';

export function ContactManager() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);
  const selectedContact = contacts.find((x) => x.id === selectedId);

  function handleSave(updatedData: IContact) {
    setContacts(contacts.map((c) => c.id === updatedData.id ? updatedData : c));
  }

  return (
    <div>
      <ContactTable
        contacts={contacts}
        selectedId={selectedId}
        onSelect={id => setSelectedId(id)}
      />

      <hr className="bg-gray-300 my-2 mx-5 h-[2px]" />

      {selectedContact &&
        <EditContact
          key={selectedId}
          initialData={selectedContact}
          onSave={handleSave}
        />
      }
    </div>
  );
}
