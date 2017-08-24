const dbPromise = idb.open('keyval-store', 1, upgradeDB => {
  upgradeDB.createObjectStore('keyval');
});
const idbKeyval = {
  get(key) {
    return dbPromise.then(db => {
      return db.transaction('keyval')
        .objectStore('keyval').get(key);
    });
  },
  set(key, val) {
    return dbPromise.then(db => {
      const tx = db.transaction('keyval', 'readwrite');
      tx.objectStore('keyval').put(val, key);
      return tx.complete;
    });
  },
  delete(key) {
    return dbPromise.then(db => {
      const tx = db.transaction('keyval', 'readwrite');
      tx.objectStore('keyval').delete(key);
      return tx.complete;
    });
  },
  clear() {
    return dbPromise.then(db => {
      const tx = db.transaction('keyval', 'readwrite');
      tx.objectStore('keyval').clear();
      return tx.complete;
    });
  },
  keys() {
    return dbPromise.then(db => {
      const tx = db.transaction('keyval');
      const keys = [];
      const store = tx.objectStore('keyval');
      // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
      // openKeyCursor isn't supported by Safari, so we fall back
      (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
        if (!cursor) return;
        keys.push(cursor.key);
        cursor.continue();
      });
      return tx.complete.then(() => keys);
    });
  }
};

var CLIENT_ID = '894633030567-dsnukjrj8jaeo7b4mqk94b4b88h3bian.apps.googleusercontent.com';
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
var SCOPES = "https://www.googleapis.com/auth/calendar";
var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');

function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/* Initializes the API client library and sets up sign-in state listeners.*/
function initClient() {
  gapi.client.init({
    discoveryDocs: DISCOVERY_DOCS,
    clientId: CLIENT_ID,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}

/*Called when the signed in status changes, to update the UI
  appropriately. After a sign-in, the API is called.*/
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    console.log('signed in');
    // findARoom();
  } else {
    console.log()
  }
}

/*Sign in the user upon button click.*/
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/*Sign out the user upon button click.*/
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.querySelector('body');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */
function findARoom() {
  var rightNow = (new Date()).toISOString();
  console.log('rightNow: ' + rightNow);
  var plusThirty = (2).hours().fromNow().toISOString();
  console.log('plusThirty: ' + plusThirty);
  gapi.client.calendar.freebusy.query({
    "timeMin": rightNow,
    "timeMax": plusThirty,
    "groupExpansionMax": 10,
    "calendarExpansionMax": 10,
    "items": [
      {
        "id": "glab.redhat.com_2d33373132303538392d323637@resource.calendar.google.com"
      },
      {
        "id": "glab.redhat.com_2d3734363632303333383533@resource.calendar.google.com"
      },
      {
        "id": "glab.redhat.com_72616c656967682d3230573230342d726f6f66@resource.calendar.google.com"
      },
      {
        "id": "glab.redhat.com_7264752d392d39733431302d736861646f776d616e2d67383165796533333061@resource.calendar.google.com"
      }
    ]
  }).then(function(response) {
    var freeBusy = response;
    // appendPre('Upcoming events:');
    console.log(freeBusy);
  });
}

function reserveTheRoom() {
  var event = {
    'summary': 'Rooms - Rapid Room Reservation',
    'description': 'A quick meeting',
    "start": {
      "dateTime": "2017-08-23T18:00:00-05:00"
    },
    "end": {
      "dateTime": "2017-08-23T19:00:00-05:00"
    },
    "attendees": [
      {
        "email": "redhat.com_72616c656967682d3134773130362d6d6f6e6f706f6c792d382d702d3363486c6d53395a4b@resource.calendar.google.com"
      }
    ]
  }

  var request = gapi.client.calendar.events.insert({
    'calendarId': 'primary',
    'resource': event
  });

  request.execute(function(event) {
    appendPre('Event create: ' + event.htmlLink);
  });
}