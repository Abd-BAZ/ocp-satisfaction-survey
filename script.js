import { db, collection, addDoc, serverTimestamp } from './firebase-config.js';

document.getElementById('satisfactionForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const selected = document.querySelector('input[name="satisfaction"]:checked');

  if (selected) {
    const value = selected.value;
    try {
      await addDoc(collection(db, "surveyResponses"), {
        satisfaction: parseInt(value),
        timestamp: serverTimestamp()
      });

      document.getElementById('responseMessage').innerText = `Thanks for rating us ${value}/5!`;
    } catch (err) {
      console.error("Error saving to Firestore:", err);
      document.getElementById('responseMessage').innerText = `Oops! Something went wrong.`;
    }
  }
});

  